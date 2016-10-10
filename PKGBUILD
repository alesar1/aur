# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: localizator <localizator@ukr.net>
# Contributor: Edvinas Valatka <edacval@gmail.com>

pkgname=seafile-client
pkgver=5.1.4
pkgrel=2
pkgdesc="GUI client for synchronizing your local files with seafile server"
arch=('i686' 'x86_64')
url="https://github.com/haiwen/seafile-client/"
license=('Apache')
depends=("seafile-shared" "qt5-webkit" "qt5-base" "gtk-update-icon-cache" "qt5-webengine")
makedepends=("cmake" "qt5-tools" "seafile-shared>=${pkgver}")
conflicts=('seafile-client-qt5')
provides=('seafile-client-qt5')
source=("${pkgname}-v${pkgver}.tar.gz::https://github.com/haiwen/${pkgname}/archive/v${pkgver}.tar.gz")

build () {
    cd "$srcdir/${pkgname}-${pkgver}"
    cmake -DBUILD_SHIBBOLETH_SUPPORT=ON -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr .
    make
}

package () {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
}
sha256sums=('7448d3ada096c36533623a460a0ecd12e02bf081c37b7bc8f3d6fcdfbe14b38f')
