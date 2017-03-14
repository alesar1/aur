# Maintainer: Alexander Fasching <fasching.a91@gmail.com>
# Based on PKGBUILD of bitcoin-git

pkgname=blackcoin-git
_gitname=blackcoin
pkgver=v1.2.2.r4.gea23efdc
pkgrel=1
pkgdesc="BlackCoin is a PoS-based cryptocurrency. Provides blackcoind and blackcoin-qt"
arch=('any')
url="https://blackcoin.co"
license=('MIT')
depends=('gcc-libs' 'miniupnpc' 'openssl' 'db')
makedepends=('qt5-base' 'qt5-tools' 'pkg-config' 'git' 'boost-libs' 'boost' 'gcc' 'qrencode' 'make' 'automoc4' 'automake' 'autoconf' 'libtool')
provides=('blackcoin-qt' 'blackcoind')
#conflicts=('blackcoin-qt' 'blackcoind')
source=('git+https://github.com/CoinBlack/blackcoin.git')
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$_gitname"
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    # Build blackcoind
    cd "$srcdir/$_gitname/src"
    make -f makefile.unix -j$(nproc)

    # Build blackcoin-qt
    cd "$srcdir/$_gitname"
    qmake "USE_UPNP=1" "USE_QRCODE=1" "QMAKE_CXXFLAGS=-std=c++11"
    make -j$(nproc)
}

package() {
    # install blackcoin-qt client
    msg2 'Installing blackcoin-qt...'
    install -Dm755 "$srcdir/$_gitname/blackcoin-qt" "$pkgdir/usr/bin/blackcoin-qt"
    install -Dm644 "$srcdir/$_gitname/share/pixmaps/bitcoin80.xpm" "$pkgdir/usr/share/pixmaps/bitcoin80.xpm"
    desktop-file-install -m 644 --dir="$pkgdir/usr/share/applications/" "$srcdir/$_gitname/contrib/debian/blackcoin-qt.desktop"

    # install blackcoin-daemon
    msg2 'Installing blackcoind...'
    install -Dm755 "$srcdir/$_gitname/src/blackcoind" "$pkgdir/usr/bin/blackcoind"
    install -Dm644 "$srcdir/$_gitname/contrib/debian/examples/blackcoin.conf" "$pkgdir/usr/share/doc/$pkgname/examples/blackcoin.conf"
    install -Dm644 "$srcdir/$_gitname/contrib/debian/manpages/blackcoind.1" "$pkgdir/usr/share/man/man1/blackcoind.1"
    install -Dm644 "$srcdir/$_gitname/contrib/debian/manpages/blackcoin.conf.5" "$pkgdir/usr/share/man/man5/blackcoin.conf.5"

    # install license
    install -D -m644 "$srcdir/$_gitname/COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
