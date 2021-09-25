# Maintainer: Qingxu <me@linioi.com>

pkgname=yesplaymusic
pkgver=0.4.1
pkgrel=3
pkgdesc="A third party music application for Netease Music"
arch=("x86_64")
url="https://github.com/qier222/YesPlayMusic"
license=("MIT")
provides=("yesplaymusic")
depends=(
    "gtk3"
    "nss"
)
optdepends=(
    'c-ares'
    'ffmpeg'
    'http-parser'
    'libevent'
    'libvpx'
    'libxslt'
    'minizip'
    're2'
    'snappy'
    'libnotify'
    'libappindicator-gtk3'
)
source=(
    "YesPlayMusic-${pkgver}.pacman::https://github.com/qier222/YesPlayMusic/releases/download/v${pkgver}/YesPlayMusic-${pkgver}.pacman"
)
sha256sums=('22dd17bde4bcc3549db134f9ba94d752451b1bf8fb2b736a0faeb2fddf8e0e70')

package() {
    cd ${srcdir}
    tar -xvf YesPlayMusic-${pkgver}.pacman -C ${pkgdir}
    # Remove exsiting files
    rm -f ${pkgdir}/.PKGINFO ${pkgdir}/.MTREE ${pkgdir}/.INSTALL
    # Make KDE happy :)
    echo 'Comment[zh_CN]=高颜值的第三方网易云播放器' >> ${pkgdir}/usr/share/applications/yesplaymusic.desktop
    sed -i -E "s|Categories=Music;|Categories=Music;AudioVideo;Player;|" ${pkgdir}/usr/share/applications/yesplaymusic.desktop   
}

post_install() {
    # Link to the binary
    ln -sf '/opt/YesPlayMusic/yesplaymusic' '/usr/bin/yesplaymusic'
    # SUID chrome-sandbox for Electron 5+
    chmod 4755 '/opt/YesPlayMusic/chrome-sandbox' || true
    update-mime-database /usr/share/mime || true
    update-desktop-database /usr/share/applications || true
}

post_remove() {
    rm -f '/usr/bin/yesplaymusic'
}
