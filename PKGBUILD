# Maintainer: vvxxp8 <concatenate[g] the characters[x] in square[b] brackets[1] in[5] order[3] at gmail dot com>

pkgname=listen1-desktop-appimage
pkgver=2.19.0
pkgrel=1
pkgdesc="One for all free music in China"
arch=("x86_64")
url="https://listen1.github.io/listen1"
license=("MIT")
_pkgname="listen1_${pkgver}_linux_${arch}.AppImage"
noextract=(${_pkgname})
options=("!strip")
provides=("listen1")
conflicts=("listen1")
source=("https://github.com/listen1/listen1_desktop/releases/download/v${pkgver}/${_pkgname}")
sha512sums=("9d257a800ab6d61710ce2b525d8b066930336e16b87e1905ecac6e734c1c89307caf531f0606f6424a6c6c7dba83e23803d9add26ab3f13ee9e0deedb2aaa3a0")

_installdir=/opt/appimages
_installname=listen1

prepare() {
    cd ${srcdir}
    chmod a+x ${_pkgname}
    ${srcdir}/${_pkgname} --appimage-extract
    sed -i "s+AppRun+env DESKTOPINTEGRATION=no ${_installdir}/${_installname}.AppImage+" "squashfs-root/listen1.desktop"
    sed -i "s/[[:space:]]%U$//" "squashfs-root/listen1.desktop"
    find "squashfs-root/usr/share/icons/hicolor" -type d -exec chmod 755 {} \;
}

package() {
    install -dm755 "${pkgdir}/usr/share/icons"
    install -Dm755 ${_pkgname} "${pkgdir}/${_installdir}/${_installname}.AppImage"
    install -Dm644 "squashfs-root/listen1.desktop" "${pkgdir}/usr/share/applications/${_installname}.desktop"
    cp -R "squashfs-root/usr/share/icons/hicolor" "${pkgdir}/usr/share/icons"
}
