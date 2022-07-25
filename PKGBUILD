# Maintainer: snogard <snogardb at gmail dot com>

pkgname=r2modman-appimage
pkgver=3.1.31
pkgrel=1
pkgdesc='A simple and easy to use mod manager for several Unity games using Thunderstore.'
arch=('x86_64')
url=https://github.com/ebkr/r2modmanPlus
license=(MIT)

depends=(
    'hicolor-icon-theme'
    'zlib'
)

provides=(
    'r2modman'
)

source=(
    "${url}/releases/download/v${pkgver}/r2modman-${pkgver}.AppImage"
    "r2modman.desktop"
)
sha256sums=('5c4379a3e28765f5f6a5ee232c56abcc02eedca8173e41c580230ff39afd3225'
            'f0429cd7b16f8e12a6bff221f523a2bd124af2cfbb7e5f109a73ca43b4c8669b')
options=(!strip)

prepare() {
    sed -i "s/{pkgversion}/${pkgver}/" r2modman.desktop

    chmod +x r2modman-${pkgver}.AppImage
    ./r2modman-${pkgver}.AppImage --appimage-extract
}

package() {
    install -Dm755 r2modman-${pkgver}.AppImage ${pkgdir}/opt/r2modman/r2modman.AppImage

    install -dm755 ${pkgdir}/usr/bin
    ln -s /opt/r2modman/r2modman.AppImage ${pkgdir}/usr/bin/r2modman

    install -dm755 ${pkgdir}/usr/share/applications/
    cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
    cp --no-preserve=mode,ownership "./r2modman.desktop" "${pkgdir}/usr/share/applications/"
}
