# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=kbs2-bin
pkgver=0.5.1
pkgrel=1
pkgdesc="A secret manager backed by age"
arch=('x86_64')
url="https://github.com/woodruffw/kbs2"
license=('MIT')
depends=('libx11' 'gcc-libs')
conflicts=("${pkgname%-bin}")
provides=("${pkgname%-bin}")
source_x86_64=("$url/releases/download/v$pkgver/${pkgname%-bin}-linux-v${pkgver}.tar.gz")
sha256sums_x86_64=('d30b397ddc6c70780533baa03b7db1c6897a977e8d01ba218890cd9b3acb7d1f')

package() {
  install -Dm 755 "${pkgname%-bin}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  "./${pkgname%-bin}" --completions bash | install -Dm 644 /dev/stdin "${pkgdir}/usr/share/bash-completion/completions/${pkgname%-bin}"
  "./${pkgname%-bin}" --completions fish | install -Dm 644 /dev/stdin "${pkgdir}/usr/share/fish/vendor_completions.d/${pkgname%-bin}.fish"
  "./${pkgname%-bin}" --completions zsh | install -Dm 644 /dev/stdin "${pkgdir}/usr/share/zsh/site-functions/_${pkgname%-bin}"
}
