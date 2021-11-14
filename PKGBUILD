pkgname=icalingua
pkgver=2.4.1
pkgrel=1
pkgdesc='A Linux client for QQ and more'
license=('GPL')
depends=('ffmpeg' 'electron' 'libappindicator-gtk3')
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
sha256sums=('84c8585e8c18504ed83b0d199831b55b9f8f0eb0a5aa4cb9e3dc01b4a17d0e38'
            '43da1c99b7a6aee974c20da3bcf925b660dff4ba44a447c86066c84c8bc95fbd'
            'e56bfefdb9eb5365075e9b267d0aa33d6412ace99f4f21560c77ab1f1c5b501e')
sha256sums_aarch64=('ab9a05c64976c5e1527598cd4ac7adb32a5a1c0ae05e264a2cb1b405a491686c')
sha256sums_x86_64=('b9c252410e4fb2d93768cb40f8e5648210ed8d880995f53244660c0b2a7e2519')
sha256sums_i686=('d8854163790bb2370402c9ffd2d14f885fb1c51664c57ec2be83f3d5127d5e6b')
