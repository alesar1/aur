# Maintainer: Lev Lybin <lev.lybin@gmail.com>
# Contributor: ajs124 < ajs ÄT online DÖT de >

pkgname=ocztoolbox
pkgver=4.9.0.634
pkgrel=1
pkgdesc="The OCZ Toolbox is designed to update firmware and BIOS, secure erase, view SMART attributes, and view drive details of your OCZ SSD with the click of a button."
arch=('i686' 'x86_64')
url="http://ocz.com/consumer/download/firmware"
license=('custom:OCZ EULA')
depends=('libxrender' 'fontconfig' 'libxext')
source=(http://ocz.com/consumer/download/firmware/OCZToolbox_v${pkgver}_linux.tar.gz
    ocztoolbox.desktop
    ocztoolbox.png
    LICENSE)
sha256sums=('7ef447dd08706d3065c522787f287e702b29ff9f9de4e07baf5ac0f456b9a140'
    'ee33736dd89666e79be14c04fd6ed16c3dd1c4c8550b032a5e737eef7c45cfe4'
    'a5bab72e67578ceabf29e081063b00b1e1c3c2b9419fcbf888f3c24e65cf1035'
    '499875ee918c6163fefcb1056e2c179945f923a59c8093530bd12f7088a6c8a8')

package() {
    if [ "$CARCH" = "x86_64" ]; then
        _source_arch="64"
    else
        _source_arch="32"
    fi

    install -Dm755 "OCZToolbox_v${pkgver}_linux/linux${_source_arch}/OCZToolbox" "${pkgdir}/usr/bin/ocztoolbox"
    install -Dm644 ocztoolbox.desktop "${pkgdir}/usr/share/applications/ocztoolbox.desktop"
    install -Dm644 ocztoolbox.png "${pkgdir}/usr/share/pixmaps/ocztoolbox.png"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
