# Maintainer: Reotip Sakuraga <reotipfur@gmail.com>

pkgname=doomseeker
pkgver=1.2
pkgrel=20180228
pkgdesc="A cross-platform Doom server browser"
arch=(i686 x86_64)
url="https://reotip.alwaysdata.net/"
license=("GPL2")

depends=('qt4' 'zlib' 'bzip2')
makedepends=('gcc' 'cmake' 'make')

optdepends=('zandronum2: GZDoom fork supporting client/server multiplayer'
            'odamex: Classic client/server multiplayer fork'
            'chocolate-doom: Doom source port accurately reproducing the original DOS versions of Doom')
source=("hg+ssh://hg@bitbucket.org/Doomseeker/doomseeker"
        "doomseeker.desktop"
        "doomseeker-launch-script.sh")

sha256sums=('SKIP'
            '64004248a2dd3771292e63717a05e1859f1ffe6d6fd5f16ebfa1427b9a43533f'
            '96fca72228a50d80b019adf3c82b8800a9d7f03994252e544513537541d011a4')

_bbdir=doomseeker
build() {
    cd $srcdir/$_bbdir
    mkdir -p build
    cd build
    cmake -DCMAKE_BUILD_TYPE=Release .. && \
    make -j$(nproc)
}

package() {
    mkdir -p $pkgdir/usr/games/doomseeker/engines/
    cd $srcdir/$_bbdir/build
    install -Dm755 doomseeker "$pkgdir/usr/games/doomseeker"
    install -Dm755 libwadseeker.so "$pkgdir/usr/games/doomseeker"
    cd engines
    for f in *.so; do
        install -Dm755 $f "$pkgdir/usr/games/doomseeker/engines/$f"
    done
    cd ../../
    install -Dm644 media/icon.png "$pkgdir/usr/share/pixmaps/doomseeker.png"
    install -Dm755 $srcdir/../doomseeker-launch-script.sh "$pkgdir/usr/bin/doomseeker"
    install -Dm644 "$srcdir/../doomseeker.desktop" "$pkgdir/usr/share/applications/doomseeker.desktop"
}
