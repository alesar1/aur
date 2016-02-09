# Maintainer: Francois Boulogne <fboulogne at april dot org>
pkgname=python-slicerator
pkgver=0.9.7
pkgrel=1
pkgdesc="a lazy-loading, fancy-sliceable iterable "
url="https://github.com/soft-matter/slicerator"
arch=(any)
license=('BSD')
depends=('python')
makedepends=('python-setuptools')
checkdepends=('python-nose')
source=(https://github.com/soft-matter/slicerator/archive/v$pkgver.zip)

check() {
    cd $srcdir/slicerator-"$pkgver"
    nosetests3
}

package() {
    cd $srcdir/slicerator-"$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}
md5sums=('3b598f567efe4b0906fba469ff101a03')
