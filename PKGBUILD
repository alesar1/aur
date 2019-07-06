# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=reproc
pkgver=7.0.0
pkgrel=1
pkgdesc='Cross-platform library that simplifies working with external CLI applications from C and C++'
arch=('x86_64')
_url='https://github.com/DaanDeMeyer'
url="${_url}/reproc"
license=('MIT')
makedepends=('cmake' 'gcc')
source=("${url}/archive/v${pkgver}".tar.gz)
sha256sums=('6470120333ff21d2f95e37f24f89d6cf95462f8691dfee91a80f8d1163dbf8a2')

prepare() {
  cd "${pkgname}-${pkgver}"
  mkdir build
}

build() {
  cd "${pkgname}-${pkgver}/build"
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_SHARED_LIBS=ON \
    -DREPROC++=ON \
    -DREPROC_TEST=ON \
    -DREPROC_EXAMPLES=ON \
    ../
  make
}

check() {
  cmake --build "${pkgname}-${pkgver}/build" --target reproc-test
}

package() {
  cd "${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
  install -D --mode=644 "${srcdir}/${pkgname}-${pkgver}"/LICENSE \
    "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}

# vim:set ts=2 sw=2 et:
