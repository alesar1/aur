# Maintainer: Andy B. <brofi.archlinux at gmail dot com>

pkgname=xmobar-alsa
pkgver=0.24.5
pkgrel=2
pkgdesc="A Minimalistic Text Based Status Bar compiled with ALSA"
url="https://hackage.haskell.org/package/xmobar"
license=('BSD')
arch=('i686' 'x86_64')
conflicts=('xmobar')
depends=('haskell-alsa-core>=0.5.0' 'haskell-alsa-mixer>0.2.0.2' 'libxft'
         'libxinerama' 'wireless_tools' 'libxrandr' 'libxpm' 'ghc' 'haskell-x11'
         'haskell-x11-xft' 'haskell-utf8-string' 'haskell-network-uri' 'haskell-hinotify'
         'haskell-stm' 'haskell-parsec' 'haskell-mtl' 'haskell-regex-base'
         'haskell-regex-compat' 'haskell-http')
source=(https://hackage.haskell.org/packages/archive/xmobar/$pkgver/xmobar-$pkgver.tar.gz)
md5sums=('9befdb157b5adedd7150e4e07f0efbde')

build() {
    cd xmobar-$pkgver

    runhaskell Setup configure -O \
        --enable-shared \
        --prefix=/usr \
        --enable-executable-dynamic \
        --disable-library-vanilla \
        --flags="with_utf8 with_xft with_iwlib with_xpm with_inotify with_alsa"
    runhaskell Setup build
}

package() {
    cd xmobar-$pkgver
    runhaskell Setup copy --destdir="$pkgdir"
    install -D -m644 license "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

