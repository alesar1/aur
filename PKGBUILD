# Maintainer: orhun <orhunparmaksiz@gmail.com>
# Maintainer: kdheepak <me@kdheepak.com>
# https://github.com/orhun/pkgbuilds

pkgname=taskwarrior-tui-bin
pkgver=0.9.6
pkgrel=1
pkgdesc="A Terminal User Interface for Taskwarrior"
arch=('x86_64')
url="https://github.com/kdheepak/taskwarrior-tui"
license=('MIT')
depends=('task')
conflicts=("${pkgname%-bin}")
provides=("${pkgname%-bin}")
source_x86_64=("$pkgname-$pkgver.tar.gz::$url/releases/download/v$pkgver/${pkgname%-bin}-x86_64-unknown-linux-gnu.tar.gz"
        "$pkgname-$pkgver-LICENSE::$url/raw/v$pkgver/LICENSE"
        "$pkgname-$pkgver-README.md::$url/raw/v$pkgver/README.md")
sha256sums_x86_64=('7ba58a54e345e52dd6ea3a9305c6bf1bfddd17933c56e1c6d2b79f46e5e73aa3'
                   '0591178e63904cfbcd6c5efc0490d59637aaede5e2e14e79e978a8162981a755'
                   '5d89d633f0fdfc0319fdbf7460397b3874a0d34119ae66c0a572c3131054615f')

package() {
  install -Dm 755 "${pkgname%-bin}" -t "${pkgdir}/usr/bin"
  install -Dm 644 "$pkgname-$pkgver-LICENSE" "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm 644 "$pkgname-$pkgver-README.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
