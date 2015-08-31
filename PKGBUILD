# Maintainer: codestation <codestation404 at gmail dot com>

pkgname=wxmedit
pkgver=3.0.2
pkgrel=1
pkgdesc="Cross-platform Text/Hex Editor, a fork of MadEdit with bug fixes and improvements"
arch=("i686" "x86_64")
url="https://wxmedit.github.io/"
license=('GPL')
depends=('wxgtk2.8' 'icu' 'desktop-file-utils' 'boost')
source=("http://downloads.sourceforge.net/project/$pkgname/$pkgver/wxMEdit-$pkgver.tar.gz")
install=wxmedit.install
sha256sums=('7d77c0ac255e699c44f713dae9aaac00a75bf442cf04355c161adf2c8de2206c')

build() {
  cd "$srcdir/wxMEdit-$pkgver"

  ./configure --prefix=/usr --with-wx-config=/usr/bin/wx-config-2.8
  make
}

package() {
  cd "$srcdir/wxMEdit-$pkgver"
  make DESTDIR="${pkgdir}" install
}
