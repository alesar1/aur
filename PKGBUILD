# Maintainer: taotieren <admin@taotieren.com>

pkgname=appimage-installer-bin
pkgver=2.0
pkgrel=2
pkgdesc="AppImage install tool."
arch=('x86_64')
url="https://gitee.com/deepin-opensource/appimage-installer"
license=('GPLv3')
_pkgname=${pkgname%-bin}
provides=(${pkgname} ${_pkgname})
conflicts=(${pkgname} ${_pkgname})
#replaces=(${pkgname})
depends=('dtkwidget' 'dtkgui' 'dtkcore' 'dtkcommon')
makedepends=()
backup=()
options=('!strip')
# install=${pkgname}.install
source=("${_pkgname}_${pkgver}-beta_amd64.deb::https://gitee.com/deepin-opensource/appimage-installer/attach_files/774786/download/appimage-installer_2.0-beta_amd64.deb")
sha256sums=('155f4795c0489a662546884e1f91204622c90796165795bb83744f4152f0e0e7')

package() {
    tar xf ${srcdir}/data.tar.xz -C ${pkgdir}
    install -dm0755 "${pkgdir}/usr/bin" \
                    "${pkgdir}/usr/share/applications" \
                    "${pkgdir}/usr/share/icons/hicolor/scalable/apps"

    ln -sf "/opt/apps/com.appimage-installer/files/appimage-installer" "${pkgdir}/usr/bin/appimage-installer"
    ln -sf "/opt/apps/com.appimage-installer/entries/applications/com.appimage-installer.desktop" "${pkgdir}/usr/share/applications/com.appimage-installer.desktop"
    ln -sf "/opt/apps/com.appimage-installer/entries/icons/hicolor/scalable/apps/appimage-installer.svg" "${pkgdir}/usr/share/icons/hicolor/scalable/apps/appimage-installer.svg"
}
