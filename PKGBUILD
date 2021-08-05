# Maintainer: Martin Rys <https://rys.pw/#contact_me>

pkgname=python-deezer-py
_reponame=deezer-py
pkgver=1.1.2
pkgrel=1
pkgdesc="A wrapper for all Deezer's APIs"
url="https://pypi.org/project/deezer-py/"
arch=(any)
license=('GPL3')
depends=('python')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${_reponame::1}/${_reponame}/${_reponame}-$pkgver.tar.gz")
sha256sums=('c643db2851942eae4e9f5df1bae57406a6f90134d7a271fa9823dfde6c30bfc0')

build() {
	cd "$srcdir/${_reponame}-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/${_reponame}-$pkgver"
	python setup.py install --root="$pkgdir"
}
