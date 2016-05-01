# Maintainer: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG

pkgname=liblcf
pkgver=0.4.1
pkgrel=2
pkgdesc="Library to handle RPG Maker 2000/2003 and EasyRPG projects"
arch=('i686' 'x86_64')
url="https://easy-rpg.org/"
license=('MIT')
depends=('gcc-libs' 'expat' 'icu')
source=("https://easy-rpg.org/downloads/player/liblcf-$pkgver.tar.gz")
sha256sums=('038a3c382759a27956338d983043f330afeb71caefc4f5de8966925ebff539fe')

prepare() {
  # fix a warning
  sed -i 's|^time_stamp_CXXFLAGS =|& -std=c++11|' liblcf-$pkgver/Makefile.{in,am}
}

build () {
  cd liblcf-$pkgver

  ./configure --prefix=/usr --enable-shared --disable-static
  make
}

check() {
  make -C liblcf-$pkgver check
}

package () {
  cd liblcf-$pkgver

  make DESTDIR="$pkgdir/" install
  # license
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
}
