# Maintainer: Jose Riha <jose1711 gmail com>

pkgname=python-m3u8
pkgver=0.9.0
pkgrel=1
pkgdesc="Python m3u8 parser"
url="https://github.com/globocom/m3u8"
depends=('python' 'python-iso8601')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://github.com/globocom/m3u8/archive/${pkgver}.tar.gz")
md5sums=('bdb4c6fd62509e336d3fe5c6e3d95374')

build() {
  cd $srcdir/m3u8-${pkgver}
  python setup.py build
}

package() {
  cd $srcdir/m3u8-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1 
}
