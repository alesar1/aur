# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=libsafec
_pkgname=safeclib
pkgver=04062019
_gitver=ga99a05
pkgrel=1
_pkgver="${pkgver}.0-${_gitver}"
pkgdesc='Implementtion of C11 Annex K + ISO TR24731 Bounds Checking Interface'
arch=('i686' 'x86_64')
url='https://rurban.github.io/safeclib'
_url='https://github.com/rurban/safeclib'
depends=('pkgconfig')
makedepends=('clang')
license=('MIT')
# https://github.com/rurban/safeclib/releases/download/v03032018/libsafec-03032018.0-g570fa5.tar.bz2
source=("${_url}/releases/download/v${pkgver}/${pkgname}-${_pkgver}.tar.bz2")
sha256sums=('bb3680fb15cace9ffb1120352a4d8a149187006f4b7d8daa397530d9541c606c')

# prepare() {
#   cd "${srcdir}/${pkgname}-${_pkgver}"
#   ./build-tools/autogen.sh
# }

build() {
  cd "${srcdir}/${pkgname}-${_pkgver}"
  CC="clang -march=native -fstrict-aliasing" ./configure --prefix=/usr
  make
}

check() {
  cd "${srcdir}/${pkgname}-${_pkgver}"
  # make check
}

package() {
  cd "${srcdir}/${pkgname}-${_pkgver}/"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"

  # temp fix
  [ -f "${pkgdir}/usr/share/man/man3/towlower.3" ] && \
    mv "${pkgdir}/usr/share/man/man3/towlower.3" "${pkgdir}/usr/share/man/man3/towlower_s.3"
  [ -f "${pkgdir}/usr/share/man/man3/towupper.3" ] && \
    mv "${pkgdir}/usr/share/man/man3/towupper.3" "${pkgdir}/usr/share/man/man3/towupper_s.3"
  [ -f "${pkgdir}/usr/share/man/man3/wcsstr.3" ] && \
    mv "${pkgdir}/usr/share/man/man3/wcsstr.3" "${pkgdir}/usr/share/man/man3/wcsstr_s.3"
}

# vim:set ts=2 sw=2 et:
