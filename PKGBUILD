# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=muffet-bin
pkgdesc="Fast website link checker"
pkgver=2.2.2
pkgrel=1
arch=('x86_64')
url="https://github.com/raviqqe/muffet"
license=('MIT')
conflicts=("${pkgname%-bin}" "${pkgname%-bin}-git")
provides=("${pkgname%-bin}")
source_x86_64=("$url/releases/download/v$pkgver/${pkgname%-bin}_${pkgver}_Linux_x86_64.tar.gz")
sha256sums_x86_64=('183426a47f457a17c9fb86b7433bc25ec65c4e66c0ff1c7c2311792ea4bbd3ad')

package() {
  install -Dm 755 "${pkgname%-bin}" -t "$pkgdir/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/${pkgname%-bin}"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/${pkgname%-bin}"
}
