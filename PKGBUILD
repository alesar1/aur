# Maintainer: Andy B. <brofi.archlinux at gmail dot com>

pkgname=xmobar-alsa
pkgver=0.24.3
pkgrel=2
pkgdesc="A Minimalistic Text Based Status Bar compiled with ALSA"
url="https://hackage.haskell.org/package/xmobar"
license=('BSD')
arch=('i686' 'x86_64')
conflicts=('xmobar')
depends=('haskell-alsa-core>=0.5.0' 'haskell-alsa-mixer>0.2.0.2' 'gmp' 'libxft' 'libxinerama' 'wireless_tools' 'libxrandr' 'libxpm')
makedepends=('ghc=8.0.1' 'haskell-x11' 'haskell-x11-xft' 'haskell-utf8-string' 'haskell-network-uri'
             'haskell-stm' 'haskell-parsec' 'haskell-mtl' 'haskell-regex-base' 'haskell-regex-compat' 'haskell-http')
source=(https://hackage.haskell.org/packages/archive/xmobar/$pkgver/xmobar-$pkgver.tar.gz)

build() {
    cd xmobar-$pkgver

    runhaskell Setup configure --prefix=/usr --flags="with_utf8 with_xft with_iwlib with_xpm with_alsa"
    runhaskell Setup build
}

package() {
    cd xmobar-$pkgver
    runhaskell Setup copy --destdir="$pkgdir"
    install -D -m644 license "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

md5sums=('8d0b8e12da0346ab74b113b83bed11d0')
