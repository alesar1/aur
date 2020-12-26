# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname="python-reorder-python-imports"
_pkgname="reorder_python_imports"
pkgver=2.3.6
pkgrel=1
pkgdesc="Automatically reorder python imports."
arch=('any')
url="https://github.com/asottile/${_pkgname}"
license=('MIT')
depends=('python-aspy-refactor-imports')
source=("https://github.com/asottile/$_pkgname/archive/v$pkgver.tar.gz")
md5sums=('b4dcfe3114e23423ab93d5f4026328a1')

build() {
    cd "${_pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1

    install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
