# $Id$
# Maintainer: Thomas Lange <thomas-lange2@gmx.de>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>

_pkgname=audacious
pkgname=$_pkgname-gtk3
pkgver=3.7
_pkgver=$pkgver-gtk3
pkgrel=2
pkgdesc="Lightweight, advanced audio player focused on audio quality"
arch=('i686' 'x86_64')
url="http://audacious-media-player.org/"
license=('BSD')
depends=('gtk3' 'glib2' 'libsm' 'gnome-icon-theme' 'hicolor-icon-theme' 'desktop-file-utils')
makedepends=('python2') # for gdbus-codegen
optdepends=('unzip: zipped skins support')
provides=('audacious')
conflicts=('audacious')
install=$_pkgname.install
source=(http://distfiles.audacious-media-player.org/$_pkgname-$_pkgver.tar.bz2)
sha1sums=('cf4f9a037bee37ce3cd8dfde05056813a6198ca9')

build() {
  cd "$srcdir/$_pkgname-$_pkgver"
  ./configure \
    --prefix=/usr \
    --with-buildstamp='Arch Linux'
  make
}

package() {
  cd "$srcdir/$_pkgname-$_pkgver"
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
