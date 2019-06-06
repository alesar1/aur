#!/usr/bin/bash

_help() {
cat <<EOF
    Usage: $script [options]
    Options:
            -h  --help          Show this message
                --windowed      Windowed mode
                --settings      Change settings
                --addon         Start the addon Deeper Dungeon
                --client        Start in client mode
                --server        Start in server mode
    Examples:

    $script --windowed
    $script --client
    $script --server --addon
    DOSBOX_CMD=dosbox-x $script
EOF
    exit 0
}

pushd() { builtin pushd "$@" > /dev/null; }
popd() { builtin popd > /dev/null; }

INSTALL_DIR=/opt/dungeon-keeper-gold
HOME_DIR="$HOME"/.gog/dungeon-keeper-gold
DOSBOX_CMD=${DOSBOX_CMD:-dosbox}

if which unionfs &> /dev/null; then
    USE_UNIONFS=1
fi

script=${0##*/}

if [ "$script" == "deeper-dungeons" ]; then
    START_ADDON=1
fi

TEMP=$(getopt -o h --long help,windowed,addon,settings,client,server \
     -n "$script" -- "$@")

if [ $? != 0 ] ; then exit 1 ; fi

eval set -- "$TEMP"

while true; do
    case "$1" in
        -h|--help) _help; shift ;;
        --windowed) WINDOWED=1; shift ;;
        --settings) START_SETTINGS=1; shift ;;
        --addon) START_ADDON=1; shift ;;
        --client) START_CLIENT=1; shift ;;
        --server) START_SERVER=1; shift ;;
        --) shift; break ;;
    esac
done

configs=('-conf' 'dosboxdk.conf')

if [ "${START_SERVER:=0}" -eq 1 ] && [ ! "$START_SETTINGS" ]; then
    configs+=('-conf' 'dosboxdk_server.conf')
    ENABLE_IPX=1
fi

if [ "${START_CLIENT:=0}" -eq 1 ] && [ "${START_SERVER:=0}" -ne 1 ] \
        && [ ! "$START_SETTINGS" ]; then
    configs+=('-conf' 'dosboxdk_client.conf')
    ENABLE_IPX=1
fi

if [ "$WINDOWED" ]; then
    configs+=('-conf' 'dosbox_windowed.conf')
fi

if [ "$START_SETTINGS" ]; then
    configs+=('-conf' 'dosboxdk_settings.conf')
elif [ "$START_ADDON" ] ; then
    configs+=('-conf' 'dosboxdk_addon.conf')
else
    configs+=('-conf' 'dosboxdk_single.conf')
fi

if [ "$ENABLE_IPX" ]; then
    configs+=('-conf' 'dosbox_ipx.conf')
fi

if [ "$USE_UNIONFS" ]; then
    LOWER_DIR="$INSTALL_DIR"
    UPPER_DIR="$HOME_DIR/config"
    UNION_DIR="$HOME_DIR/game"
    mkdir -p "$HOME_DIR"/{game,config}

    unionfs -o cow,relaxed_permissions "$UPPER_DIR=RW:$LOWER_DIR=RO" "$UNION_DIR"
    echo "Launching game within $UNION_DIR"
    pushd "$UNION_DIR" && "$DOSBOX_CMD" "${configs[@]}"
    popd && fusermount -u "$UNION_DIR"
else
    echo "Launching game within $INSTALL_DIR"
    cd $INSTALL_DIR && "$DOSBOX_CMD" "${configs[@]}"
fi
