# Maintainer: Sam Close <sam dot w dot close at gmail dot com> 
# Contributor:  Imants Dureika <imants dot dureika at gmail dot com>
pkgname=xdemineur
pkgver=2.1.1
pkgrel=1
pkgdesc="A minesweeper game for the X Window System."
arch=('i686' 'x86_64')
url="http://www.babafou.eu.org/xdemineur/"
license=('custom') # Copyright � 1993-1999 Marc Baudoin <babafou at babafou dot eu dot org>
makedepends=('imake')
depends=('libx11' 'libxpm')
source=(http://www.babafou.eu.org/xdemineur/xdemineur-2.1.1.tar.gz)
sha256sums=('593824412a208a1b75d5b15745a271dc3eba330d41f7718f4826567d04bcbb9b')

build() {
    cd $pkgname-$pkgver
    xmkmf
    make
}

package() {
    cd $pkgname-$pkgver
    make DESTDIR="$pkgdir/" install
}
