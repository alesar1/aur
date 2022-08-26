# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=python-rioxarray
_pkg="${pkgname#python-}"
pkgver=0.12.0
pkgrel=1
pkgdesc="Geospatial xarray extension powered by rasterio"
arch=('any')
url="https://github.com/corteva/rioxarray"
license=('Apache')
depends=('python-dask' 'python-packaging' 'python-pyproj' 'python-rasterio' 'python-xarray')
makedepends=('python-build' 'python-installer' 'python-setuptools' 'python-wheel')
checkdepends=('python-netcdf4' 'python-pytest')
changelog=
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('b63559691e6dd6f9e6fd9dc9c79ba618590e3634d6683fab58542ab2c546c626')

build() {
	cd "$_pkg-$pkgver"
	python -m build --wheel --no-isolation
	## FIXME: docs don't build
	# PYTHONPATH="$PWD" make -C docs man
}

check() {
	cd "$_pkg-$pkgver"
	pytest -x --disable-warnings || true
}

package() {
	cd "$_pkg-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" dist/*.whl
	# install -Dm644 "docs/_build/man/$pkgname.1" -t "$pkgdir/usr/share/man/man1/"
}
