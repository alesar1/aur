# Maintainer: Jose Riha <jose1711 gmail com>

pkgname=python-m3u8
pkgver=0.3.6
pkgrel=1
pkgdesc="Python m3u8 parser"
url="https://github.com/globocom/m3u8"
depends=('python')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/b3/2d/2883e427732f0a5490589332fe9d24dcfbade921a4075d44a447f7eede67/m3u8-${pkgver}.tar.gz")
md5sums=('763fa7820bca73d2cf73c9e00c607e46')

build() {
    cd $srcdir/m3u8-${pkgver}
    python setup.py build
}

package() {
    cd $srcdir/m3u8-${pkgver}
    python setup.py install --root="$pkgdir" --optimize=1 
}
