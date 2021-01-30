# Maintainer: Maximilian Stahlberg <maximilian.stahlberg tu-berlin de>

pkgname=python-picos
pkgver=2.1
pkgrel=2
pkgdesc='A Python interface to conic optimization solvers.'
arch=('any')
url='https://gitlab.com/picos-api/picos'
license=('GPL3')
depends=('python-numpy' 'python-cvxopt')
optdepends=(
	'cplex: solve using CPLEX'
	'gurobi: solve using Gurobi'
	'mosek: solve using MOSEK'
	'python-ecos: solve using ECOS'
	'python-pyscipopt: solve using SCIP'
	'python-smcp: solve using SMCP'
	'python-swiglpk: solve using GLPK'
)
makedepends=('python-setuptools')
conflicts=('python-picos-git')
source=("https://gitlab.com/picos-api/picos/-/archive/v${pkgver}/picos-v${pkgver}.tar.gz"
	"https://gitlab.com/picos-api/picos/-/raw/bb51b369/setup.py")
md5sums=('41ce633ae2afe1bf63753d519f75ec9e'
         '65309df6473e3a9b641da9744d51bdd1')

prepare() {
	# Work around a bug in setup.py that's fixed in version 2.1.1.
	ln -sfr "${srcdir}/setup.py" "${srcdir}/picos-v${pkgver}/"
}

build() {
	cd "${srcdir}/picos-v${pkgver}"
	python setup.py build
}

check() {
	cd "${srcdir}/picos-v${pkgver}/build/lib"
	python -BIc "import picos"
}

package() {
	cd "${srcdir}/picos-v${pkgver}"
	python setup.py install --root=${pkgdir} --optimize=1 --skip-build
}
