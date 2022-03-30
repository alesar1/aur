# Maintainer: Xeonacid <h.dwwwwww at gmail dot com>

pkgname=python-cle
_pkgname="${pkgname#*-}"
pkgver=9.1.12332
pkgrel=1
pkgdesc="CLE Loads Everything (at least, many binary formats!) and provides a pythonic interface to analyze what they are and what they would look like in memory."
arch=('any')
url="https://github.com/angr/cle"
license=('BSD')
depends=('python-pyelftools' 'python-cffi' 'python-pyvex' 'python-pefile' 'python-sortedcontainers')
optdepends=('python-minidump: minidump'
			'python-pyxbe: xbe'
			'python-arpy: ar')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('f3980dee9fdcd5c706733f125346fe82224e499dde7be2accbd2eecaa56d5332')

build() {
	cd "$_pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
