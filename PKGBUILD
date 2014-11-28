# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>

pkgname=scrub
pkgver=2.5.2
pkgrel=1
pkgdesc="Iteratively writes patterns on files or disk devices to make retreiving the data more difficult"
arch=('i686' 'x86_64')
url="http://code.google.com/p/diskscrub/"
license=('GPL')
source=(http://diskscrub.googlecode.com/files/$pkgname-$pkgver.tar.bz2)
sha256sums=('51ee4963759cf07b186bb583ef2839618c1131bbbbdfae849ca76a2259cbc461')

build() {
  cd ${srcdir}/$pkgname-$pkgver

  ./configure --prefix=/usr --mandir=/usr/share/man
  make
}

package () {
  cd ${srcdir}/$pkgname-$pkgver

  make DESTDIR=${pkgdir} install
}
