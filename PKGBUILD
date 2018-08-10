# Maintainer: Francois Boulogne <fboulogne at april dot org>
# Contributor: Davide Lasagna <davide.lasagna@polito.it>
pkgname=python2-joblib
pkgver=0.12.2
pkgrel=1
pkgdesc="Set of tools to provide lightweight pipelining in Python."
url="http://pypi.python.org/pypi/joblib"
arch=(any)
license=('BSD')
depends=('python2')
makedepends=('python2-setuptools')
optdepends=('python2-numpy' 'python2-lz4')
source=(https://github.com/joblib/joblib/archive/$pkgver.zip)

package() {
    cd $srcdir/joblib-"$pkgver"
    python2 setup.py install --root="$pkgdir/" --optimize=1
}
md5sums=('afe047f519506e05c9afb53c079ec66f')
