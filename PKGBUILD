# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: localizator <localizator@ukr.net>
# Contributor: Edvinas Valatka <edacval@gmail.com>

pkgname=seafile-client
pkgver=6.2.2
pkgrel=1
pkgdesc="GUI client for synchronizing your local files with seafile server"
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/haiwen/${pkgname}"
license=('Apache')
depends=("seafile" "qt5-tools" "qt5-webkit" "qt5-base"
         "gtk-update-icon-cache" "qt5-webengine")
makedepends=("cmake")
conflicts=('seafile-client-qt5')
provides=('seafile-client-qt5')
source=("${pkgname}-v${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('f80c38e2d1abb5d605e6d0fc50af753832733d07f8f86fc9c17c0857150bf509')

prepare() {
  cd "${srcdir}"

  rm -rf build
  mkdir -p build
}

build () {
  cd "$srcdir/build"

  cmake \
    -DBUILD_SHIBBOLETH_SUPPORT=ON \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    "${srcdir}/${pkgname}-${pkgver}"

  make
}

package () {
  cd "${srcdir}/build"

  make DESTDIR="${pkgdir}" install
}
