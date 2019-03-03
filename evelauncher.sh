#!/bin/sh

set -e

check_env() {
    if [ -d "$CONFDIR" ] ;then
	if [ -r "$CONFDIR/EVE.conf" ] ;then
	    SHAREDIR=$(grep SharedCacheFolder $CONFDIR/EVE.conf | cut -d= -f2)
	fi
    fi
    SHAREDIR=${SHAREDIR:-$HOME/.eve/}
    [ ! -d "$SHAREDIR" ] && SHAREDIR=""
    if [ "x$SHAREDIR" != "x$EVEDIR/SharedCache/" ] ;then
	desktop_msg "Please wait, preparing environment in $EVEDIR"
	mkdir -p $CONFDIR
	echo "[General]" >$CONFDIR/EVE.conf
	echo "SharedCacheFolder=$EVEDIR/SharedCache/" >>$CONFDIR/EVE.conf
	echo "UseCustomWine=true" >>$CONFDIR/EVE.conf
	echo "CustomWinePath=$WINEPATH/wine" >>$CONFDIR/EVE.conf
	mkdir -p $EVEDIR/SharedCache
	tar xf $SETUPDIR/lib/launcher-$ELVER.tar.xz -C $EVEDIR
	if [ -d "$SHAREDIR/ResFiles/" ] ;then
	    mv $SHAREDIR/ResFiles/ $EVEDIR/SharedCache/
	    mv $SHAREDIR/*.txt $EVEDIR/SharedCache/
	    rm -rf $SHAREDIR
	fi
    fi
}

check_steam() {
    if [ ! -r "$LAUNCHER/steam_appid.txt" -a -x "$(which steam 2>/dev/null)" ] ;then
	echo "8500" >$LAUNCHER/steam_appid.txt
    fi
}

check_wine() {

    check_custom_wine

    INSTWINE=$(cat $WINEPREFIX/.update-timestamp 2>/dev/null) || true
    WINEINFP=$(readlink -f $CUSTOMWP)
    WINECONF=$(find ${WINEINFP%/bin*}/share -name 'wine.inf' 2>/dev/null) || true
    WINEDATE=$(ls -l --time-style=+%s "$WINECONF" 2>/dev/null | cut -d' ' -f6)
    if [ "x$WINEDATE" != "x$INSTWINE" ] ;then
        desktop_msg "Preparing wine in $WINEPREFIX"
        env WINEPREFIX=$WINEPREFIX \
	    WINEDEBUG=-all \
	    WINEDLLOVERRIDES="mscoree,mshtml,winemenubuilder.exe=d" \
	    $WINEPATH/wine wineboot
	env WINEPREFIX=$WINEPREFIX $WINEPATH/wine reg delete \
	    'HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServices' \
	    /v winemenubuilder /f >/dev/null || true
	    env WINEPREFIX=$WINEPREFIX $WINEPATH/wine reg add \
	    'HKEY_CURRENT_USER\Software\Wine\DllOverrides' \
	    /v winemenubuilder.exe /f >/dev/null
	WINETRP=$(grep -v win[x1..9] $WINEPREFIX/winetricks.log 2>/dev/null | uniq)
	if [ "x$WINETRP" != "x" ] ;then
	    rm $WINEPREFIX/winetricks.log
	    env WINEPREFIX=$WINEPREFIX WINE=$WINEPATH/wine \
		$(which winetricks) -q --force $WINETRP >/dev/null
	fi
	if [ "x$($WINEPATH/wine --version | grep -q 4. ;echo $?)" != "x0" ] ;then
	    WINVER=winxp
	else
	    WINVER=win10
	fi
	env WINEPREFIX=$WINEPREFIX WINE=$WINEPATH/wine \
	    $(which winetricks) -q --force $WINVER >/dev/null
    fi
}

ELVER="1456645"
QTVER="5.11"
SHAREDIR=""
CONFDIR="$HOME/.config/CCP"
EVEDIR="$HOME/.local/lib/EVE"
LAUNCHER="$EVEDIR/Launcher"
SETUPDIR="/opt/evesetup"
WINEPATH="/usr/bin"

source $SETUPDIR/lib/evelauncher.shlib

check_env
check_wine
check_steam

cd $EVEDIR
exec $LAUNCHER/evelauncher.sh
