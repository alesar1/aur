# Maintainer: Alisson Lauffer <alissonvitortc@gmail.com>
# Contributor: TBK <aur at jjtc dot eu>

pkgname=bluemail
pkgver=1.1.83
pkgrel=1
pkgdesc="BlueMail is a free, secure, universal email app, capable of managing an unlimited number of mail accounts"
arch=('x86_64')
url="https://www.bluemail.me"
license=('custom')
conflicts=('bluemail-bin')
provides=('bluemail')

depends=('libnotify' 'libappindicator-gtk3' 'libxtst' 'nss' 'libxss')
makedepends=('squashfs-tools' 'imagemagick')

options=(!strip)

# Get latest version + link from https://snapcraft.io/bluemail || snap info bluemail || run the following
# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/bluemail | jq '.download_url' -r
# curl -H 'X-Ubuntu-Series: 16' https://api.snapcraft.io/api/v1/snaps/details/bluemail | jq '.version' -r
source=('LICENSE'
        "${pkgname}-${pkgver}.snap::https://api.snapcraft.io/api/v1/snaps/download/ZVlj0qw0GOFd5JgTfL8kk2Y5eIG1IpiH_72.snap")

sha512sums=('546994dbf25972659db6130402926020fdfc763b3f41580d812aeb785824218bae1204babe99af51ad91fd758ad0e7f4d0636a00e9130ce13fc6ebb90540e9dc'
            'cf80d0ed131651befa10e8b43f2dfd4b10b49776f745f907154ac12209420048ce21decec361c25cf049eb76557a37483af7df4c8f1651f4aa7471471d3634f9')

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
