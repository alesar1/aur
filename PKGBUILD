# Maintainer: ventusliberum <dafeinayius@gmail.com>

pkgname=zy-player-appimage
_pkgname=zy-player
pkgver=1.2.1
pkgrel=1
pkgdesc="跨平台视频资源播放器, 简洁免费无广告"
arch=("x86_64")
url="http://zyplayer.fun/"
license=('MIT')
provides=('zy-player')
options=(!strip)
source=('zy-player.AppImage'::"https://github.com/Hunlongyu/ZY-Player/releases/download/v${pkgver}/ZY-Player-${pkgver}.AppImage"
        'zy-player.sh')
sha256sums=('3e5831a74613a2966e5e31d7bc976f880e7756c3a0b27057c6467bcfed0716cd'
            '3626ced8de95c110129ed9dff1f8ea34243b2430b0b91c737dd7d166658bc1f2')
noextract=('zy-player.AppImage')

prepare() {
    cd "${srcdir}"
    chmod +x ${_pkgname}.AppImage
    ./${_pkgname}.AppImage --appimage-extract
    sed -i "s,Exec=AppRun,Exec=/usr/bin/${_pkgname} %U,g" "squashfs-root/zy.desktop"
    sed -i "s,Icon=zy,Icon=zy-player,g" "squashfs-root/zy.desktop"
}

package() {
    install -Dm755 "${srcdir}/${_pkgname}.AppImage" "$pkgdir/opt/appimages/${_pkgname}.AppImage"
    install -Dm755 "${srcdir}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"
    install -Dm644 "${srcdir}/squashfs-root/zy.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
    install -Dm644 "${srcdir}/squashfs-root/zy.png" "${pkgdir}/usr/share/icons/${_pkgname}.png"
} 

