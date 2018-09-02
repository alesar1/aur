# Maintainer:  Ainola
# Contributor: Hugo Lobo

pkgname=binkplayer
pkgver=2.7i
pkgrel=2
pkgdesc="Bink Video Player"
url="http://www.radgametools.com/bnkmain.htm"
arch=('x86_64')
depends=('libgl' 'openal')
# AUR helpers get confused with cached versions if the file name never changes.
source=("BinkLinuxPlayer-$pkgver.7z::http://www.radgametools.com/down/Bink/BinkLinuxPlayer.7z"
        "x-binkvideo.xml"
        "$pkgname.desktop"
        "$pkgname.png")
sha256sums=('3447ad1adebc74407e5f16742d4e786459048b4f710665f8c1be743286f52711'
            '880fcb3a4435750a2990af7b38dc26d81170487ae3f8ecb526aad5a17673a454'
            '1e3ac358afeff5d0f87ae4430d4d5ec21b2d45f9ac6ae6340d14b1e4280c18e6'
            'db086749490f24bf3c736d75b4fb75a7c7bf5d7209b8f7b9394d6c59063c86c8')
# License is unobtainable from their website - only custom contracts/license
# agreements seem to be available.
license=('custom')

package() {
  install -Dm755 "${srcdir}/BinkPlayer64" "${pkgdir}/usr/bin/binkplayer"

  # Desktop integration
  install -Dm644 "x-binkvideo.xml" -t "$pkgdir/usr/share/mime/video/"
  install -Dm644 "$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
  install -Dm644 "$pkgname.png" -t "$pkgdir/usr/share/pixmaps/"
}

# vim: et sw=2 ts=2
