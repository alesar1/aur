# Maintainer: Robin Trioux <robin@trioux.ovh>
# Maintainer: Dan Trickey
# Contributor: Dan Trickey
# Contributor: Robin Trioux
# This file is inspired by Dan Trickey PKGBUILD's

pkgname=webots-bin
pkgver=2021b
pkgrel=1
pkgdesc="Mobile robot simulation software."
arch=('x86_64')
url="https://cyberbotics.com/"
license=('Apache')
groups=('')
depends=("make" "gcc" "atk>=1.9.0" "ffmpeg" "dbus" "freeimage>=3.15.4" "glib2>2.10.0" "glu"
         "gtk3" "nss" "gcc-libs" "libxaw" "libxrandr" "libxrender"
         "zziplib>=0.13.62" "libssh" "libzip" "libx11" "xorg-server" "libxslt" "gd"
         "freetype2")
optdepends=('alsa-lib' 'cairo'  'dbus' 'desktop-file-utils' 'expat' 'fontconfig' 'gdk-pixbuf2' 'hicolor-icon-theme' 'jre-openjdk-headless' 'libcups' 'libglvnd' 'libjpeg-turbo' 'libpulse' 'libxaw' 'libxcb' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxext' 'libxfixes' 'libxi' 'libxkbcommon' 'libxkbcommon-x11' 'libxrandr' 'libxrender' 'libxtst' 'nspr' 'nss' 'openal' 'openssl' 'pango' 'qt5-base' 'qt5-declarative' 'qt5-location' 'qt5-multimedia' 'qt5-webchannel' 'qt5-webengine' 'qt5-websockets' 'xorg-server' 'zlib')
conflicts=('webots')
options=('!strip' '!emptydirs')
install=webots.install
source_x86_64=('https://github.com/cyberbotics/webots/releases/download/R2021b/webots_2021b_amd64.deb')
sha512sums_x86_64=('e7e04c872a171f542f960a77a53dd35ebe87a3b1bb5bfe1fc2e3f9b8dcb6c870161d2925c0bee9ca3e2cb38eafb9fd8107380fd23c7321ce63162515592d04a9')

package(){

	# Extract package data
	tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directory structure differences
	cd "${pkgdir}"

	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin

	cd ..

}
 
