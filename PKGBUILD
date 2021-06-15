# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=python-turkish-morphology
pkgver=1.2.4
pkgrel=1
pkgdesc='A two-level morphological analyzer for Turkish'
arch=(any)
url="https://github.com/google-research/${pkgname#python-}"
license=(Apache)
depends=(absl-py python python-protobuf)
makedepends=(python-setuptools)
_pkgdir="${pkgname#python-}-$pkgver"
source=("$_pkgdir.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('0570fcce32ea8bacf8e12cb83232c1458920f71fed71d5ba270b511144ef5f5d')

build() {
	cd "$_pkgdir"
	python setup.py build
}

package() {
	cd "$_pkgdir"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
