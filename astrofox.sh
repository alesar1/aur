#! /usr/bin/bash
env ELECTRON_FORCE_IS_PACKAGED=true electron /usr/share/astrofox/astrofox.asar "$@"
