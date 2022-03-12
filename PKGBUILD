# Maintainer: Sam A. Horvath-Hunt <hello@samhh.com>

pkgname=vscode-langservers-extracted
pkgver=4.1.0
pkgrel=1
pkgdesc="Language servers extracted from VSCode."
url="https://github.com/hrsh7th/vscode-langservers-extracted"
license=("MIT")
arch=("any")
depends=("nodejs")
makedepends=("npm")
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('ec4f4ab92f423b12c7ec1cbdd77d3b9ba76edf056c0cadb3e03c360993cc51bd')

prepare() {
  tar xf "$pkgname-$pkgver.tgz" package/LICENSE
}

package() {
  npm i -g --cache "$srcdir/npm-cache" --prefix "$pkgdir/usr" "$srcdir/$pkgname-$pkgver.tgz"
  chown -R root:root "$pkgdir"
  install -Dm644 package/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
