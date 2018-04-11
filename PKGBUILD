# Maintainer: Tom Wadley <tom@tomwadley.net>

pkgname=chamber
pkgver=2.0.0
pkgrel=1
pkgdesc="A tool for managing secrets using AWS SSM Parameter Store"
arch=('x86_64')
url="https://github.com/segmentio/$pkgname/"
license=('MIT')
source=("https://github.com/segmentio/$pkgname/releases/download/v$pkgver/$pkgname-v$pkgver-linux-amd64"
        "$pkgname-$pkgver-LICENSE::https://raw.githubusercontent.com/segmentio/$pkgname/v$pkgver/LICENSE")
sha256sums=('bdff59df90a135ea485f9ce5bcfed2b3b1cc9129840f08ef9f0ab5309511b224'
            'feaff489d3c077f7b48cf76a5f038604338a092be379c1297c64c26c6b81714b')

package() {
  install -Dm755 "$pkgname-v$pkgver-linux-amd64" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 $pkgname-$pkgver-LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
