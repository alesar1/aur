# Maintainer: Alisson Lauffer <alissonvitortc@gmail.com>
pkgname=bluemail
pkgver=1.1.29
pkgrel=1
pkgdesc="BlueMail is a free, secure, universal email app, capable of managing an unlimited number of mail accounts"
arch=('x86_64')
url="https://www.bluemail.me"
license=('custom')
conflicts=('bluemail-bin')
provides=('bluemail')

depends=('libglvnd')
optdepends=('libnotify: Desktop notifications')
makedepends=('squashfs-tools' 'imagemagick')

source=('LICENSE'
        "${pkgname}-${pkgver}.snap::https://api.snapcraft.io/api/v1/snaps/download/ZVlj0qw0GOFd5JgTfL8kk2Y5eIG1IpiH_35.snap")

sha512sums=('546994dbf25972659db6130402926020fdfc763b3f41580d812aeb785824218bae1204babe99af51ad91fd758ad0e7f4d0636a00e9130ce13fc6ebb90540e9dc'
            '4eec23c0743d8713e70efcdb44f7f6ad0df154472ee7aec4efb385a9b724a3f7a03b3e0db982971c667cc49e1e08ea0b025f1d76f96f1b1609d0ee273f138558')

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

    # Cleanup snap vendor files and useless files
    rm -r "${pkgdir}/opt/bluemail/lib"
    rm -r "${pkgdir}/opt/bluemail/meta"
    rm -r "${pkgdir}/opt/bluemail/usr"
    rm ${pkgdir}/opt/bluemail/*.sh
    rm ${pkgdir}/opt/bluemail/libEGL.so
    rm ${pkgdir}/opt/bluemail/libGLESv2.so
}
