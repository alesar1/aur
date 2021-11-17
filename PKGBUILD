pkgname=icalingua
pkgver=2.4.3
pkgrel=1
pkgdesc='A Linux client for QQ and more'
license=('GPL')
depends=('ffmpeg' 'electron13' 'libappindicator-gtk3')
optdepends=('mongodb-bin: Provides storage'
            'redis: Provides storage')
arch=('aarch64' 'x86_64' 'i686')
url="https://github.com/Icalingua/Icalingua"
provides=('electron-qq')
conflicts=('electron-qq')
replaces=('electron-qq')
source=(512x512.png
        ${pkgname}.desktop
        ${pkgname})
source_x86_64=("app-x86_64-${pkgver}.asar::https://github.com/Icalingua/Icalingua/releases/download/v${pkgver}/app-x86_64.asar")
source_aarch64=("app-aarch64-${pkgver}.asar::https://github.com/Icalingua/Icalingua/releases/download/v${pkgver}/app-arm64.asar")
source_i686=("app-i686-${pkgver}.asar::https://github.com/Icalingua/Icalingua/releases/download/v${pkgver}/app-ia32.asar")

package() {
    install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
    install -Dm644 "512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
    install -Dm644 "app-${CARCH}-${pkgver}.asar" "${pkgdir}/usr/share/${pkgname}/${pkgname}.asar"
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
    ln -s "/usr/bin/${pkgname}" "${pkgdir}/usr/bin/electron-qq"
}
sha256sums=('0ff9fa8951a66ffccc2d1a5cb637b2f68d43ba1689cdb0390b3b8ffc99c5252f'
            '43da1c99b7a6aee974c20da3bcf925b660dff4ba44a447c86066c84c8bc95fbd'
            '139cd2b15c08236aff65ce1d9b2652b9472e3659671b63e522980b0682f22993')
sha256sums_aarch64=('1351f9ad3b9aaacaa53e96ac0f4c931d8c525fff737650825ef19b28e79caa2e')
sha256sums_x86_64=('dfb4c8d29053ed4f6dba752d8a52f0fd60715af1a4e9b43feb58704715308aec')
sha256sums_i686=('78813954eccc207e607561097d640a7ef1ccdc06d1509a90b26ed1f97470d790')
