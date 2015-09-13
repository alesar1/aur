# Maintainer: Chad "crossroads1112" Sharp <crossroads1112@riseup.net>
pkgname=libcs50-git
pkgver=r16.3a50671
pkgrel=1
pkgdesc="Harvard's CS50 library"
arch=('x86_64' 'i686')
url="cs50.harvard.edu"
license=('BSD')
depends=()
optdepends=()
makedepends=('git')
provides=("libcs50")
source=(git+https://github.com/cs50/library50-c.git)
md5sums=(SKIP)


build(){
    cd $srcdir/library50-c/
    gcc -c -lm -ggdb3 -std=c99 cs50.c -o cs50.o 
    ar rcs libcs50.a cs50.o
}

package() {
    cd $srcdir/library50-c/
    install -Dm0644     libcs50.a   "$pkgdir/usr/lib/libcs50.a"
    install -Dm0644     cs50.h      "$pkgdir/usr/include/cs50.h"
    install -Dm0644     cs50.c      "$pkgdir/usr/src/cs50.c"
}

pkgver() {
  cd "$srcdir/library50-c"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
