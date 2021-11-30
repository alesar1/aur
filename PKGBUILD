# Maintainer: Sam A. Horvath-Hunt <hello@samhh.com>

pkgname=purescript-language-server
pkgver=0.16.1
pkgrel=1
pkgdesc="Node-based Language Server Protocol server for PureScript."
url="https://github.com/nwolverson/${pkgname}"
license=("MIT")
arch=("any")
depends=("nodejs")
makedepends=("npm")
source=("https://registry.npmjs.org/${pkgname}/-/${pkgname}-${pkgver}.tgz")
noextract=("${pkgname}-${pkgver}.tgz")
sha256sums=('b33d79719da0f75ae54bc9c28cf57a9d2076d08f5e622c794b581c85debd6bbe')

prepare() {
  tar xf "${pkgname}-${pkgver}.tgz" package/LICENSE.md
}

package() {
  npm i -g --cache "${srcdir}/npm-cache" --prefix "$pkgdir/usr" "$srcdir/$pkgname-$pkgver.tgz"
  install -Dm644 package/LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

