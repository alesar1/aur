#Maintainer: David McInnis <dave@dave3.xyz>

pkgname=('python-pyamg')
_name='pyamg'
pkgver='4.0.0'
pkgrel=2
pkgdesc="PyAMG: Algebraic Multigrid Solvers in Python"
url="https://github.com/pyamg/pyamg"
depends=('python')
makedepends=('python-setuptools' 'pybind11')
license=('MIT')
arch=('i686' 'x86_64')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('3ceb38ffd86e29774e759486f2961599c8ed847459c68727493cadeaf115a38a')

build() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py build
}

check() {
	cd "${srcdir}/${_name}-${pkgver}"
	python setup.py test
}


package() {
    depends+=()
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/license.md"
}
