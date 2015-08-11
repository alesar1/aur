# Maintainer: Brottweiler <brott@oc.tc>
# Contributor: kusakata <shohei atmark kusakata period com>

pkgname=openspades-git
pkgver=0.0.12.16.g6ffc0b2
pkgrel=1
pkgdesc="A clone of Voxlap Ace of Spades 0.75 (git version)"
arch=('i686' 'x86_64')
url="https://sites.google.com/a/yvt.jp/openspades/"
license=('GPL3')
depends=('curl' 'desktop-file-utils' 'glew' 'hicolor-icon-theme' 'mesa' 'openal' 'sdl2' 'sdl2_image')
makedepends=('cmake' 'git' 'imagemagick' 'unzip' 'wget')
provides=('openspades')
conflicts=('openspades')
install=openspades.install
source=("$pkgname"::'git://github.com/yvt/openspades.git')
md5sums=('SKIP')

pkgver() {
	cd "$pkgname"
	git describe --tags | sed 's/^v//' | sed 's/-/./g'
}

build() {
	cd "$pkgname"
	cmake -D CMAKE_INSTALL_PREFIX=/usr -D CMAKE_BUILD_TYPE=Release -D OPENSPADES_RESDIR=/usr/share/openspades-git/Resources -D OPENSPADES_INSTALL_RESOURCES=share/openspades-git/Resources -D OPENSPADES_INSTALL_BINARY=bin .
	make
}

package() {
	cd "$pkgname"
	make DESTDIR="${pkgdir}" install
	rm -rf "${pkgdir}/usr/share/menu"
}
