# Maintainer: Ivan Shapovalov <intelfx100@gmail.com>

pkgbase=python-canonicaljson
pkgname=($pkgbase python2-canonicaljson)
pkgver=1.0.0
pkgrel=1
pkgdesc='Canonical JSON'
license=('Apache')
arch=('i686' 'x86_64')
url='https://pypi.python.org/pypi/canonicaljson/'
makedepends=('python-setuptools' 'python2-setuptools')
source=("${pkgbase}-${pkgver}.tar.gz::https://github.com/matrix-org/python-canonicaljson/archive/v${pkgver}.tar.gz")
md5sums=('9bfe11414b3818908bc0be7dbf3cf76c')

prepare() {
	cp -a "python-canonicaljson-${pkgver}"{,-python2}
}

build() {
	cd "$srcdir/python-canonicaljson-${pkgver}"
	python setup.py build

	cd "$srcdir/python-canonicaljson-${pkgver}-python2"
	python2 setup.py build
}

package_python-canonicaljson() {
	depends=('python')

	cd "python-canonicaljson-${pkgver}"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

package_python2-canonicaljson() {
	depends=('python2')

	cd "python-canonicaljson-${pkgver}-python2"
	python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

# vim: set ts=4 sw=4 tw=0 ft=sh :
