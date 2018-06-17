# Maintainer: Tyler Dence <tyzoid@archlinux32.org>

pkgname=nextcloud-desktop-git
pkgver='2.3.3'
pkgrel='1'
pkgdesc='Nextcloud desktop client'
arch=('i686' 'x86_64')
url='https://nextcloud.com/'
license=('GPL2')
makedepends=('cmake' 'qt5-tools')
depends=('qtkeychain' 'qt5-webkit' 'hicolor-icon-theme' 'xdg-utils' 'qt5-webengine')
optdepends=(
  'python2-nautilus: integration with Nautilus'
  'nemo-python: integration with Nemo'
)
conflicts=('mirall-git' 'owncloud-client' 'owncloud-client-ngs' 'owncloud-client-git' 'nextcloud-client' 'nextcloud-client-git' 'nextcloud-desktop')
provides=('nextcloud-client')
source=("${pkgname}::git+https://github.com/nextcloud/desktop.git")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname";
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g';
}

build() {
	cd "${srcdir}/${pkgname}";

	cmake \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=lib \
		-DCMAKE_BUILD_TYPE="Release" \
		-DCMAKE_INSTALL_SYSCONFDIR=/etc/${pkgname} \
		-DWITH_DOC=FALSE \
		.;

	make;
}

package() {
	cd "${srcdir}/${pkgname}";
	make DESTDIR="${pkgdir}" install
}
