# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Maximilian Stahlberg <maximilian.stahlberg tu-berlin de>
# Contributor: Feufochmar <feufochmar dot gd at gmail dot com>

## Cannot use libtcod as dependency; statically linked

pkgname=python-tcod
pkgver=13.5.0
pkgrel=1
pkgdesc='High-performance Python port of libtcod'
arch=('x86_64')
url='https://github.com/libtcod/python-tcod'
license=('BSD')
depends=('python-cffi' 'python-numpy' 'python-typing_extensions' 'sdl2')
makedepends=(
	'git' 'python-setuptools' 'python-build' 'python-install' 'python-wheel'
	'python-pytest-runner' 'python-pycparser' 'python-pcpp' 'python-sphinx')
changelog=CHANGELOG.md
source=(
	"$pkgname::git+$url#tag=$pkgver?signed"
	'libtcod::git+https://github.com/libtcod/libtcod#tag=1.20.1?signed')
sha256sums=('SKIP'
            'SKIP')
validpgpkeys=('9EF1E80F3817BC043097A7C15814977902B194CC') # Kyle Benesch @ GitHub

prepare() {
	cd "$pkgname"
	git submodule init
	git config submodule.libtcod.url "$srcdir/libtcod"
	git submodule update
}

build() {
	cd "$pkgname"
	python -m build --wheel --skip-dependency-check --no-isolation
	cd docs
	make man
}

# check() {
# 	cd "$pkgname-$pkgver"
# 	local _ver="$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')"
# 	PYTHONPATH="$PWD/build/lib.linux-$CARCH-$_ver" python setup.py pytest
# }

package() {
	export PYTHONHASHSEED=0
	cd "$pkgname"
	python -m install --optimize=1 --destdir="$pkgdir/" dist/*.whl
	install -Dm644 LICENSE.txt -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 docs/_build/man/python-tcod.1 -t "$pkgdir/usr/share/man/man1/"
}
