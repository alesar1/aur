# Maintainer: Brian Allred <brian.d.allred@gmail.com>
# This script is licensed under the MIT license.

pkgname=gpmdp
pkgver=3.2.4
pkgrel=1
pkgdesc="A beautiful cross platform Desktop Player for Google Play Music. Stable release."
arch=('i686' 'x86_64')
url="http://www.googleplaymusicdesktopplayer.com"
source=("https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-")
depends=('libnotify' 'alsa-lib' 'gconf' 'gtk2' 'nss')
optdepends=('gnome-keyring' 'lsb-release' 'libxtst')
license=('MIT')

case $CARCH in
	'x86_64')
		_arch='amd64'
		md5sums=('b38ee2ce8bd4a213c3d9de38860ef672')
		;;
	'i686')
		_arch='i386'
		md5sums=('6faf476948590f840b28a5201dc59d9a')
		;;
esac

source=("https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-/releases/download/v${pkgver}/google-play-music-desktop-player_${pkgver}_${_arch}.deb")

package() {
	tar -xf data.tar.xz -C "${pkgdir}"
	rm -rf "${pkgdir}"/usr/share/lintian
	chmod -R 755 "${pkgdir}"/usr
}
