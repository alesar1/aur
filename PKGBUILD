# Maintainer: Caio Novais <caionov08 at gmail dot com>
pkgname=pfetch
pkgver=0.6.0
pkgrel=1
pkgdesc="A pretty system information tool written in POSIX sh."
arch=('any')
url="https://github.com/dylanaraps/$pkgname"
license=('MIT')
provides=("$pkgname")
source=("$pkgname-$pkgver.tar.gz::https://github.com/dylanaraps/$pkgname/archive/$pkgver.tar.gz")
sha1sums=('9440d085e9ef93a94127ed634edbbfb2048186c7')

package() {
  install -Dm755 "$srcdir/$pkgname-$pkgver/pfetch" "$pkgdir/usr/bin/pfetch"
}
