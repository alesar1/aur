# Maintainer: Francois Boulogne <fboulogne at april dot org>
pkgname=python2-slicerator
pkgver=0.9.7
pkgrel=1
pkgdesc="a lazy-loading, fancy-sliceable iterable "
url="https://github.com/soft-matter/slicerator"
arch=(any)
license=('BSD')
depends=('python2')
makedepends=('python2-setuptools')
checkdepends=('python2-nose')
source=(https://github.com/soft-matter/slicerator/archive/v$pkgver.zip)

check() {
    cd $srcdir/slicerator-"$pkgver"
    nosetests2
}

package() {
    cd $srcdir/slicerator-"$pkgver"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
md5sums=('3b598f567efe4b0906fba469ff101a03')
