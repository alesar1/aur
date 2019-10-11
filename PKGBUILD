# Maintainer: Genesis <tofupedia.fr@gmail.com>

# To disable the popup asking for system integration at each startup :
# `touch $HOME/.local/share/appimagekit/no_desktopintegration`

pkgname=ankama-launcher
pkgver=2.10.15
pkgrel=1
pkgdesc='A multi-game portal for all Ankama games.'
url='https://www.ankama.com/en/launcher'

arch=('i686' 'x86_64')
license=('custom:Ankama License')
depends=('zlib')
optdepends=('wine: to play Dofus'
            'java-environment: to play Wakfu')
options=('!strip')
source=('ankama-launcher.desktop.patch')
source_i686=("${pkgname}-${pkgver}-i386.AppImage::https://ankama.akamaized.net/zaap/installers/production/Ankama%20Launcher-Setup-i386.AppImage")
source_x86_64=("${pkgname}-${pkgver}-x86_64.AppImage::https://ankama.akamaized.net/zaap/installers/production/Ankama%20Launcher-Setup-x86_64.AppImage")
md5sums=('7a78ebe882f8044746b83e1adf827640')
md5sums_i686=('0d883e0a3d7f71cada26624d8a1efee1')
md5sums_x86_64=('e0053f3366db89d50e273cf12b63b7b0')

[[ "$CARCH" == "i686" ]] && LARCH='i386'
[[ "$CARCH" == "x86_64" ]] && LARCH='x86_64'

prepare() {
    cd "${srcdir}"
    mv "${pkgname}-${pkgver}-${LARCH}.AppImage" "ankama-launcher.AppImage"
    7z e "${srcdir}/ankama-launcher.AppImage" "zaap.desktop"
    7z e "${srcdir}/ankama-launcher.AppImage" "usr/share/icons/hicolor/128x128/apps/zaap.png"

    mv "zaap.desktop" "ankama-launcher.desktop"
    mv "zaap.png" "ankama-launcher.png"

    patch -Np0 <../ankama-launcher.desktop.patch
}

package() {
    install -Dm755 "ankama-launcher.AppImage" "${pkgdir}/opt/appimages/ankama-launcher.AppImage"
    install -Dm644 "ankama-launcher.desktop"  "${pkgdir}/usr/share/applications/ankama-launcher.desktop"
    install -Dm644 "ankama-launcher.png"      "${pkgdir}/usr/share/pixmaps/ankama-launcher.png"
}
