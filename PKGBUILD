# Maintainer:  Vincent Grande <shoober420@gmail.com>
# Contributor: Colin Booth <colin@heliocat.net>
# Contributor: Eric Vidal <eric@obarun.org>
# Contributor: Eli Schwartz <eschwartz@archlinux.org>
# Contributor: Timofey Titovets <nefelim4ag@gmail.com>
# Contributor: linuxer <linuxer@artixlinux.org>

pkgname=ananicy-s6
_alias=ananicy
pkgver=1
pkgrel=1
pkgdesc="Ananicy - is Another auto nice daemon, with community rules support"
arch=('any')
url="https://github.com/Nefelim4ag/Ananicy"
license=('ISC')
depends=('ananicy' 's6' 'bash' 'schedtool')
makedepends=('git' 'make')
source=("ananicy.run"
        "ananicy.finish"
        "ananicy.type")
b2sums=('SKIP'
        'SKIP'
        'SKIP')
install=$pkgname.install

package() {
  mkdir -p "$pkgdir/etc/s6/sv/$_alias"
  cp ananicy.run $pkgdir/etc/s6/sv/$_alias/run
  cp ananicy.type $pkgdir/etc/s6/sv/$_alias/type
  cp ananicy.finish $pkgdir/etc/s6/sv/$_alias/finish
  install=ananicy-s6.install
}
