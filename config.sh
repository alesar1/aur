#!/bin/sh

# Keyboard NumLock ON
# XDM_XFREQ_KEYB_LED_PATH=numlockx
# XDM_XFREQ_KEYB_LED_ARGS=""

# Background color
XDM_XFREQ_BG_COLOR_PATH=xsetroot
XDM_XFREQ_BG_COLOR_ARGS="-solid darkred"

# Background picture
# XDM_XFREQ_BG_WALLPAPER_PATH=display
# XDM_XFREQ_BG_WALLPAPER_ARGS="-backdrop -window root /etc/xdm-xfreq/wallpaper.jpg"

# Clock settings
XDM_XFREQ_CLOCK_PATH=xclock
XDM_XFREQ_CLOCK_ARGS="-geometry 256x32-0-0 -twentyfour"
XDM_XFREQ_CLOCK_PID="/var/run/xdm-xfreq-clock.pid"

# Buttons settings
XDM_XFREQ_BUTTONS_PATH=xmessage
XDM_XFREQ_BUTTONS_ARGS="-geometry 2304x32+0-0"
XDM_XFREQ_BUTTONS_PID="/var/run/xdm-xfreq-buttons.pid"
XDM_XFREQ_BUTTONS_MENU="-buttons \:\):99,PowerOff:11,Halt:12,Reboot:13,Sleep:14,Rescue:15"
XDM_XFREQ_BUTTONS_PWROFF="-buttons PowerOff?:11,Cancel?:12 -default Cancel? -timeout 6"
XDM_XFREQ_BUTTONS_HALT="-buttons Halt?:11,Cancel?:12 -default Cancel? -timeout 6"
XDM_XFREQ_BUTTONS_REBOOT="-buttons Reboot?:11,Cancel?:12 -default Cancel? -timeout 6"
XDM_XFREQ_BUTTONS_RESCUE="-buttons Rescue?:11,Cancel?:12 -default Cancel? -timeout 6"

# Screenshot
XDM_XFREQ_SCREENSHOT_PATH=scrot
XDM_XFREQ_SCREENSHOT_ARGS="-d 6 /tmp/%Y%m%d-%H%M%S-\$wx\$h.png"

# XFreq
XDM_XFREQ_GUI_PATH=xfreq-gui
XDM_XFREQ_GUI_ARGS="-D 0 -f 0x994c00 -l 1 -w 1 -n 1 -N 1 -I 0x1000 -U 0x21 -g 0:0x0+540-48,1:0x0-24+16,2:0x0+24+16,3:0x0+540+16,4:0x0+24-48,5:0x0-24-48"
XDM_XFREQ_GUI_PID=/var/run/xdm-xfreq-gui.pid

# PowerOff
XDM_XFREQ_POWEROFF_CMD="systemctl poweroff"

# Halt
XDM_XFREQ_HALT_CMD="systemctl halt"

# Reboot
XDM_XFREQ_REBOOT_CMD="systemctl reboot"

# Suspend to sleep
XDM_XFREQ_SLEEP_CMD="systemctl suspend"

# Rescue level
XDM_XFREQ_RESCUE_CMD="systemctl rescue"

# Users settings
XSESSION_ERR_PATH="$HOME/.xsession-errors"
