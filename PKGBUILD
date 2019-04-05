# Maintainer: aps42 <arch@andre-sterba.de>
pkgname=mqtt-explorer-appimage
pkgver=0.2.3
pkgrel=1
pkgdesc='Explore your message queues.'
arch=('x86_64')
url='https://github.com/thomasnordquist/MQTT-Explorer'
license=('AGPL')
provides=('mqtt-explorer')
conflicts=('mqtt-explorer')
depends=('fuse')
options=(!strip)
_appimage="MQTT-Explorer.AppImage"
source=(
    "MQTT-Explorer.AppImage::https://github.com/thomasnordquist/MQTT-Explorer/releases/download/v${pkgver}/MQTT-Explorer-${pkgver}-x86_64.AppImage"
    "mqtt-explorer.desktop"
    "mqtt-explorer.png"
    )
noextract=("${_appimage}")
sha256sums=(
    '402236d837f7190ddc87ce0084f451548f16c857fc7ca55fe2c17e250bf9e6c3'
    'SKIP'
    'SKIP'
    )

package() {
    install -Dm755 $_appimage "$pkgdir"/usr/bin/mqtt-explorer
    chmod +x "${pkgdir}/usr/bin/mqtt-explorer"

    install -Dm644 "mqtt-explorer.desktop"                    "${pkgdir}/usr/share/applications/mqtt-explorer.desktop"
    install -Dm644 "mqtt-explorer.png"                        "${pkgdir}/usr/share/icons/hicolor/128x128/apps/mqtt-explorer.png" 
}
