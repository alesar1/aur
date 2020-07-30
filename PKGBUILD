# Maintainer: Dan Trickey
# Contributor: Dan Trickey
pkgname=webots-bin
pkgname=webots
pkgver=2020b
pkgrel=0
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

options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://github.com/cyberbotics/webots/releases/download/R2020b/webots_2020b_amd64.deb")
sha512sums_x86_64=('a4a34e5ed0745987e71ac4a7b642d96adfa3ffff9b85fab67e418bae1fb9431887a98d77d744aa17285a70c5eb6f25de92c31e74d0c94b8205ce0374dc0c66da')

package(){

	# Extract package data
	tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directory structure differences
	cd "${pkgdir}"

	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin
	#ls usr/share/applications/*.desktop | while read line; do
	#sed -i s'^\/Exec=\/usr\/local\/bin/\/Exec=\/usr\/bin//g'
	#done

	cd ..

}
