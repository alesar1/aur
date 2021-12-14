# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Maintainer: renek <aur@spaceshore.net>

_pyname=orderedset
pkgname=python-$_pyname
pkgver=2.0.3
pkgrel=2
pkgdesc='An ordered set implementation in cython'
arch=(x86_64)
url=https://github.com/simonpercivall/$_pyname
license=(BSD)
depends=(python)
makedepends=(cython
             python-setuptools)
_archive="$_pyname-$pkgver"
source=("https://files.pythonhosted.org/packages/source/${_pyname::1}/$_pyname/$_archive.tar.gz")
sha256sums=('b2f5ccfb5a86e7b3b3ddf18b29779cc18b24653abf9d6da4bebecf33780a6e29')

build() {
	cd "$_archive"
	python setup.py build
}

check() {
	cd "$_archive"
	python setup.py test
}

package() {
	cd "$_archive"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
