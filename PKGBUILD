# Maintainer: Colin Unger <mastakata 3 at yahoo dot com>

pkgname=python-claripy-git
pkgdesc="An abstraction layer for constraint solvers."
url="https://github.com/angr/claripy"
pkgver=8.19.2.4.r734.050ffe4
pkgrel=1
arch=('any')
depends=('python' 'python-cachetools' 'python-future' 'python-z3-solver-angr')
makedepends=('git' 'python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
license=('BSD')
source=("$pkgname::git+https://github.com/angr/claripy.git#branch=master")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"

	regex='[0-9]\+\.[0-9]\+\.[0-9]\+\.[0-9]\+'
	prefix='ticked version number to'
	rev_num="$(git rev-list --count HEAD)"
	version_no="$(git log -n1 --grep "$prefix $regex" --format=tformat:%s | sed "s/$prefix \($regex\)/\1/g")"
	last_commit="$(git rev-parse --short HEAD)"
	echo "$version_no.r$rev_num.$last_commit"
}

build() {
	cd "$srcdir/$pkgname"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
