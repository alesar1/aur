# Maintainer: Ben Greiner <code@bnavigator.de>
_name=slycot
pkgname="python-${_name}-mkl"
pkgver=0.4.0.0
pkgrel=2
pkgdesc="Python wrapper for selected SLICOT routines, notably including solvers for Riccati, Lyapunov and Sylvester equations. Built against Intel MKL"
arch=('i686' 'x86_64')
url="http://github.com/python-control/Slycot"
license=('GPL2')
depends=('python-numpy-mkl')
makedepends=('cmake'
             'gcc-fortran'
             'intel-mkl'
             'python-pytest'
             'python-setuptools'
             'python-scipy-mkl'
             'python-scikit-build>=0.8.1')
opts=(!strip)
optdepends=()
provides=('python-slycot')
conflicts=('python-slycot')
source=(https://files.pythonhosted.org/packages/source/s/$_name/$_name-$pkgver.tar.gz)
sha256sums=('1d9921e9b04a5b9892870fd3481f7b08e6fa083a1a3848ad262819de19eb5e02')

prepare(){
  export MKLROOT=/opt/intel/mkl
  export BLA_VENDOR=Intel10_64lp
}

build() {
  cd "$srcdir/${_name}-${pkgver}"
  python setup.py build -G "Unix Makefiles"
}

check() {
  export PYTHONDONTWRITEBYTECODE=1 
  local python_version=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
  export PYTHONPATH="${srcdir}/${_name}-${pkgver}/_skbuild/linux-$CARCH-$python_version/setuptools/lib"
  pytest --pyargs slycot
}

package() {
  export LDFLAGS="$LDFLAGS -shared"

  cd "$srcdir/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build -G "Unix Makefiles"

  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

# vim:set ts=2 sw=2 et:
