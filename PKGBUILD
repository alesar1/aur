# Maintainer: Andrej Radović <r.andrej@gmail.com>
pkgname=python-sqlparse-cli_helpers
_name='sqlparse'
pkgver=0.2.4
pkgrel=1
pkgdesc="Non-validating SQL parser for Python; version compatible with litecli, mycli, ..."
url="https://github.com/andialbrecht/sqlparse"
provides=('python-sqlparse')
conflicts=('python-sqlparse')
depends=('python')
makedepends=('python-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('ce028444cfab83be538752a2ffdb56bc417b7784ff35bb9a3062413717807dec')

build() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$_name-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1
}
