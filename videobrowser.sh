#!/usr/bin/env sh
# Launches MS Edge with flags specified in $XDG_CONFIG_HOME/microsoft-edge-dev-flags.conf

# Make script fail if `cat` fails for some reason
set -e

# Set default value if variable is unset/null
XDG_CONFIG_HOME="${XDG_CONFIG_HOME:-${HOME}/.config}"

# Attempt to read a config file if it exists
if [ -r "${XDG_CONFIG_HOME}/microsoft-edge-dev-flags.conf" ]; then
  EDGE_USER_FLAGS="$(cat "$XDG_CONFIG_HOME/microsoft-edge-dev-flags.conf")"
fi

exec /opt/videobrowser/microsoft/msedge-dev/microsoft-edge-dev $EDGE_USER_FLAGS "$@"
