# Maintainer: Genesis <tofupedia.fr@gmail.com>

pkgname=ankama-launcher
pkgver=2.11.11
pkgrel=1
pkgdesc='A multi-game portal for all Ankama games.'
url='https://www.ankama.com/en/launcher'

arch=('i686' 'x86_64')
license=('custom:Ankama License')
install='ankama-launcher.install'
depends=('zlib' 'bash')
makedepends=('p7zip')
optdepends=('wine: to play Dofus'
            'java-environment: to play Wakfu')
options=('!strip')
source=('ankama-launcher')
source_i686=("${pkgname}-${pkgver}-i686.AppImage::https://launcher.cdn.ankama.com/installers/production/Ankama%20Launcher-Setup-i386.AppImage")
source_x86_64=("${pkgname}-${pkgver}-x86_64.AppImage::https://launcher.cdn.ankama.com/installers/production/Ankama%20Launcher-Setup-x86_64.AppImage")
md5sums=('e6a225e04a4a4105059af02873cf65a5')
md5sums_i686=('2709fa6949a9a29111ff0c2bf7d9640c')
md5sums_x86_64=('afd2b29f92833064036e7d5943fa575d')

prepare() {
    cd "${srcdir}"
    mv "${pkgname}-${pkgver}-${CARCH}.AppImage" "ankama-launcher.AppImage"
    7z e "${srcdir}/ankama-launcher.AppImage" "zaap.desktop"
    7z e "${srcdir}/ankama-launcher.AppImage" "usr/share/icons/hicolor/128x128/apps/zaap.png"

    mv "zaap.desktop" "ankama-launcher.desktop"
    mv "zaap.png" "ankama-launcher.png"

    sed -i "s/^Exec=AppRun$/Exec=${pkgname}/" "ankama-launcher.desktop"
    sed -i "s/^Icon=zaap$/Icon=ankama-launcher/" "ankama-launcher.desktop"
}

package() {
    install -dm775 -ggames "${pkgdir}/opt/ankama-launcher"
    install -Dm775 -ggames "ankama-launcher.AppImage" "${pkgdir}/opt/ankama-launcher/ankama-launcher.AppImage"
    install -Dm755 "ankama-launcher"                  "${pkgdir}/usr/bin/ankama-launcher"
    install -Dm644 "ankama-launcher.desktop"          "${pkgdir}/usr/share/applications/ankama-launcher.desktop"
    install -Dm644 "ankama-launcher.png"              "${pkgdir}/usr/share/pixmaps/ankama-launcher.png"
}
