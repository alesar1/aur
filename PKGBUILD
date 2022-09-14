# Maintainer: ozraru <ozraru at raru work>

pkgname=isc-stork
_pkgname=stork
pkgver=1.6.0
pkgrel=1
pkgdesc="A dashboard for BIND 9 and Kea DHCP."
arch=('x86_64')
url='https://gitlab.isc.org/isc-projects/stork'
license=('MPL2')
makedepends=('rake' 'git')
backup=('etc/stork')
source=("git+https://gitlab.isc.org/isc-projects/${_pkgname}.git#tag=v${pkgver}"
        "isc-stork.sysuser")
sha512sums=('SKIP'
            '524a319ab3b938bdab902b82c99744dcbf90cf5b44dc2bc7003b5fac7b77f6bb07d260c7f5cdd3fee8d3f673ca23611b00d1ded27a96da6fcb85d16e70b7a580')

build() {
  cd $_pkgname
  rake build
}

package() {
  cd $_pkgname
  rake install:server DEST="$pkgdir"
  mkdir -p "$pkgdir/usr/share"
  mv "$pkgdir/man" "$pkgdir/usr/share"
  mv "$pkgdir/lib" "$pkgdir/usr"
  mkdir -p "$pkgdir/etc/"
  install -Dm644 "${srcdir}/isc-stork.sysuser" "${pkgdir}/usr/lib/sysusers.d/isc-stork.conf"
}

