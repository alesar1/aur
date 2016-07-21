# Maintainer: Francois Boulogne <fboulogne at april dot org>
# Contributor: Davide Lasagna <davide.lasagna@polito.it>
pkgname=python2-joblib
pkgver=0.10.0
pkgrel=1
pkgdesc="Joblib is a set of tools to provide lightweight pipelining in Python."
url="http://pypi.python.org/pypi/joblib"
arch=(any)
license=('BSD')
depends=('python2')
makedepends=('python2-setuptools')
checkdepends=('python2-nose' 'python2-coverage' 'python2-numpy')
source=(https://github.com/joblib/joblib/archive/$pkgver.zip)

check() {
    cd $srcdir/joblib-"$pkgver"
    nosetests2
}

package() {
    cd $srcdir/joblib-"$pkgver"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
md5sums=('5b3bc459b8084088b56d74af0df2572f')
