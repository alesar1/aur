#!/bin/bash

import_settings()
{
	if [ -d "$1" ] && [ ! -d "$HOME/.config/SuperSlicer-alpha" ]
	then
		echo "import data from $1 to the new data folder ~/.config/SuperSlicer-alpha"
		cp -r "$HOME/.SuperSlicer" "$HOME/.config/SuperSlicer-alpha"
	fi
}

import_settings "$HOME/.config/SuperSlicer"
import_settings "$HOME/.SuperSlicer"

LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/opt/wxgtk-dev/lib" /usr/share/SuperSlicer/superslicer "$@"
