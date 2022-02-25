# Maintainer: Ben Westover <kwestover.kw@gmail.com>

pkgname=python-clvm
pkgver=0.9.7
pkgrel=3
pkgdesc="Chia Lisp Virtual Machine"
url='https://github.com/Chia-Network/clvm'
arch=('any')
license=('Apache')
depends=('python-blspy')
makedepends=(
	'git'
	'python-build'
	'python-installer'
	'python-setuptools-scm'
	'python-wheel')
source=("$pkgname::git+$url#tag=$pkgver")
sha256sums=('SKIP')

build() {
	cd "$pkgname"
	python -m build --wheel --no-isolation
}

package() {
	export PYTHONHASHSEED=0
	cd "$pkgname"
	python -m installer --destdir="$pkgdir/" dist/*.whl
}
