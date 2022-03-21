# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

## GitHub tarball does not build due to requiring itself for setup

pkgname=python-m2r2
pkgver=0.3.2
pkgrel=2
pkgdesc="Markdown to reStructuredText converter, forked from m2r"
arch=('any')
url="https://github.com/crossnox/m2r2"
license=('MIT')
depends=('python-mistune1' 'python-docutils')
makedepends=('python-setuptools' 'python-build' 'python-installer' 'python-wheel')
checkdepends=('python-pytest' 'python-six' 'python-sphinx')
provides=('python-m2r')
changelog=CHANGES.md
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/m/m2r2/m2r2-$pkgver.tar.gz")
# source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('ccd95b052dcd1ac7442ecb3111262b2001c10e4119b459c34c93ac7a5c2c7868')

build() {
	cd "m2r2-$pkgver"
	PYTHONPATH=./ python -m build --wheel --no-isolation
}

check() {
	cd "m2r2-$pkgver"
	pytest -x --disable-warnings
}

package() {
	export PYTHONHASHSEED=0
	cd "m2r2-$pkgver"
	python -m installer --destdir="$pkgdir/" dist/*.whl

	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s "$_site/m2r2-$pkgver.dist-info/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/"
}
