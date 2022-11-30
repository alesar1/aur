# Maintainer: Morteza NourelahiAlamdari <m@0t1.me>

pkgname="python-spectree"
_pkgname="spectree"
pkgver=1.0.3
pkgrel=1
pkgdesc="API spec validator and OpenAPI document generator for Python web frameworks."
arch=("any")
url="https://github.com/0b01001001/spectree"
source=("https://github.com/0b01001001/${_pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
sha256sums=('083f6b56be8b89c2c8359ea5d1d868800012e589f693c0902fec274805cfe139')
license=("Apache-2.0")
depends=("python")
makedepends=("python-setuptools")

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
