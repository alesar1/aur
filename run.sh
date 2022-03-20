#!/bin/sh

#   Copyright (C) 2016 Deepin, Inc.
#
#   Author:     Li LongYu <lilongyu@linuxdeepin.com>
#               Peng Hao <penghao@linuxdeepin.com>

#               Vufa <countstarlight@gmail.com>

version_gt() { test "$(echo "$@" | tr " " "\n" | sort -V | head -n 1)" != "$1"; }

BOTTLENAME="Deepin-WeChat"
APPVER="3.4.0.38deepin6"
WINEPREFIX="$HOME/.deepinwine/$BOTTLENAME"
WECHAT_FONTS="$WINEPREFIX/drive_c/windows/Fonts"
WECHAT_VER="3.6.0.18"
EXEC_PATH="c:/Program Files/Tencent/WeChat/WeChat.exe"
EXEC_FILE="$WINEPREFIX/drive_c/Program Files/Tencent/WeChat/WeChat.exe"
START_SHELL_PATH="/opt/deepinwine/tools/run_v4.sh"
WECHAT_INSTALLER="WeChatSetup"
WECHAT_INSTALLER_PATH="c:/Program Files/Tencent/$WECHAT_INSTALLER-$WECHAT_VER.exe"
export MIME_TYPE=""
export DEB_PACKAGE_NAME="com.qq.weixin.deepin"
export APPRUN_CMD="deepin-wine6-stable"
DISABLE_ATTACH_FILE_DIALOG=""
EXPORT_ENVS=""

export SPECIFY_SHELL_DIR=`dirname $START_SHELL_PATH`

ARCHIVE_FILE_DIR="/opt/apps/$DEB_PACKAGE_NAME/files"

export WINEDLLPATH=/opt/$APPRUN_CMD/lib:/opt/$APPRUN_CMD/lib64

export LD_LIBRARY_PATH=/opt/apps/$DEB_PACKAGE_NAME/files/lib32

export WINEPREDLL="$ARCHIVE_FILE_DIR/dlls"

OpenWinecfg()
{
    env WINEPREFIX=$WINEPREFIX $APPRUN_CMD winecfg
}

DeployApp()
{
    # backup fonts
    if [ -d "$WECHAT_FONTS" ];then
        mkdir -p $HOME/.deepinwine/.wechat_tmp
        cp $WECHAT_FONTS/* $HOME/.deepinwine/.wechat_tmp/
    fi

    # re-deploy bottle
    rm -rf "$WINEPREFIX"
    # run installer
    env WINEDLLOVERRIDES="winemenubuilder.exe=d" $START_SHELL_PATH $BOTTLENAME $APPVER "$WECHAT_INSTALLER_PATH" "$@"

    # restore fonts
    if [ -d "$HOME/.deepinwine/.wechat_tmp" ];then
        cp -n $HOME/.deepinwine/.wechat_tmp/* $WECHAT_FONTS/
        rm -rf "$HOME/.deepinwine/.wechat_tmp"
    fi
    touch $WINEPREFIX/reinstalled
}

Run()
{
    if [ -z "$DISABLE_ATTACH_FILE_DIALOG" ];then
        export ATTACH_FILE_DIALOG=1
    fi

    if [ -n "$EXPORT_ENVS" ];then
        export $EXPORT_ENVS
    fi

    if [ -n "$EXEC_PATH" ];then
        if [ ! -f "$WINEPREFIX/reinstalled" ];then
            DeployApp
        else
            # missing exec file
            if [ ! -f "$EXEC_FILE" ];then
                DeployApp
            fi

            if [ -z "${EXEC_PATH##*.lnk*}" ];then
                $START_SHELL_PATH $BOTTLENAME $APPVER "C:/windows/command/start.exe" "/Unix" "$EXEC_PATH" "$@"
            else
                $START_SHELL_PATH $BOTTLENAME $APPVER "$EXEC_PATH" "$@"
            fi
        fi
    else
        $START_SHELL_PATH $BOTTLENAME $APPVER "uninstaller.exe" "$@"
    fi
}

HelpApp()
{
	echo " Extra Commands:"
	echo " winecfg        Open winecfg"
	echo " -h/--help      Show program help info"
}

if [ -z $1 ]; then
	Run "$@"
	exit 0
fi
case $1 in
	"winecfg")
		OpenWinecfg
		;;
	"-h" | "--help")
		HelpApp
		;;
	*)
		Run "$@"
		;;
esac
exit 0
