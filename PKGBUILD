# Maintainer:  JakobDev<jakobdev at gmx dot de>

pkgname=cubiomes-viewer
pkgver=2.1.1
pkgrel=1
pkgdesc="An efficient graphical Minecraft seed finder and map viewer"
arch=("x86_64")
url="https://github.com/Cubitect/cubiomes-viewer"
license=('GPL3')
depends=("qt5-base")
makedepends=("gendesk")
source=("https://github.com/Cubitect/cubiomes-viewer/releases/download/${pkgver}/cubiomes-viewer-${pkgver}-src.tar.gz")
sha256sums=("66ca0cfb3626d01c09abf3caeb54588d49c16008d26982a1392b86885fce5ab9")

build() {
    mkdir -p cubiomes-viewer/build
    cd cubiomes-viewer/build
    qmake CONFIG+=without_network ..
    make
}

package() {
    install -Dm755 "cubiomes-viewer/build/cubiomes-viewer" "${pkgdir}/usr/bin/cubiomes-viewer"
    install -Dm644 "cubiomes-viewer/rc/icons/map.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
    gendesk -f -n --pkgname "${pkgname}" \
        --pkgdesc "$pkgdesc" \
        --name "Cubiomes Viewer" \
        --comment "$pkgdesc" \
        --exec "cubiomes-viewer" \
        --categories "Game"  \
        --icon "${pkgname}"
    install -Dm644 "${pkgname}.desktop" -t "${pkgdir}/usr/share/applications"
    install -Dm644 "cubiomes-viewer/LICENSE" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}
