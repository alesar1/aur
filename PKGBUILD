# Maintainer: Kaan Gültekin <kaangultekin01[at]gmail[dot]com>

pkgname=python-autopwn-suite
_pyname=autopwn-suite
pkgver=2.1.2
pkgrel=1
pkgdesc="AutoPWN Suite is a project for scanning vulnerabilities and exploiting systems automatically."
url="https://auto.pwnspot.com"
arch=("any")
depends=("python" "python-requests" "python-rich" "python-nmap" "python-bs4" "python-distro")
makedepends=("python-setuptools")
license=("EULA")
source=("${_pyname}-${pkgver}.tar.gz::https://files.pythonhosted.org/packages/source/a/${_pyname}/${_pyname}-${pkgver}.tar.gz")
sha512sums=('SKIP')

package() {
	cd "${srcdir}/${_pyname}-${pkgver}"
	python setup.py install -O1 --root="${pkgdir}"
	install -Dm 644 README.md "${pkgdir}/usr/share/licenses/${pkgname}/README"
}
