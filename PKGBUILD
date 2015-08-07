# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=python2-json-rpc
pkgver=1.10.2
pkgrel=1
pkgdesc="JSON-RPC transport realisation"
arch=('any')
depends=('python2')
makedepends=('python2-setuptools')
url="https://github.com/pavlov99/json-rpc"
license=('MIT')
options=(!emptydirs)
source=(https://pypi.python.org/packages/source/j/${pkgname#python2-}/${pkgname#python2-}-$pkgver.tar.gz)
md5sums=('54c0e0a7a69869cdb3437274dc3d50f4')
sha256sums=('ae7aef667014ed3af1b88a8dfd11099a5c5ad29311fdb87b006f270fe3f549f6')

build() {
  cd "$srcdir/${pkgname#python2-}-$pkgver"

  msg 'Building...'
  python2 setup.py build
}

package() {
  cd "$srcdir/${pkgname#python2-}-$pkgver"

  msg 'Installing...'
  python2 setup.py install --root="$pkgdir" --optimize=1
}
