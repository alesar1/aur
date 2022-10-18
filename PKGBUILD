# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Jelle van der Waa <jelle@archlinux.org>

pkgname=python-atom
_pkg=atom
pkgver=0.8.2
pkgrel=1
pkgdesc='Memory efficient Python objects'
arch=('x86_64')
url='https://github.com/nucleic/atom'
license=('BSD' 'custom')
depends=('python')
makedepends=(
	'python-build'
	'python-cppy'
	'python-installer'
	'python-setuptools'
	'python-setuptools-scm'
	'python-sphinx'
	'python-wheel')
checkdepends=('python-pytest')
source=("$pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/a/$_pkg/$_pkg-$pkgver.tar.gz")
sha256sums=('3155b7a0a286cb5c2bff2929fc2341d071dc9169b0d0ff1f15450ddd57d24c57')

prepare() {
	cd "$_pkg-$pkgver"
	sed -i '/sphinx.ext.graphviz/d;/html_theme/d' docs/source/conf.py
}

build() {
	cd "$_pkg-$pkgver"
	python -m build --wheel --no-isolation
  local python_version=$(python -c 'import sys; print("".join(map(str, sys.version_info[:2])))')
	PYTHONPATH="$PWD/build/lib.linux-$CARCH-cpython-${python_version}" make -C docs man
}

check() {
	cd "$_pkg-$pkgver"
  local python_version=$(python -c 'import sys; print("".join(map(str, sys.version_info[:2])))')
  PYTHONDONTWRITEBYTECODE=1 PYTHONPATH="$PWD/build/lib.linux-$CARCH-cpython-${python_version}" pytest -x
}

package() {
	cd "$_pkg-$pkgver"
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir" dist/*.whl
	install -Dm644 docs/build/man/atom.1 -t "$pkgdir/usr/share/man/man1/"
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s "$_site/$_pkg-$pkgver.dist-info/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/"
}
