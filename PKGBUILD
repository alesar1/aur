# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=sic-image-cli-bin
_pkgname=sic
pkgver=0.19.1
pkgrel=1
pkgdesc="Accessible image processing and conversion from the terminal"
arch=('x86_64')
url="https://github.com/foresterre/sic"
license=('MIT')
depends=('gcc-libs')
conflicts=("$_pkgname" "${pkgname%-bin}")
provides=("${pkgname%-bin}")
source_x86_64=("$pkgname-$pkgver.zip::$url/releases/download/v$pkgver/$_pkgname-$pkgver-x86_64-unknown-linux-gnu.zip"
               "$pkgname-$pkgver-LICENSE-MIT::$url/raw/v$pkgver/LICENSE-MIT"
               "$pkgname-$pkgver-README.md::$url/raw/v$pkgver/README.md"
               "$pkgname-$pkgver-shell_completions.zip::$url/releases/download/v$pkgver/shell_completions.zip")
sha512sums_x86_64=('bb5c38003a0281de1c2557e0748befc8bfa593fd19d00aa2c0fb21ad2ca8ddadb9524ec60dd21a948143c59e92989e99a74b284c53d4f71bff7aac466f71be4f'
                   '76e93decfd32f274563a31310f0eb97588d27f4627cb09d117ec1acaf1e62925309161971ff5e10963c39fbda90bd007b341e304b1f37a58a07362828b23afb9'
                   '0969480edfd8fa09bbebc2496a45fb5e8a7c6e6456065e0912cbda54cca1f1d00ab72e7932e3fee545e7f17c6b8ddbf75c67f60e1ec12089585e8883d1aba94f'
                   '1764eacdb577cd0bb1a7171fcebfb576f07e3536995f29fc3fce1e3872a5436a8d9e340df605af769a4f66eda0f93c6990cf616eadd34243afa8e92c9b4e8097')

package() {
  install -Dm 755 "$_pkgname" -t "${pkgdir}/usr/bin"
  install -Dm 644 "$pkgname-$pkgver-README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm 644 "$pkgname-$pkgver-LICENSE-MIT" "$pkgdir/usr/share/licenses/$pkgname/LICENSE-MIT"
  install -Dm 644 "$_pkgname.bash" "${pkgdir}/usr/share/bash-completion/completions/$_pkgname"
  install -Dm 644 "$_pkgname.fish" -t "${pkgdir}/usr/share/fish/completions"
  install -Dm 644 "_$_pkgname" -t "${pkgdir}/usr/share/zsh/site-functions"
}
