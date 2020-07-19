# Maintainer: Sam L. Yes <manjaroyes123@outlook.com>
pkgname=nextplayer-appimage
pkgver=1.7.2
pkgrel=1
pkgdesc="A blue-ray player for MacOS, Linux and FreeBSD, originally named TheNewPlayerFree."
arch=("x86_64")
url="https://sudormroot.github.io/nextplayer-project/"
license=("custom")
depends=('zlib' 'hicolor-icon-theme')
options=(!strip)
_pkgname="nextplayer-${pkgver}.AppImage"
provides=('nextplayer')
replaces=('thenewplayerfree-appimage' 'thenewplayerfree-bin')
source=("https://github.com/SamLukeYes/nextplayer-appimage/releases/download/v1.7.2/nextplayer-1.7.2.AppImage")
noextract=(${_pkgname})
md5sums=('462d4654cb7875be8b1d98037c45708d')
_icon='/usr/share/icons/hicolor/256x256/apps/nextplayer.png'
_launcher='/usr/share/applications/nextplayer.desktop'

prepare() {
    cd ${srcdir}
    chmod +x ${_pkgname}
    ./${_pkgname} --appimage-extract
}

package() {
    install -Dm755 ${_pkgname} "${pkgdir}/usr/bin/nextplayer"
    install -Dm644 "squashfs-root/${_launcher}" "${pkgdir}/${_launcher}"
    install -Dm644 "squashfs-root/opt/nextplayer/share/licenses/self/LICENSE" ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    install -Dm644 "squashfs-root/${_icon}" "${pkgdir}/${_icon}"
}
