# Maintainer: Simon Repp <simon@fdpl.io>

arch=('i686' 'x86_64')
depends=('gpgme' 'icu' 'libeno' 'ncurses')
license=('GPL3')
makedepends=('meson')
md5sums=('6ddb786592bac7bff6ddc7e32795c0e7')
pkgdesc="Minimal plaintext password store"
pkgname=sicuit
pkgrel=1
pkgver=2.0
url="https://fdpl.io/sicuit/"

source=("${pkgname}-${pkgver}.tar.gz::https://codeberg.org/simonrepp/sicuit/archive/${pkgver}.tar.gz")

build() {
  cd "${srcdir}"/sicuit
  rm -rf build
  meson --buildtype release --prefix /usr build
  cd build
  meson compile
}

package() {
  cd "${srcdir}"/sicuit/build
  DESTDIR="${pkgdir}" meson install
}
