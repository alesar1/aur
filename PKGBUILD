# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=doctest
pkgver=2.3.1
pkgrel=1
pkgdesc='The lightest feature rich C++ single header testing framework'
arch=('i686' 'x86_64')
url='https://github.com/onqtam/doctest'
license=('MIT')
makedepends=('cmake')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('b3d3c6133874e3a8c8e319cab33167156b6b1d2ed1ddde08c2655193cdeb58a0')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir build
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DDOCTEST_WITH_TESTS=off \
        -DCMAKE_BUILD_TYPE=Release \
        ../
  make
}

# check() {
  # cd "${srcdir}/${pkgname}-${pkgver}/build"
  # make
  # ctest -C Release --output-on-failure
# }

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
  install -Dm 0644 ../LICENSE.txt \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
