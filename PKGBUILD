# Maintainer: Cedric Girard <cgirard [dot] archlinux [at] valinor [dot] fr>
# Contributor: Mario Finelli <mario at finel dot li>

_npmname=clean-css
pkgname=nodejs-$_npmname
pkgver=5.1.2
pkgrel=1
pkgdesc="A fast, efficient, and well tested CSS minifier for node.js."
arch=('any')
url="https://github.com/jakubpawlowicz/clean-css"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha256sums=('1032221d97b5e0f7c7516eb584643e76392d04188e1472bec152756d7ea90b27')

package() {
  npm install -g --prefix "$pkgdir/usr" "$srcdir"/$_npmname-$pkgver.tgz

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  chmod -R u=rwX,go=rX "$pkgdir"

  # npm installs package.json owned by build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "$pkgdir"

  install -Dm0644 "$pkgdir/usr/lib/node_modules/$_npmname/LICENSE" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
