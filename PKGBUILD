# Maintainer: Marco Pompili <aur@emarcs.org>

_npmname=nightwatch
pkgname=nodejs-$_npmname
pkgver=0.9.4
pkgrel=1
pkgdesc="Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium server."
arch=('any')
url="http://nightwatchjs.org/"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz")
noextract=($_npmname-$pkgver.tgz)
sha256sums=('bdcd7118a8f5695a26d3e31c2404b9c46024eb44ac5d3240044866b3704fdf6a')

package() {
  npm install -g --user root --prefix "$pkgdir"/usr "$srcdir"/$_npmname-$pkgver.tgz
  rm -r "$pkgdir"/usr/etc
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
  ln -s "../../../lib/node_modules/$_npmname/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/"
}
