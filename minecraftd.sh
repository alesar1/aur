#!/bin/bash

# The actual program name
declare -r myname="minecraftd"
declare -r game="minecraft"

# General rule for the variable-naming-schema:
# Variables in capital letters may be passed through the command line others not.
# Avoid altering any of those later in the code since they may be readonly.

# You may use this script for any game server of your choice, just alter the config file
[[ ! -z "${SERVER_ROOT}" ]]  && declare -r SERVER_ROOT=${SERVER_ROOT}   || SERVER_ROOT="/srv/${game}"
[[ ! -z "${BACKUP_DEST}" ]]  && declare -r BACKUP_DEST=${BACKUP_DEST}   || BACKUP_DEST="/srv/${game}/backup"
[[ ! -z "${LOGPATH}" ]]      && declare -r LOGPATH=${LOGPATH}           || LOGPATH="/srv/${game}/logs"
[[ ! -z "${BACKUP_PATHS}" ]] && declare -r BACKUP_PATHS=${BACKUP_PATHS} || BACKUP_PATHS="world"
[[ ! -z "${KEEP_BACKUPS}" ]] && declare -r KEEP_BACKUPS=${KEEP_BACKUPS} || KEEP_BACKUPS="10"
[[ ! -z "${GAME_USER}" ]]    && declare -r GAME_USER=${GAME_USER}       || GAME_USER="minecraft"
[[ ! -z "${MAIN_EXECUTABLE}" ]] && declare -r MAIN_EXECUTABLE=${MAIN_EXECUTABLE} || MAIN_EXECUTABLE="minecraft_server.jar"
[[ ! -z "${SESSION_NAME}" ]] && declare -r SESSION_NAME=${SESSION_NAME} || SESSION_NAME="${game}"

# System parameters for java
[[ ! -z "${MINHEAP}" ]] && declare -r MINHEAP=${MINHEAP} || MINHEAP="512M"
[[ ! -z "${MAXHEAP}" ]] && declare -r MAXHEAP=${MAXHEAP} || MAXHEAP="1024M"
[[ ! -z "${THREADS}" ]] && declare -r THREADS=${THREADS} || THREADS="1"
[[ ! -z "${JAVA_PARMS}" ]] && declare -r JAVA_PARMS=${JAVA_PARMS} || JAVA_PARMS="-Xmx${MAXHEAP} -Xms${MINHEAP} -XX:ParallelGCThreads=${THREADS}"

# System parameters for the control script
[[ ! -z "${IDLE_SERVER}" ]]       && declare -r IDLE_SERVER=${IDLE_SERVER}   || IDLE_SERVER="false"
[[ ! -z "${IDLE_SESSION_NAME}" ]] && declare -r IDLE_SESSION_NAME=${IDLE_SESSION_NAME} || IDLE_SESSION_NAME="idle_server"
[[ ! -z "${GAME_PORT}" ]]         && declare -r GAME_PORT=${GAME_PORT}       || GAME_PORT="25565"
[[ ! -z "${CHECK_PLAYER_TIME}" ]] && declare -r CHECK_PLAYER_TIME=${CHECK_PLAYER_TIME} || CHECK_PLAYER_TIME="30"
[[ ! -z "${IDLE_IF_TIME}" ]]      && declare -r IDLE_IF_TIME=${IDLE_IF_TIME} || IDLE_IF_TIME="1200"

# Variables passed over the command line will always override the one from a config file
source /etc/conf.d/${game} || echo "Could not source /etc/conf.d/${game}"

# Check whether sudo is needed at all
if [[ $(whoami) == ${GAME_USER} ]]; then
	SUDO_CMD=""
else
	SUDO_CMD="sudo -u ${GAME_USER}"
fi

# Choose which flavor of netcat is to be used
if which netcat &> /dev/null; then
	NETCAT_CMD="netcat"
elif which ncat &> /dev/null; then
	NETCAT_CMD="ncat"
else
	NETCAT_CMD=""
fi

# Check for sudo rigths
if [[ $(${SUDO_CMD} whoami) != ${GAME_USER} ]]; then
	>&2 echo -e "You have \e[39;1mno permission\e[0m to run commands as $GAME_USER user."
	exit 21
fi

# Pipe any given argument to the game server console
game_command() {
	${SUDO_CMD} screen -S "${SESSION_NAME}" -X stuff "`printf \"$*\r\"`"
}

# Check whether the server is visited by a player otherwise shut it down
idle_server_daemon() {
	# This function is run within a screen session of the GAME_USER therefore SUDO_CMD can be omitted
	if [[ $(whoami) != ${GAME_USER} ]]; then
		>&2 echo "Somehow this hidden function was not executed by the ${GAME_USER} user."
		>&2 echo "This should not have happend. Are you messing around with this script? :P"
		exit 22
	fi

	# Time in seconds for which no player was on the server
	no_player=0

	while true; do
		screen -S "${SESSION_NAME}" -Q select . > /dev/null
		if [[ $? -eq 0 ]]; then
			# Game server is up and running
			screen -S "${SESSION_NAME}" -X stuff "`printf \"list\r\"`"
			# The "player_delimiter" in awk print needs to be 6 for the spigot server
			# since the according information is contained in the 6th not in th 4th column
			if [[ -z $(tail -n 1 "${LOGPATH}/latest.log" | awk '{ print $4 }') ]]; then
				# No player was seen on the server through list
				no_player=$((no_player + CHECK_PLAYER_TIME))
				# Stop the game server if no player was active for at least ${IDLE_IF_TIME}
				[[ "${no_player}" -ge "${IDLE_IF_TIME}" ]] && IDLE_SERVER="false" ${myname} stop
			else
				no_player=0
				# Retry in ${CHECK_PLAYER_TIME} seconds
				sleep ${CHECK_PLAYER_TIME}
			fi
		else
			# Game server is down, listen on port ${GAME_PORT} for incoming connections
			echo "Netcat is listening on port ${GAME_PORT} for incoming connections..."
			${NETCAT_CMD} -v -l ${GAME_PORT}
			echo "Netcat caught an connection. The server is coming up again...."
			IDLE_SERVER="false" ${myname} start
			sleep ${CHECK_PLAYER_TIME}
		fi
	done
}

# Start the server if it is not already running
server_start() {
	# Start the game server
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		echo "A screen ${SESSION_NAME} session is already running. Please close it first."
	else
		echo -en "Starting server... "
		${SUDO_CMD} screen -dmS "${SESSION_NAME}" /bin/bash -c "cd '${SERVER_ROOT}'; java ${JAVA_PARMS} -jar '${SERVER_ROOT}/${MAIN_EXECUTABLE}' nogui"
		echo -e "\e[39;1m done\e[0m"
	fi

	if [[ "${IDLE_SERVER}" == "true" ]]; then
		# Check for the availability of the netcat (nc) binaries
		if [[ -z "${NETCAT_CMD}" ]]; then
			>&2 echo "The netcat binaries are needed for suspending an idle server."
			exit 12
		fi

		# Start the idle server daemon
		${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -Q select . > /dev/null
		if [[ $? -eq 0 ]]; then
			echo "An idles server screen session called ${IDLE_SESSION_NAME} is already running. Please close it first."
		else
			echo -en "Starting idle server daeomon... "
			${SUDO_CMD} screen -dmS "${IDLE_SESSION_NAME}" /bin/bash -c "${myname} idle_server_daemon"
			echo -e "\e[39;1m done\e[0m"
		fi
	else
		# Though IDLE_SERVER is not set to true it could still be running and just have not noticed that the
		# server was started, e.g. by manually triggering server_start again. Reset the idle daemon in this case.
		${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -Q select . > /dev/null
		if [[ $? -eq 0 ]]; then
			${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -X quit
			sleep 0.1
			${SUDO_CMD} screen -dmS "${IDLE_SESSION_NAME}" /bin/bash -c "${myname} idle_server_daemon"
		fi
	fi
}

# Stop the server gracefully by saving everything prior and warning the users
server_stop() {
	# Quit the idle daemon
	if [[ "${IDLE_SERVER}" == "true" ]]; then
		# Check for the availability of the netcat (nc) binaries
		if [[ -z "${NETCAT_CMD}" ]]; then
			>&2 echo "The netcat binaries are needed for suspending an idle server."
			exit 12
		fi

		${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -Q select . > /dev/null
		if [[ $? -eq 0 ]]; then
			echo -en "Stopping idle server daemon... "
			${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -X quit
			echo -e "\e[39;1m done\e[0m"
		else
			echo "The corresponding screen session for ${IDLE_SESSION_NAME} was already dead."
		fi
	fi

	# Gracefully exit the game server
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		game_command save-all
		game_command say "Server is going down in 10 seconds! HURRY UP WITH WHATEVER YOU ARE DOING!" # Warning the users
		echo -en "Server is going down in... "
		for i in $(seq 1 10); do
			game_command say "down in... $(expr 10 - $i)"
			echo -n " $(expr 10 - $i)"
			sleep 1
		done
		game_command stop
		echo -e "\e[39;1m done\e[0m"
	else
		echo "The corresponding screen session for ${SESSION_NAME} was already dead."
	fi
}

# Print whether the server is running and if so give some information about memory usage and threads
server_status() {
	# Print status information about the idle daemon
	if [[ "${IDLE_SERVER}" == "true" ]]; then
		# Check for the availability of the netcat (nc) binaries
		if [[ -z "${NETCAT_CMD}" ]]; then
			>&2 echo "The netcat binaries are needed for suspending an idle server."
			exit 12
		fi

		${SUDO_CMD} screen -S "${IDLE_SESSION_NAME}" -Q select . > /dev/null
		if [[ $? -eq 0 ]]; then
			echo -e "Idle server daemon status:\e[39;1m running\e[0m"
		else
			echo -e "Idle server daemon status:\e[39;1m stopped\e[0m"
		fi
	fi

	# Print status information for the game server
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		echo -e "Status:\e[39;1m running\e[0m"

		# Calculating memory usage
		for p in $(${SUDO_CMD} pgrep -f "${MAIN_EXECUTABLE}"); do
			ps -p${p} -O rss | tail -n1;
		done | gawk '{ count ++; sum += $2 }; END {count --; print "Number of processes =", count, "(screen, bash,", count-2, "x java)"; print "Total memory usage =", sum/1024, "MB" ;};'
	else
		echo -e "Status:\e[39;1m stopped\e[0m"
	fi
}

# Restart the complete server by shutting it down and starting it again
server_restart() {
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		server_stop
		sleep 0.1
		server_start
	else
		server_start
	fi
}

# Backup the directories specified in BACKUP_PATHS
backup_files() {
	# Check for the availability of the tar binaries
	which tar &> /dev/null
	if [[ $? -ne 0 ]]; then
		>&2 echo "The tar binaries are needed for a backup."
		exit 11
	fi

	echo "Starting backup..."
	FILE="$(date +%Y_%m_%d_%H.%M.%S).tar.gz"
	${SUDO_CMD} mkdir -p "${BACKUP_DEST}"
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		game_command save-off
		game_command save-all
		sync && wait
		${SUDO_CMD} tar -C "${SERVER_ROOT}" -czf "${BACKUP_DEST}/${FILE}" --totals ${BACKUP_PATHS} 2>&1 | grep -v "tar: Removing leading "
		game_command save-on
	else
		${SUDO_CMD} tar -C "${SERVER_ROOT}" -czf "${BACKUP_DEST}/${FILE}" --totals ${BACKUP_PATHS} 2>&1 | grep -v "tar: Removing leading "
	fi
	echo -e "\e[39;1mbackup completed\e[0m\n"

	echo -n "Only keeping the last ${KEEP_BACKUPS} backups and removing the other ones..."
	BACKUP_COUNT=$(for f in "${BACKUP_DEST}"/[0-9_.]*; do echo ${f}; done | wc -l)
	if [[ $(expr ${BACKUP_COUNT} - ${KEEP_BACKUPS}) -gt 0 ]]; then
		${SUDO_CMD} rm $(for f in "${BACKUP_DEST}"/[0-9_.]*; do echo ${f}; done | head -n$(expr ${BACKUP_COUNT} - ${KEEP_BACKUPS}))
		echo -e "\e[39;1m done\e[0m ($(expr ${BACKUP_COUNT} - ${KEEP_BACKUPS}) backup(s) pruned)"
	else
		echo -e "\e[39;1m done\e[0m (no backups pruned)"
	fi
}

# Restore backup
backup_restore() {
	# Check for the availability of the tar binaries
	which tar &> /dev/null
	if [[ $? -ne 0 ]]; then
		>&2 echo "The tar binaries are needed for a backup."
		exit 11
	fi

	# Only allow the user to restore a backup if the server is down
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		>&2 echo -e "The \e[39;1mserver should be down\e[0m in order to restore the world data."
		exit 3
	fi

	# Either let the user choose a backup or expect one as an argument
	if [[ $# -lt 1 ]]; then
		echo "Please enter the corresponding number for the backup to be restored: "
		i=1
		for f in "${BACKUP_DEST}"/[0-9_.]*; do
			echo -e "    \e[39;1m$i)\e[0m\t$f"
			i=$((i+1))
		done
		echo -en "Restore backup number: "

		# Read in user input
		read user_choice

		# Interpeting the input
		if [[ $user_choice =~ ^-?[0-9]+$ ]]; then
			n=1
			for f in "${BACKUP_DEST}"/[0-9_.]*; do
				[[ ${n} -eq $user_choice ]] && FILE="$f"
				n=$((n+1))
			done
			if [[ -z $FILE ]]; then
				>&2 echo -e "\e[39;1mFailed\e[0m to interpret your input. Please enter the digit of the presented options."
				exit 5
			fi
		else
			>&2 echo -e "\e[39;1mFailed\e[0m to interpret your input. Please enter a valid digit for one of the presented options."
			exit 6
		fi
	elif [[ $# -eq 1 ]]; then
		# Check for the existance of the specified file
		if [[ -f "$1" ]]; then
			FILE="$1"
		else
			if [[ -f "${BACKUP_DEST}"/"$1" ]]; then
				FILE="${BACKUP_DEST}"/"$1"
			else
				>&2 echo -e "Sorry, but '$1', is \e[39;1mnot a valid file\e[0m, neither in your current directory nor in the backup folder."
				exit 4
			fi
		fi
	elif [[ $# -gt 1 ]]; then
		>&2 echo -e "\e[39;1mToo many arguments.\e[0m Please pass only the filename for the world data as an argument."
		>&2 echo "Or alternatively no arguments at all to chose from a list of available backups."
		exit 7
	fi

	echo "Restoring backup..."
	${SUDO_CMD} tar -xf "${FILE}" -C "${SERVER_ROOT}" 2>&1
	if [[ $? -eq 0 ]]; then
		echo -e "\e[39;1mRestoration completed\e[0m"
	else
		echo -e "\e[39;1mFailed to restore backup.\e[0m"
	fi
}

# Run the given comman at the game server console
server_command() {
	if [[ $# -lt 1 ]]; then
		>&2 echo "No server command specified. Try 'help' for a list of commands."
		exit 1
	fi

	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		sleep 0.1s &
		sleep_pid=$!
		game_command "$@" &
		tail -f --pid=${sleep_pid} -n 0 "${LOGPATH}/latest.log"
	else
		echo "There is no ${SESSION_NAME} session to connect to."
	fi
}

# Enter the screen game session
server_console() {
	${SUDO_CMD} screen -S "${SESSION_NAME}" -Q select . > /dev/null
	if [[ $? -eq 0 ]]; then
		${SUDO_CMD} screen -S "${SESSION_NAME}" -rx
	else
		echo "There is no ${SESSION_NAME} session to connect to."
	fi
}

# Help function, no arguments required
help() {
	cat <<-EOF
	This script was design to easily control any ${game} server. Quite every parameter for a given
	${game} server derivative can be altered by editing the variables in the configuration file.

	Usage: ${myname} {start|stop|status|backup|restore|command <command>|console}
	    start                Start the ${game} server
	    stop                 Stop the ${game} server
	    restart              Restart the ${game} server
	    status               Print some status information
	    backup               Backup the world data
	    restore [filename]   Restore the world data from a backup
	    command <command>    Run the given comman at the ${game} server console
	    console              Enter the server console through a screen session

	Copyright (c) Gordian Edenhofer <gordian.edenhofer@gmail.com>
	EOF
}

case "$1" in
	start)
	server_start
	;;

	stop)
	server_stop
	;;

	status)
	server_status
	;;

	restart)
	server_restart
	;;

	console)
	server_console
	;;

	command)
	server_command "${@:2}"
	;;

	backup)
	backup_files
	;;

	restore)
	backup_restore "${@:2}"
	;;

	idle_server_daemon)
	# This shell be a hidden function which should only be invoced internally
	idle_server_daemon
	;;

	*|-h|--help)
	help
	exit 0
esac

exit 0
