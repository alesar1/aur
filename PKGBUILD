# Maintainer: Brett Cornwall <ainola@archlinux.org>
# Contributor: Hugo Lobo

pkgname=binkplayer-bin
pkgver=2021.03
pkgrel=1
pkgdesc="Bink Video Player"
url="http://www.radgametools.com/bnkmain.htm"
arch=('x86_64')
depends=('libgl' 'openal')
# AUR helpers get confused with cached versions if the file name never changes.
source=("BinkLinuxPlayer-$pkgver.7z::http://www.radgametools.com/down/Bink/BinkLinuxPlayer.7z"
        "x-binkvideo.xml"
        "binkplayer.desktop")
sha256sums=('68ba368cab3de84b623f697885b51e2612eb8fad26a9354a83c8db35e8553dba'
            '880fcb3a4435750a2990af7b38dc26d81170487ae3f8ecb526aad5a17673a454'
            '1e3ac358afeff5d0f87ae4430d4d5ec21b2d45f9ac6ae6340d14b1e4280c18e6')
# License is unobtainable from their website - only custom contracts/license
# agreements seem to be available.
license=('custom')

package() {
    install -Dm755 BinkPlayer64 "$pkgdir/usr/bin/binkplayer"
    install -Dm644 "x-binkvideo.xml" -t "$pkgdir/usr/share/mime/video/"
    install -Dm644 "binkplayer.desktop" -t "$pkgdir/usr/share/applications/"
}
