# Maintainer: lmartinez-mirror
# Contributor:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: davedatum <ask at davedatum dot com>
pkgname=heimer
pkgver=2.4.0
pkgrel=1
pkgdesc="A simple cross-platform mind map, diagram, and note-taking tool written in Qt"
arch=("x86_64")
url='https://github.com/juzzlin/heimer'
license=('GPL3')
depends=('gcc-libs' 'hicolor-icon-theme' 'qt5-svg')
makedepends=('cmake' 'qt5-tools')
source=("${pkgname}-${pkgver}.tar.gz::$url/archive/${pkgver}.tar.gz")
sha256sums=('9c1ba9c6414d0c99fcdce1244fd24ef344d220cbf4d663358e3a6e61d442ce37')

prepare() {
  test -d "$pkgname-$pkgver" || mv "Heimer-$pkgver" "$pkgname-$pkgver"
}

build() {
  cmake \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -S "$pkgname-$pkgver" \
    -B build
  make -C build
}

package() {
  DESTDIR="$pkgdir/" make install -C build
  cd "$pkgname-$pkgver"
  install -Dm 444 COPYING -t "$pkgdir/usr/share/licenses/$pkgname/"
}
