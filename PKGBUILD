# Maintainer: synapse84 <synapse84 at gmail dot com>

pkgname=mumble-snapshot
pkgver=1.3.0_1733_g153c0aa
pkgrel=1
pkgdesc="A high quality voice chat program."
arch=('i686' 'x86_64')
url="https://www.mumble.info/"
license=('BSD')
depends=('qt5-base' 'qt5-svg' 'opus' 'speex' 'libpulse' 'avahi' 'protobuf' 'speech-dispatcher')
makedepends=('boost' 'qt5-tools')
optdepends=('espeak: speech synthesizer')
provides=('mumble')
conflicts=('mumble')
install=mumble.install
source=("https://dl.mumble.info/mumble-${pkgver//_/\~}~snapshot.tar.gz"{,.sig})
validpgpkeys=('3BD0ECA5925319AF89C25865B585609C5A2BE0C1')
sha256sums=('e6c34eca3c1b24e6e25c31770a4f0aeebe607f819989f4f4c0c357ca5d1c600c'
            'SKIP')

build() {
    cd $srcdir/mumble-${pkgver//_/\~}~snapshot

    qmake-qt5 main.pro \
      CONFIG+="bundled-celt no-bundled-opus no-bundled-speex no-g15 no-xevie no-server no-embed-qt-translations no-update" \
      DEFINES+="PLUGIN_PATH=/usr/lib/mumble"

    make release
}

package() {
    cd $srcdir/mumble-${pkgver//_/\~}~snapshot

    # binaries
    install -m755 -D ./release/mumble $pkgdir/usr/bin/mumble
    install -m755 -D ./scripts/mumble-overlay $pkgdir/usr/bin/mumble-overlay

    # libraries
    # mumble
    install -m755 -D ./release/libmumble.so.1.3.0 $pkgdir/usr/lib/mumble/libmumble.so.1.3.0
    ln -s libmumble.so.1.3.0 $pkgdir/usr/lib/mumble/libmumble.so
    ln -s libmumble.so.1.3.0 $pkgdir/usr/lib/mumble/libmumble.so.1
    ln -s libmumble.so.1.3.0 $pkgdir/usr/lib/mumble/libmumble.so.1.3
    # celt 11
    install -m755 -D ./release/libcelt0.so.0.11.0 $pkgdir/usr/lib/mumble/libcelt0.so.0.11.0
    ln -s libcelt0.so.0.11.0 $pkgdir/usr/lib/mumble/libcelt0.so
    ln -s libcelt0.so.0.11.0 $pkgdir/usr/lib/mumble/libcelt0.so.0
    ln -s libcelt0.so.0.11.0 $pkgdir/usr/lib/mumble/libcelt0.so.0.11
    # celt 7
    install -m755 -D ./release/libcelt0.so.0.7.0 $pkgdir/usr/lib/mumble/libcelt0.so.0.7.0
    ln -s libcelt0.so.0.7.0 $pkgdir/usr/lib/mumble/libcelt0.so.0.7

    # plugins
    install -m755 -D ./release/plugins/*.so $pkgdir/usr/lib/mumble/

    # other
    install -m755 -d $pkgdir/usr/share/man/man1
    install -m644 -D ./man/mumble* $pkgdir/usr/share/man/man1/
    install -m644 -D ./scripts/mumble.desktop $pkgdir/usr/share/applications/mumble.desktop
    install -m644 -D ./icons/mumble.svg $pkgdir/usr/share/icons/hicolor/scalable/apps/mumble.svg
    install -m644 -D ./LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
