# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Clint Valentine <valentine.clint@gmail.com>

pkgname=python-pydna
pkgver=4.0.7
pkgrel=2
pkgdesc='Data structures for double-stranded DNA & simulation of homologous recombination'
arch=('any')
url='https://github.com/bjornfjohansson/pydna'
license=('BSD')
depends=(
	'python-appdirs'
	'python-biopython'
	'python-networkx'
	'python-prettytable'
	'python-pyparsing'
	'python-requests')
optdepends=(
	'python-matplotlib: gel simulation'
	'python-mpldatacursor: gel simulation'
	'python-numpy: gel simulation'
	'python-pint: gel simulation'
	'python-scipy: gel simulation')
makedepends=(
	'git'
	'python-build'
	'python-installer'
	'python-wheel'
	'python-sphinx'
	'python-setuptools'
	'python-setuptools-scm'
	'python-pytest-runner')
checkdepends=('python-requests-mock' 'ipython' 'python-codon-adaptation-index')
changelog=CHANGELOG.md
source=("$pkgname::git+$url#tag=$pkgver")
sha256sums=('SKIP')

build() {
	cd "$pkgname"
	python -m build --wheel --no-isolation
}

check() {
	cd "$pkgname"
	PYTHONPATH=./src pytest -x --disable-warnings
}

package() {
	export PYTHONHASHSEED=0
	cd "$pkgname"
	python -m installer --destdir="$pkgdir/" dist/*.whl
	install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
