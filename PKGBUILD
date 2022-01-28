# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=python-confu
pkgver=1.8.0
pkgrel=1
pkgdesc="Configuration file validation and generation"
arch=('any')
url="https://github.com/20c/confu"
license=('Apache')
depends=('python')
makedepends=('python-poetry-core' 'python-build' 'python-install')
checkdepends=('python-pytest' 'python-click')
changelog=CHANGELOG.md
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('e981f0f48374c01f2ffbfc0c043000a0168a6fce023c7068e594bf95f1b3647b')

build() {
	cd "confu-$pkgver"
	python -m build --wheel --skip-dependency-check --no-isolation
}

check() {
	cd "confu-$pkgver"
	PYTHONPATH=./src pytest -x
}

package() {
	export PYTHONHASHSEED=0
	cd "confu-$pkgver"
	python -m install --optimize=1 --destdir="$pkgdir/" dist/*.whl
}
