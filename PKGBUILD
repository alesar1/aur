# Maintainer: Tom Hacohen <tom@stosb.com>

pkgname=etebase
_pkgname=${pkgname}
pkgver=0.1.2
pkgrel=1
pkgdesc="Etebase C library"
arch=(x86_64)
url="https://github.com/etesync/libetebase"
license=('LGPL')
depends=('openssl')
makedepends=('cargo' 'git')
source=("${_pkgname}::git+https://github.com/etesync/libetebase.git?tag=v$pkgver")
sha512sums=('SKIP')

build() {
  cd "${_pkgname}"
  make
}

package() {
  cd "${_pkgname}"
  make DESTDIR="${pkgdir}" install

  install -t "${pkgdir}/usr/share/doc/${pkgname}" \
    -vDm644 README.md
}
