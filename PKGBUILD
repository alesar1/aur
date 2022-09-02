# Maintainer: Michael Schubert <mschu.dev at gmail> github.com/mschubert/PKGBUILDs
pkgname=python-numba
pkgver=0.56.2
pkgrel=1
pkgdesc="NumPy aware dynamic Python compiler using LLVM"
url="https://numba.pydata.org/"
arch=('i686' 'x86_64')
license=('BSD')
depends=('python-llvmlite>=0.39.0' 'python-llvmlite<0.40' 'python-numpy>=1.18' 'python-numpy<1.24' 'intel-tbb>=2021.1' python-setuptools)
makedepends=('cython')
optdepends=('python-scipy>=1.0.0')
#source=(numba-$pkgver.tar.gz::https://github.com/numba/numba/archive/$pkgver.tar.gz)
source=(numba-$pkgver.tar.gz::https://github.com/numba/numba/archive/refs/tags/$pkgver.tar.gz)
sha256sums=('26d78287b6c79eca299f2b87332803d46fc441e83c86103dd3cc515a650413f9')

build() {
  cd "$srcdir/numba-$pkgver"
  python setup.py build
}

check_disabled() { #ERROR: TypeError None is not callable
  cd "$srcdir/numba-$pkgver"
  python setup.py test
}

package() {
  cd "$srcdir/numba-$pkgver"
  python setup.py install --skip-build --prefix=/usr --root="$pkgdir" --optimize=1
}
