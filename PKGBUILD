# Maintainer: Maximilian Stahlberg <maximilian.stahlberg tu-berlin de>

pkgbase=('python-swiglpk')
pkgname=('python-swiglpk' 'python2-swiglpk')
pkgdesc="A low-level Python interface to the GLPK optimization solver."
pkgver=4.65.0
pkgrel=1
arch=('any')
url='https://github.com/biosustain/swiglpk'
license=('gpl3')
makedepends=('swig' 'python-setuptools' 'python2-setuptools')
depends=('glpk')

source=("https://github.com/biosustain/swiglpk/archive/${pkgver}.tar.gz")

package_python-swiglpk() {
	depends+=('python')

	cd "${srcdir}/swiglpk-${pkgver}"

	# Install the Python library.
	python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-swiglpk() {
	depends+=('python2')

	cd "${srcdir}/swiglpk-${pkgver}"

	# Install the Python 2 library.
	python2 setup.py install --root="${pkgdir}" --optimize=1
}

md5sums=('8a4a397c557b2857003f0c5aee36610d')
