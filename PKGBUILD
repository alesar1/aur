_pkgname=yarl
pkgname=python-yarl
pkgver=0.10.0
pkgrel=2
pkgdesc="Yet another URL library"
arch=('any')
url="https://github.com/aio-libs/yarl/"
license=('Apache')
depends=('python' 'python-multidict')
makedepends=('python-setuptools')
source=('https://pypi.python.org/packages/e4/aa/bc97551a2eb0c25711da61e16940decefdcc41b7bb8897b3c24e1623ef74/yarl-0.10.0.tar.gz')
md5sums=('f109f3e2fc5d1a09309afa714591921f')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
