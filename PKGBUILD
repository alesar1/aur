# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname='python-sparse'
_pkgname=sparse
pkgver=0.11.1
pkgrel=1
pkgdesc="Sparse multidimensional arrays on top of numpy and scipy"
arch=('any')
url="https://sparse.pydata.org"
license=('BSD-3-clause')
checkdepends=('python-dask' 'python-pytest' 'python-pytest-black' 'python-pytest-cov' 'python-pytest-flake8' 'python-toolz')
depends=('python-numpy' 'python-scipy' 'python-numba')
optdepends=()
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/pydata/sparse/archive/$pkgver.tar.gz")
sha256sums=('0aba230ba0473c31c2f558639d3f851771fe2da782a50c5ab381f2325d6e7135')


package(){
  cd "$srcdir/$_pkgname-$pkgver"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1
}

check(){
  cd "$srcdir/$_pkgname-$pkgver"
  PYTHONPATH=. pytest sparse
}
# vim:ts=2:sw=2:et:
