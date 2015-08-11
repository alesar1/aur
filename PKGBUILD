pkgname=pmrp-git
pkgver=r4.6998278
pkgrel=1
pkgdesc="Little Bash script for playing various internet radio stations"
arch=('any')
url=("http://adaptagrams.sourceforge.net/")
license=('Public Domain')
depends=('mpg123')
makedepends=('git')
source=($pkgname::git+https://github.com/hakerdefo/pmrp.git)
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  cd "$pkgname"
  mkdir -p "$pkgdir/usr/bin"
  cp pmrp "$pkgdir/usr/bin/pmrp"
  chmod +x "$pkgdir/usr/bin/pmrp"
}