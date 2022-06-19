# Maintainer: bpozdena <https://github.com/bpozdena>

pkgname=onedrivegui-git
pkgver=0.2.0.r0.g1cb36f1
pkgrel=1
pkgdesc="A simple GUI for OneDrive Linux client, with multi-account support."
license=("GPL")
depends=("pyside6" "python-requests" "onedrive-abraunegg" "qt6-webengine")
makedepends=("git")
conflicts=("onedrivegui")
provides=("onedrivegui")
arch=("any")
url="https://github.com/bpozdena/OneDriveGUI"
source=("git+${url}" "onedrivegui.desktop")
sha256sums=('SKIP'
            'c531f57c3c8424f265c0aad2e93260eab071d066d75de2f7eebb47e41c644267')

pkgver(){
    cd "${srcdir}/OneDriveGUI"
    git describe --tags --long | sed 's/v//;s/-/.r/;s/-/./g'
}
package(){
    cd "${srcdir}/OneDriveGUI"
    mkdir -p "${pkgdir}/usr/lib/OneDriveGUI"
    mkdir -p "${pkgdir}/usr/bin"
    cp -r src/{resources,ui} "${pkgdir}/usr/lib/OneDriveGUI"
    install -Dm644 src/resources/images/OneDriveGUI.png "${pkgdir}/usr/share/icons/hicolor/48x48/apps/OneDriveGUI.png"
    install -Dm644 "${srcdir}/onedrivegui.desktop" "${pkgdir}/usr/share/applications/onedrivegui.desktop"
    install -Dm755 src/OneDriveGUI.py "${pkgdir}/usr/lib/OneDriveGUI/OneDriveGUI.py"
    ln -sf /usr/lib/OneDriveGUI/OneDriveGUI.py "${pkgdir}/usr/bin/onedrivegui"
}
