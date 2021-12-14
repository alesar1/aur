# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=python-ufo-extractor
_pipname=${pkgname#python-}
_upname=${_pipname#ufo-}
pkgver=0.4.1
pkgrel=3
pkgdesc='Tools for extracting data from font binaries into UFO objects'
url="https://github.com/robotools/$_upname"
arch=(any)
license=(MIT)
depends=(python
         python-fonttools)
makedepends=(python-setuptools)
checkdepends=(python-pytest-runner)
_archive="$_upname-$pkgver"
source=("$_archive.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('80cdb49691cc7c6ee4c4571d45d7d8430188f9cb4566087de0927d1949d4e937')

build() {
	cd "$_archive"
	python setup.py build
}

check() {
	cd "$_archive"
	python setup.py test
}

package() {
	cd "$_archive"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
