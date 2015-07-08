# Maintainer: Aaron DeVore <aaron.devore@gmail.com>
# Contributor: Chris Baker <baker.chris.3@gmail.com>

pkgname=python2-blist
pkgver=1.3.6
pkgrel=1
pkgdesc="A list-like type with better asymptotic performance"
arch=(i686 x86_64)
url="http://pypi.python.org/pypi/blist/"
license=('BSD')
depends=('python2')
makedepends=('python2-setuptools')
changelog=Changelog
source=(http://pypi.python.org/packages/source/b/blist/blist-$pkgver.tar.gz)
md5sums=('a538f1a24b9191e3c40252e9397408a9')

build() {
  cd "$srcdir/blist-$pkgver"
  python2 setup.py build
}

package() {
  cd "$srcdir/blist-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

