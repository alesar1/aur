# Maintainer: ValHue <vhuelamo at gmail dot com>s
#
# Contributor: ValHue <vhuelamo at gmail dot com>
#
_python="python2"
_name="qr-tools"
_ubuntur="0~30~ubuntu18.04.1"
pkgname="qtqr"
pkgver="1.4"
pkgrel="4"
pkgdesc="A Graphical interface QR Code generator and decoder."
url="https://launchpad.net/qr-tools"
arch=('i686' 'x86_64')
license=('GPL3')
depends=("${_python}" "${_python}-qrtools" "${_python}-pyqt5")
provides=("${pkgname}")
source=("https://launchpad.net/~${_name}-developers/+archive/ubuntu/${_name}-stable/+sourcefiles/${pkgname}/${pkgver}-${_ubuntur}/${pkgname}_${pkgver}-${_ubuntur}.tar.gz")
sha256sums=('d838265af90fe7c5b8908a1bf6995cbe913feac0076b60fbd5dcf039b84de9ca')

_qtqr_desktop="[Desktop Entry]
Name=QtQR
Comment=QtQR is a Qt based software that let's you generate QR Codes easily, scan an image file for QR Codes and decode them or use your webcam to scan a printed one.
Exec=qtqr
Icon=qtqr
Terminal=false
Type=Application
Categories=Graphics"

build() {
    cd "${pkgname}-${pkgver}"
    echo -e "$_qtqr_desktop" | tee "${pkgname}.desktop"
    sed -i 's/env python/env python2/' "${pkgname}.py"
}

package() {
    cd "${pkgname}-${pkgver}"
    install -d ${pkgdir}/usr/bin
    install -d ${pkgdir}/usr/share/${pkgname}/samples
    install -d ${pkgdir}/usr/share/applications
    install -d ${pkgdir}/usr/share/pixmaps
    install -d ${pkgdir}/usr/share/qt4/translations

    install -m 755 qtqr.py ${pkgdir}/usr/bin/qtqr
    install -m 644 samples/* ${pkgdir}/usr/share/${pkgname}/samples
    install -m 644 qtqr.desktop ${pkgdir}/usr/share/applications
    install -m 644 icon.png ${pkgdir}/usr/share/pixmaps/qtqr.png
    install -m 644 *.qm ${pkgdir}/usr/share/qt4/translations

    install -D -m644 LICENCE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=4 sw=2 ft=sh et:
