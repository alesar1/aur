# Contributor: Francois Boulogne <fboulogne at april dot org>
# Maintainer: Gaetan Bisson <bisson@archlinux.org>

pkgname=subsurface-git
_pkgname=subsurface
pkgver=20180621.693604753
pkgrel=1
pkgdesc='Divelog program'
url='https://subsurface-divelog.org/'
license=('GPL2')
arch=('i686' 'x86_64')
makedepends=('git' 'cmake' 'asciidoc' 'qt5-tools')
depends=('libzip' 'libxml2' 'libxslt' 'sqlite' 'libusb' 'libgit2'
         'subsurface-libdc-git' 'qt5-svg' 'qt5-location'
         'qt5-connectivity' 'qt5-webkit' 'grantlee' 'googlemaps')
source=('git+https://github.com/Subsurface-divelog/subsurface')
sha256sums=('SKIP')

# qt5-webkit still used for: printing, manual, facebook

provides=('subsurface')
conflicts=('subsurface')

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git log -1 --format='%cd.%h' --date=short | tr -d -
}

build() {
	cd "${srcdir}/${_pkgname}"
	git revert -n a76f15f0f67c3f138362ec8c503f645dc1211cf5
	git revert -n d21d42b69117aae04b68ecc9cc2139e034bde146

	install -d build
	cd build
	cmake \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DLIBDIVECOMPUTER_INCLUDE_DIR=/usr/include/libdivecomputer \
		..
	make
}

package() {
	cd "${srcdir}/${_pkgname}"
	cd build
	make DESTDIR="${pkgdir}" install
}
