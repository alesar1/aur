# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Andres Alejandro Navarro Alsina <aanavarroa@unal.edu.co>
# Contributor:  GalSim developers team on GitHub

pkgname=python-galsim
_pkg=GalSim
pkgver=2.4.3
pkgrel=1
pkgdesc="Modular galaxy image simulation toolkit"
arch=('x86_64')
url="https://github.com/GalSim-developers/GalSim"
license=('BSD')
depends=(
	'boost-libs'
	'eigen'
	'fftw'
	'pybind11'
	'python-astropy'
	'python-coord'
	'python-future'
	'python-numpy')
makedepends=('python-build' 'python-installer' 'python-setuptools' 'python-wheel')
# checkdepends=('python-nose' 'python-yaml' 'python-pandas')
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/G/$_pkg/$_pkg-$pkgver.tar.gz")
sha256sums=('7134e7d00847bb9670ac9568bd16a131611a811ad6a9e7d0fb1e1518771fb7b3')

build() {
	cd "$_pkg-$pkgver"
	python -m build --wheel --no-isolation
}

# check() {
# 	cd "$_pkg-$pkgver"
# 	local _py="$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')"
# 	PYTHONPATH="$PWD/build/lib.linux-$CARCH-$_py" nosetests
# }

package() {
	cd "$_pkg-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir" dist/*.whl
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s "$_site/$_pkg-$pkgver.dist-info/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/"
}
