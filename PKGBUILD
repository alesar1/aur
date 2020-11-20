# Maintainer: Fredy García <frealgagu at gmail dot com>

pkgbase=libssh-gnutls
pkgname=(${pkgbase} ${pkgbase}-docs)
pkgver=0.9.5
pkgrel=1
pkgdesc="Library for accessing ssh client services through C libraries - compiled with gnutls (libgcrypt), documentation for ${pkgbase%-gnutls}"
arch=("x86_64")
url="http://www.${pkgbase%-gnutls}.org/"
license=("LGPL")
makedepends=("cmake" "cmocka" "doxygen" "openssh" "python")
source=("https://www.${pkgbase%-gnutls}.org/files/${pkgver%.*}/${pkgbase%-gnutls}-${pkgver}.tar.xz"{,.asc})
sha256sums=("acffef2da98e761fc1fd9c4fddde0f3af60ab44c4f5af05cd1b2d60a3fa08718" "SKIP")
validpgpkeys=("8DFF53E18F2ABC8D8F3C92237EE0FC4DCC014E3D") # Andreas Schneider <asn@cryptomilk.org>

prepare() {
  cd "${srcdir}"

  mkdir -p "${srcdir}/build"
}

build() {
  cd "${srcdir}/build"
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWITH_GSSAPI=OFF \
    -DWITH_GCRYPT=ON \
    -DUNIT_TESTING=ON \
    "${srcdir}/${pkgbase%-gnutls}-${pkgver}"
  make
  make docs
}

check() {
  cd "${srcdir}/build"
  make test
}

package_libssh-gnutls() {
  pkgdesc="Library for accessing ssh client services through C libraries - compiled with gnutls (libgcrypt)"
  arch=("${CARCH}")
  provides=("${pkgname/-gnutls/}" "${pkgname/-gnutls/}.so")
  conflicts=("${pkgname/-gnutls/}")
  depends=("libgcrypt" "zlib")

  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}" install
}

package_libssh-gnutls-docs() {
  pkgdesc="Documentation for ${pkgbase}"
  arch=("any")
  provides=("${pkgname/-gnutls/}")
  conflicts=("${pkgname/-gnutls/}")

  mkdir -p "${pkgdir}/usr/share/doc/${pkgbase%-gnutls}"
  cp -r "${srcdir}/build/doc/html" "${pkgdir}/usr/share/doc/${pkgbase%-gnutls}"
}
