# Maintainer of this PKGBUILD file: Martino Pilia <martino.pilia@gmail.com>
_pkgname=etl
pkgname=etlcpp
pkgver=20.35.0
pkgrel=1
pkgdesc="Embedded Template Library"
arch=('x86_64')
url="https://www.etlcpp.com/"
license=('MIT')
makedepends=()
checkdepends=()
source=("https://github.com/ETLCPP/etl/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('1bfbc5679bce41625add0e5d7354ab8521dc4811f13e1627a9816af65f49f42b')

prepare() {
    :
}

build() {
    :
}

package() {
    mkdir -p "${pkgdir}/usr/include"
    cp -r "${_pkgname}-${pkgver}/include" "${pkgdir}/usr/."
    rm -rf "${pkgdir}/usr/include/etl/.vscode"

    install -D -m644 \
        "${srcdir}/${_pkgname}-${pkgver}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

}

