# Maintainer: MithicSpirit <rpc01234 at gmail dot com>

pkgname=python-pbar
pkgver=1.11.1
pkgrel=1
pkgdesc="A Python library to display customizable progress bars on the terminal easily."
arch=(any)
url="https://github.com/DarviL82/PBar"
license=('MIT')
depends=('python>=3.9')
makedepends=('python-setuptools')
_pypi_name=PBar2
source=("https://files.pythonhosted.org/packages/source/${_pypi_name::1}/$_pypi_name/$_pypi_name-$pkgver.tar.gz")
sha256sums=('c19c7e3323b1b975c7ad27b8c62839c7298d9bafb72383334b81a5e95468d5e4')

build() {
	cd "$_pypi_name-$pkgver"
	python setup.py build
}

package() {
	cd "$_pypi_name-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1
}
