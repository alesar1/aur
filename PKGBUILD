# Maintainer: Alisson Lauffer <alissonvitortc@gmail.com>
pkgname=bluemail-bin
pkgver=1.0.29
pkgrel=2
pkgdesc="BlueMail is a free, secure, universal email app, capable of managing an unlimited number of mail accounts"
arch=('x86_64')
url="https://www.bluemail.me"
license=('custom')
provides=('bluemail')

depends=()
optdepends=('libnotify: Desktop notifications')
makedepends=('squashfs-tools' 'imagemagick')

source=("${pkgname}-${pkgver}.snap::https://api.snapcraft.io/api/v1/snaps/download/ZVlj0qw0GOFd5JgTfL8kk2Y5eIG1IpiH_7.snap")

sha512sums=('0dbad6d57747ec590ce84f8cd795517122140b0248ef6bd6c62c38f30e3b160be2c3ad96b502ec8a4fb139b8031275ff63d304baafaae4aa95aaa8567d0ec40c')

package() {
    mkdir -p "${pkgdir}/opt"
    mkdir -p "${pkgdir}/usr/bin"

    unsquashfs -f -d "${pkgdir}/opt/bluemail" "${pkgname}-${pkgver}.snap"

    chmod 755 "${pkgdir}/opt/bluemail"
    ln -sf /opt/bluemail/bluemail "${pkgdir}/usr/bin/bluemail"

    # Fix and install desktop icons
    for size in 22 24 32 48 64 128 256 512; do
        mkdir -p "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps"
        convert "${pkgdir}/opt/bluemail/meta/gui/icon.png" -resize "${size}x${size}" \
            "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/bluemail.png"
    done

    sed -ri 's/(Icon=).+/\1bluemail/' "${pkgdir}/opt/bluemail/meta/gui/bluemail.desktop"
    install -Dm644 "${pkgdir}/opt/bluemail/meta/gui/bluemail.desktop" "${pkgdir}/usr/share/applications/bluemail.desktop"

    # Cleanup snap vendor files
    rm -rf "${pkgdir}/opt/bluemail/bin"
    rm -rf "${pkgdir}/opt/bluemail/etc"
    rm -rf "${pkgdir}/opt/bluemail/lib"
    rm -rf "${pkgdir}/opt/bluemail/meta"
    rm -rf "${pkgdir}/opt/bluemail/usr"
    rm -rf "${pkgdir}/opt/bluemail/var"
}
