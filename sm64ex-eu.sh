#!/bin/sh

# Launcher for Super Mario 64 EX (EU)

pkgname=sm64ex-eu
sm64path=~/.local/share/${pkgname}

# Create sm64path if it doesn't exist
mkdir -p "${sm64path}"

# Redirect savepath to sm64path and launch
/usr/share/${pkgname}/${pkgname} --savepath "${sm64path}"
