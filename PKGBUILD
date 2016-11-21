# Maintainer: Jan Koppe <post@jankoppe.de>

pkgname=yarn
pkgver=0.17.6
pkgrel=1
pkgdesc='Fast, reliable, and secure dependency management.'
arch=(any)
url='http://yarnpkg.com'
license=('BSD')
depends=('nodejs')
source=("https://github.com/yarnpkg/yarn/releases/download/v$pkgver/yarn-v$pkgver.tar.gz")
sha256sums=('54c4d615fe388a2ccdaf3998911447ff5ea11ff19c1dd45558fed40f31cac8e4')

package() {
  install -dm755  "$pkgdir"/usr/lib/node_modules/yarn
  cp -R "$srcdir"/dist/* "$pkgdir"/usr/lib/node_modules/yarn

  install -dm755 "$pkgdir"/usr/bin
  ln -s /usr/lib/node_modules/yarn/bin/yarn.js "$pkgdir"/usr/bin/yarn

  install -Dm644 "$srcdir"/dist/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
