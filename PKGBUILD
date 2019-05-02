# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>

pkgname=yaloco
pkgver=1.2.3
pkgrel=1
pkgdesc='Yet Another Log Colorizer'
arch=(x86_64)
url='https://github.com/xyproto/yaloco'
license=(MIT)
makedepends=(git go)
source=("git+$url#tag=v$pkgver")
md5sums=('SKIP')

build() {
  cd $pkgname

  go build .
}

package() {
  cd "$pkgname"

  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: ts=2 sw=2 et:
