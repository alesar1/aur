# Maintainer: Quentin Bourgeois <quentin+archlinux@bourgeois.eu>

pkgname=moolticute
pkgver=0.12.7
pkgrel=1
pkgdesc="Easy companion for Mooltipass device"
arch=('x86_64' 'i686')
url="https://github.com/mooltipass/${pkgname}"
license=('GPL3')

depends=('libusb'
         'mooltipass-udev'
         'qt5-base'
         'qt5-websockets'
         'hicolor-icon-theme')
makedepends=('make'
             'qt5-tools')

source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('dacf1e4d63cb6ef62a298941a9f05e493ac3587f761327d4e1581281cafc56f6')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    sed -i "s/#define APP_VERSION \"git\"/#define APP_VERSION \"${pkgver}\"/" ./src/version.h
}

build() {
    cd "${pkgname}-${pkgver}"

    mkdir build
    cd build/

    qmake-qt5 ../Moolticute.pro                     \
              PREFIX=/usr                           \
              QMAKE_CFLAGS_RELEASE="${CFLAGS}"      \
              QMAKE_CXXFLAGS_RELEASE="${CXXFLAGS}"

    make
}

package() {
    cd "${pkgname}-${pkgver}/build/"

    make INSTALL_ROOT="${pkgdir}/" install
}
