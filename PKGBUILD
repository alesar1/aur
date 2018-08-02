# Maintainer: Nemo <archlinux at captnemo dot in>
# Based on upwork-appimage package on the AUR
# 
# There's no central repository for AppImages, and no convention on
# system-wide AppImage installations, so we're picking /opt/appimages.
# We grab koreader.png and koreader.desktop from the AppImage, patch the koreader.desktop,
# and install them as we would other apps, for convenience sake.
pkgname=koreader-appimage
pkgver=2018.07.29.beta
pkgrel=1

pkgdesc="An ebook reader application supporting PDF, DjVu, EPUB, FB2 and many more formats"
arch=('x86_64')
depends=('zlib')
url="http://koreader.rocks/"
license=('AGPL3')
_filename='koreader-appimage-x86_64-linux-gnu-v2015.11-1800-g0924b57_2018-07-29.AppImage'
noextract=("$_filename")
options=('!strip')
install=${pkgname}.install
source=("https://github.com/koreader/koreader/releases/download/v2018.07.29-beta/$_filename")
sha256sums=('796348d3742d05fe4955c10f398a75bc5534056407b87544ca4d60cce39feca7')


prepare() {
    cd "${srcdir}"
    mv "$_filename" "koreader.AppImage"
    7z x "${srcdir}/koreader.AppImage" koreader.png
    7z x "${srcdir}/koreader.AppImage" koreader.desktop
    mkdir -p usr/share/pixmaps
    mkdir -p usr/share/applications
    mkdir -p opt/appimages
    mv koreader.png usr/share/pixmaps
    patch -Np0 <../koreader.patch
    mv koreader.desktop usr/share/applications
    cp koreader.AppImage opt/appimages/
}

package() {
    cd "${srcdir}"
    cp -rp usr "${pkgdir}/usr"
    cp -rp opt "${pkgdir}/opt"
    chmod +x "${pkgdir}/opt/appimages/koreader.AppImage"
}