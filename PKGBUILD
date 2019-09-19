# Maintainer: Alexander Fasching <fasching.a91@gmail.com>
_pkgname=aiomonitor
pkgname=python-aiomonitor
pkgver=0.4.4
pkgrel=2
pkgdesc="aiomonitor adds monitor and python REPL capabilities for asyncio application"
arch=('any')
url="https://github.com/aio-libs/aiomonitor"
license=('Apache')
makedepends=('python-setuptools')
depends=('python' 'python-aioconsole' 'python-terminaltables')
source=("https://github.com/aio-libs/${_pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('8284453719b4f8063c07aea1ed402b90')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
