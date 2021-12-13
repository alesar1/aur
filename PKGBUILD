# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=python-commandlines
pkgver=0.4.1
pkgrel=2
pkgdesc='A command line argument to object parsing library for CLI application development'
arch=(any)
url="https://github.com/chrissimpkins/${pkgname#python-}"
license=(MIT)
depends=(python)
makedepends=(python-setuptools)
_archive="${pkgname#python-}-$pkgver"
source=("$_archive.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('716725f8cff484defc297498e23c575b6b2876e4919a9c03c23cbbab7542942a')

build() {
	cd "$_archive"
	python setup.py build
}

package() {
    cd "$_archive"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
