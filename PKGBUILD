# Maintainer: Michael Picht <michael.picht@ussenterprise.de>

_pkgorg=github.com/mipimipi
pkgname=crema-git
_pkgname=crema
pkgver=1.2
pkgrel=1
pkgdesc="Manage your custom Arch Linux repositories"
arch=('any')
url="https://$_pkgorg/$_pkgname"
license=('GPL3')
source=("git://$_pkgorg/$_pkgname.git")
md5sums=(SKIP)
depends=('aurutils' 'devtools' 'rsync')
pkgver() {
  cd "$srcdir/$_pkgname"
  printf "%s.r%s.g%s" "$(git describe)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
package() {
  cd "$srcdir/$_pkgname"

  install -Dm755 -t "$pkgdir/usr/bin/" "$_pkgname"
}
