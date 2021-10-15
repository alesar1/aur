# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=qt5-jpegxl-image-plugin
pkgver=0.3.1
pkgrel=1
pkgdesc='Qt5 plug-in to allow Qt5 and KDE based applications to read/write JXL images'
arch=('x86_64')
url='https://github.com/novomesk/qt-jpegxl-image-plugin/'
license=('GPL3')
depends=('libjxl' 'qt5-base')
makedepends=('cmake' 'extra-cmake-modules' 'highway')
checkdepends=('appstream')
source=("https://github.com/novomesk/qt-jpegxl-image-plugin/archive/v${pkgver}/qt-jpegxl-image-plugin-${pkgver}.tar.gz"
        'jpegxlthumbnail.desktop')
sha256sums=('ec717701f0dc73ad299e4ecc9146a8022548d0a823d1501be10f143fbb8949c6'
            'd57870099934ebd6fddfc38ca8c6420e891f072e7a3c1779496cc1ad75039315')

build() {
    cmake -B build -S "qt-jpegxl-image-plugin-${pkgver}" \
        -DCMAKE_BUILD_TYPE:STRING='None' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -Wno-dev
    make -C build
}

check() {
    make -C build test
}

package() {
    make -C build DESTDIR="$pkgdir" install
    install -D -m644 jpegxlthumbnail.desktop -t "${pkgdir}/usr/share/kservices5"
}
