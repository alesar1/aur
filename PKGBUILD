# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=fw-bin
pkgver=2.13.1
pkgrel=1
pkgdesc="Workspace productivity booster"
arch=('x86_64')
url="https://github.com/brocode/fw"
license=('custom:WTFPL')
depends=('fzf')
conflicts=("${pkgname%-bin}")
provides=("${pkgname%-bin}")
source_x86_64=("$pkgname-$pkgver::$url/releases/download/v$pkgver/${pkgname%-bin}"
               "$pkgname-$pkgver-LICENSE::$url/raw/v$pkgver/LICENSE"
               "$pkgname-$pkgver-README.org::$url/raw/v$pkgver/README.org")
sha512sums_x86_64=('b617a36cd7b1e0b33c16d56accce2fc41b3416f4bdda35705171f9bd935a2d90526467220587fe9ea7fbccc7cd9029e4dac5a7becda794e87047da8e55ec2c30'
                   '1b4064171fa88f41d05e3d1d1c14ceb8a5cb4cca9e6f08f7e267d7740b7d65e4765cb56f0ccf3765ee9c85654559d2d7726d71516b890b0174b68e6cc62ef421'
                   'ba10d10c63770dbcf136977eba3ba36232d38df9db66d4b5ef38be1a1cb02c8529cbf69807f043aa9d4f356b91c4d9343e8cf41720a10ae7181ce319c66c4546')

package() {
  install -Dm 755 "$pkgname-$pkgver" "${pkgdir}/usr/bin/${pkgname%-bin}"
  install -Dm 644 "$pkgname-$pkgver-README.org" "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm 644 "$pkgname-$pkgver-LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
