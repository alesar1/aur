# Maintainer: pfm <vorticity at mail dot ru>
pkgname=python-eliot
_pkgname=eliot
pkgver=1.8.0
pkgrel=1
pkgdesc="Logging that tells you why it happened"
arch=(any)
url="https://eliot.readthedocs.io"
license=('Apache')
depends=("python")
makedepends=("python-setuptools")
source=("$_pkgname-$pkgver.tar.gz::https://github.com/itamarst/$_pkgname/archive/$pkgver.tar.gz")
md5sums=('7fd0d8ad0ea2840d42896cc4429981e7')

build() {
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py build
}

package(){
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
