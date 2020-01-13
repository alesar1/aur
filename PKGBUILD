# Maintainer: Lev Lybin <lev.lybin@gmail.com>
# Contributor: Lev Lybin <lev.lybin@gmail.com>

pkgname=btdex
pkgver=0.1.12
pkgrel=1
pkgdesc='Decentralized exchange system running on the Burst blockchain'
arch=(x86_64)
url='https://github.com/btdex/btdex'
license=(GPL3)
options=(!strip)
depends=(java-environment xdg-utils)
install=btdex.install
source=(https://github.com/btdex/btdex/releases/download/v$pkgver/btdex-all-v$pkgver.jar
        https://github.com/btdex/btdex/raw/master/src/main/resources/icon.png
        btdex.sh
        btdex.desktop)
sha256sums=('99d60b5577b4d4d731bdc32e55eba94d0e5cb9e7435ead0e18d720846615a971'
            'f17dc59e7d436b4e5e577283d116599d998a88132d45d7c3e769aa21543cd9a9'
            '162e5c9fad5d5a5e5a59192a64ce6d1a5bf189465eeae4130332b3838f4d9c11'
            '18ef17d2817d5e44003e29a5be82a58886cbfdb41e54894ae5139d560b0403ec')

package() {
    cd $srcdir

    install -d $pkgdir/opt/$pkgname
    install -Dm644 btdex-all-v$pkgver.jar "$pkgdir/opt/$pkgname/btdex.jar"
    install -Dm755 btdex.sh "$pkgdir/opt/$pkgname/btdex.sh"

    # Menu entry
    install -Dm644 "$pkgname.desktop" -t "$pkgdir/usr/share/applications"
    install -Dm644 icon.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
}
