# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Federico Cassani <federico dot cassani at outlook dot com>

pkgname=python-imbalanced-learn
_pkg="${pkgname#python-}"
pkgver=0.9.0
pkgrel=1
pkgdesc='Toolbox for imbalanced dataset in machine learning'
arch=('any')
url="https://github.com/scikit-learn-contrib/imbalanced-learn"
license=('MIT')
depends=('python>=3.7' 'python-scipy' 'python-numpy' 'python-scikit-learn')
optdepends=('python-keras' 'python-tensorflow')
makedepends=('python-setuptools' 'python-build' 'python-installer' 'python-wheel')
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/${_pkg::1}/$_pkg/$_pkg-$pkgver.tar.gz")
sha256sums=('836a4c137cc3c10310d4f6cd5ec34600ff488d7f8c243a997c3f9b551c91d0b2')

prepare() {
	cd "$_pkg-$pkgver"
	sed -i "/packages=/s/()/(exclude=['*tests*'])/" setup.py
}

build() {
	cd "$_pkg-$pkgver"
	python -m build --wheel --no-isolation
}

package() {
	cd "$_pkg-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" dist/*.whl
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s \
		"$_site/${_pkg/-/_}-$pkgver.dist-info/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/"
}
