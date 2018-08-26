# Maintainer of this PKBGUILD file: Martino Pilia <martino.pilia@gmail.com>
_name=scikit-build
pkgname=python-${_name}
pkgver=0.8.0
pkgrel=1
pkgdesc='Improved build system generator for CPython C, C++, Cython and Fortran extensions'
arch=('any')
url='https://github.com/scikit-build/scikit-build'
license=('MIT')
depends=('python-setuptools' 'python-wheel')
makedepends=()
source=("https://github.com/scikit-build/scikit-build/archive/${pkgver}.tar.gz")
md5sums=('87f9a949ce936ad90b91edc7dab3b811')

package() {
	cd "$srcdir/$_name-$pkgver"

	python setup.py install --optimize=1 --root=$pkgdir
    
	install -D -m644 ${srcdir}/$_name-$pkgver/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

