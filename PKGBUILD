# Maintainer: Philip Goto <philip.goto@gmail.com>
# Contributor: Caltlgin Stsodaat <contact@fossdaily.xyz>
# Contributor: Chris Brendel <cdbrendel@gmail.com>

_pkgname=catalogue
pkgname="python-${_pkgname}"
pkgver=2.0.4
pkgrel=1
pkgdesc='Super lightweight function registries for your library'
arch=('any')
url='https://github.com/explosion/catalogue'
license=('MIT')
depends=('python')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('9ed345d12855af315f1715583612b26b8621a2b0a2e3bef974dc5d712f7983aa')

build() {
	cd "${_pkgname}-${pkgver}"
	python setup.py build
}

package() {
	cd "${_pkgname}-${pkgver}"
	python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
	install -Dvm644 'README.md' -t "${pkgdir}/usr/share/doc/${pkgname}"
	install -Dvm644 'LICENSE' -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
