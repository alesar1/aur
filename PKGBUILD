# Maintainer: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG

pkgname=liblcf-git
pkgver=0.6.2.r30.gaf6567c
pkgrel=1
pkgdesc="Library to handle RPG Maker 2000/2003 and EasyRPG projects (development version)"
arch=('i686' 'x86_64')
url="https://easyrpg.org"
license=('MIT')
conflicts=('liblcf')
provides=("liblcf=${pkgver%.r*}" 'lcf2xml')
depends=('gcc-libs' 'expat' 'icu')
makedepends=('git')
source=(liblcf::"git+https://github.com/EasyRPG/liblcf.git")
md5sums=('SKIP')

pkgver() {
  cd liblcf
  git describe --long --tags | sed 's/-/.r/;s/-/./'
}

build () {
  cd liblcf

  autoreconf -i
  ./configure --prefix=/usr \
    --enable-shared --disable-static \
    --disable-update-mimedb
  make
}

check() {
  make -C liblcf check
}

package () {
  cd liblcf

  make DESTDIR="$pkgdir/" install
  # license
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
}
