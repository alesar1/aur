# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=doctest
pkgver=2.3.8
pkgrel=1
pkgdesc='The lightest feature rich C++ single header testing framework'
arch=('i686' 'x86_64')
url='https://github.com/onqtam/doctest'
license=('MIT')
makedepends=('cmake')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('d7232437eceb46ad5de03cacdee770c80f2e53e7b8efc1c8a8ed29539f64efa5')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir build
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DDOCTEST_WITH_TESTS=off \
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
