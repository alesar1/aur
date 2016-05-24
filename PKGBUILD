# Maintainer: Mathias Bragagia <youremail@domain.com>
pkgname=kana-p-dev
pkgver=0.6
pkgrel=1
pkgdesc="Lite desktop manager - use lightdm, awesome and compton - dev channel"
arch=('any')
url="https://github.com/bragagia/kana-p"
license=('GPL')
groups=()
depends=(
	'xf86-input-evdev'
	'xf86-input-joystick'
	'xf86-input-keyboard'
	'xf86-input-libinput'
	'xf86-input-mouse'
	'xf86-input-synaptics'
	'xf86-input-vmmouse'
	'xf86-input-void'
	'xf86-video-amdgpu'
	'xf86-video-ark'
	'xf86-video-ati'
	'xf86-video-dummy'
	'xf86-video-fbdev'
	'xf86-video-glint'
	'xf86-video-i128'
	'xf86-video-intel'
	'xf86-video-mach64'
	'xf86-video-neomagic'
	'xf86-video-nouveau'
	'xf86-video-nv'
	'xf86-video-openchrome'
	'xf86-video-r128'
	'xf86-video-savage'
	'xf86-video-siliconmotion'
	'xf86-video-sis'
	'xf86-video-tdfx'
	'xf86-video-trident'
	'xf86-video-vesa'
	'xf86-video-vmware'
	'xf86-video-voodoo'
	'xorg-bdftopcf'
	'xorg-docs'
	'xorg-font-util'
	'xorg-fonts-75dpi'
	'xorg-fonts-100dpi'
	'xorg-fonts-encodings'
	'xorg-iceauth'
	'xorg-luit'
	'xorg-mkfontdir'
	'xorg-mkfontscale'
	'xorg-server'
	'xorg-server-common'
	'xorg-server-devel'
	'xorg-server-xdmx'
	'xorg-server-xephyr'
	'xorg-server-xnest'
	'xorg-server-xvfb'
	'xorg-server-xwayland'
	'xorg-sessreg'
	'xorg-setxkbmap'
	'xorg-smproxy'
	'xorg-x11perf'
	'xorg-xauth'
	'xorg-xbacklight'
	'xorg-xcmsdb'
	'xorg-xcursorgen'
	'xorg-xdpyinfo'
	'xorg-xdriinfo'
	'xorg-xev'
	'xorg-xgamma'
	'xorg-xhost'
	'xorg-xinput'
	'xorg-xkbcomp'
	'xorg-xkbevd'
	'xorg-xkbutils'
	'xorg-xkill'
	'xorg-xlsatoms'
	'xorg-xlsclients'
	'xorg-xmodmap'
	'xorg-xpr'
	'xorg-xprop'
	'xorg-xrandr'
	'xorg-xrdb'
	'xorg-xrefresh'
	'xorg-xset'
	'xorg-xsetroot'
	'xorg-xvinfo'
	'xorg-xwd'
	'xorg-xwininfo'
	'xorg-xwud'

	'networkmanager'
	'openssh'
	'alsa-firmware'
	'alsa-utils'
	'alsa-plugins'
	'pulseaudio'
	'pulseaudio-alsa'
	'pulseaudio-ctl'
	'bluez'
	'bluez-utils'
	'udevil'
	'ntfs-3g'
	'gptfdisk'
	'dosfstools'
	'xsettingsd-git'

	'ntp'
	'networkmanager-dispatcher-ntpd'

	'net-tools'
	'sudo'
	'adduser'
	'util-linux'
	'accountsservice'

	'xorg-fonts-type1'
	'artwiz-fonts'
	'font-bh-ttf'
	'font-bitstream-speedo'
	'gsfonts'
	'sdl_ttf'
	'ttf-cheapskate'
	'ttf-freefont'
	'ttf-arphic-uming'
	'ttf-baekmuk'
	'ttf-dejavu'
	'ttf-bitstream-vera'
	'ttf-opensans'
	'ttf-droid'
	'ttf-inconsolata'
	'ttf-liberation'
	'otf-sauce-code-powerline-git'
	'ohsnap'

	'light'
	'srandrd'

	'lightdm'
	'lightdm-webkit-greeter'
	'lightdm-webkit-theme-bevel-git'
	'i3lock-wrapper'

	'compton'
	'awesome'
	'openbox'
	'lain-git'
	'eminent-git'
	'rofi'
	'network-manager-applet'
	'gnome-keyring'

	'archlinux-xdg-menu'
	'xdg-utils'
	'xdg-user-dirs'
	'dex'
	'feh'
	'most'

	'lib32-gtk-engines'
	'gtk2'
	'gtk3'
	'qt4'
	'qt5-base'
	'numix-bevel-icon-theme-git'
	'gtk-theme-arc-git'

	'rxvt-unicode'
	'rxvt-unicode-terminfo'
)
makedepends=()
optdepends=()
provides=('kana-p')
conflicts=('kana-p')
replaces=()
backup=()
options=()
install=.install
changelog=
source=(https://github.com/bragagia/kana-p/archive/$pkgver.tar.gz)
noextract=()
md5sums=('SKIP')

package() {
	mv -T $srcdir/$pkgname-$pkgver $pkgdir
	rm -f $pkgdir/.gitignore
	rm -f $pkgdir/LICENSE
	rm -f $pkgdir/README.md
}
