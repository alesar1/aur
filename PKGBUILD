pkgname=mem-suspend
pkgver=1
pkgrel=1
pkgdesc="A script for suspending to memory"
arch=('any')
url="localhost"
source=('mem-suspend.c')
sha256sums=('cfd07c414894effebd5b1452b40496c1ace51d4d734f834a83ae2dec84f03d6a')

build() {
  cd "$srcdir"
  gcc mem-suspend.c -o mem-suspend 
}

package() {
  install -Dm755 "$srcdir/mem-suspend" "$pkgdir/usr/bin/mem-suspend"
  chmod u+s "$pkgdir/usr/bin/mem-suspend"
}
