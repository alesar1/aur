# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>

pkgname=copyq-plugin-itemweb
_realname=CopyQ
pkgver=3.0.2
pkgrel=1
pkgdesc="Clipboard manager with searchable and editable history. Itemweb plugin."
url="https://github.com/hluk/CopyQ"
depends=('copyq' 'qt5-webkit')
makedepends=('cmake' 'qt5-tools' 'qt5-svg')
license=('GPL3')
arch=('i686' 'x86_64')
source=("https://github.com/hluk/${_realname}/archive/v${pkgver}.tar.gz")
md5sums=('f5b1466e33b0b4f3426fe14d0033db25')

build() {
    mkdir "${srcdir}/build"
    cd "${srcdir}/build"
    cmake \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DWITH_QT5=TRUE \
        "${srcdir}/${_realname}-${pkgver}"
    make itemweb
}

package() {
    cd "${srcdir}/build"
    install -Dm755 plugins/libitemweb.so "${pkgdir}/usr/lib/copyq/plugins/libitemweb.so"
}

# vim:set ts=4 sw=4 et:
