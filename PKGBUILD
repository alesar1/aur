# Maintainer: Philip Goto <philip.goto@gmail.com>
# Contributor: Chris Brendel <cdbrendel@gmail.com>

_pkgname=thinc
pkgname=python-${_pkgname}
pkgver=8.0.5
pkgrel=1
pkgdesc='Practical Machine Learning for NLP'
arch=(x86_64 aarch64)
url='https://github.com/explosion/thinc'
license=(MIT)
depends=(
	python-blis
	python-catalogue
	python-cymem
	python-hypothesis
	python-mock
	python-murmurhash
	python-numpy
	python-pathlib
	python-plac
	python-preshed
	python-pydantic
	python-six
	python-srsly
	python-tqdm
	python-wasabi
)
makedepends=(python-setuptools cython)
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('f23ace11ba990bb03c8f9667f1f8fb387d1ef9d41e803542e54c5bb209274cc4')

build() {
	cd "thinc-${pkgver}"
	python setup.py build
}

package() {
	cd "thinc-${pkgver}"
	python setup.py install --skip-build --root="${pkgdir}" --optimize=1
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"    
}
