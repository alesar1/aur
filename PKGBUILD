# Maintainer: Javier Tiá <javier dot tia at gmail dot com>

pkgname=libdill
_ver=2.3
_pkgver=${_ver}
pkgver=${_ver}
pkgrel=1
pkgdesc='Structured concurrency in C'
arch=('i686' 'x86_64')
url='http://libdill.org/'
depends=('pkgconfig')
options=('!buildflags')
makedepends=('gcc')
license=('MIT')
source=("https://github.com/sustrik/${pkgname}/archive/${_pkgver}.tar.gz")
sha256sums=('f83cba87b1b0d1a8ad0f6345c448c14dee685ee733f3c3ee93f2321acc1bd083')

prepare() {
  cd "${srcdir}/${pkgname}-${_pkgver}"
  ./autogen.sh
}

build() {
  cd "${srcdir}/${pkgname}-${_pkgver}"
  ./configure --prefix=/usr
  make
}

check() {
  cd "${srcdir}/${pkgname}-${_pkgver}"
  # make check
}

package() {
  cd "${srcdir}/${pkgname}-${_pkgver}/"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ft=sh ts=2 sw=2 et:
