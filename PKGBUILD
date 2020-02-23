# Maintainer: Ivan Shapovalov <intelfx@intelfx.name>

_pkgname=pyfuse3
pkgbase=python-pyfuse3
pkgname=(python-pyfuse3)
pkgver=2.0.0
pkgrel=1
arch=('x86_64')
pkgdesc="Python 3 bindings for libfuse 3 with asynchronous API (Trio compatible)"
url="https://github.com/libfuse/pyfuse3"
license=('LGPL')
depends=('python' 'python-trio' 'fuse3')
makedepends=('python-setuptools')
source=("$_pkgname-$pkgver.tar.gz::https://files.pythonhosted.org/packages/source/p/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('80807ed1d0d4267c1cfd43749e8fb321fd779507722483245e6177cc69b9f1e2')

build() {
	cd pyfuse3-$pkgver
	python setup.py build
}

package_python-pyfuse3() {
	cd pyfuse3-$pkgver
	python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
}
