# Maintainer: Ebrahim Azarisooreh <ebrahim.azarisooreh@gmail.com>
# Contributor: Nikolaos Bezirgiannis <bezeria@gmail.com>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Jachym Barvinek <jachymb@gmail.com>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: John Proctor <jproctor@prium.net>
# Contributor: Juergen Hoetzel <juergen@archlinux.org>

pkgname=swi-prolog-devel
pkgver=7.7.18
pkgrel=1
pkgdesc='Prolog environment (development version)'
arch=('x86_64' 'i686')
url='http://www.swi-prolog.org/'
license=('GPL' 'LGPL')
depends=('gmp' 'readline' 'openssl' 'libarchive')
makedepends=('libxft' 'libjpeg' 'unixodbc' 'libxpm' 'libxinerama')
optdepends=('unixodbc: for using the odbc4pl library'
            'uuid: for using the uuid library'
            'libjpeg: for using the pl2xpce library'
            'libxpm: for using the pl2xpce library'
            'libxinerama: for using the pl2xpce library'
            'libxft: for using the pl2xpce library'
            'java-environment: for interfacing java with the jpl package')
#options=('!makeflags')
source=("http://swi-prolog.org/download/devel/src/swipl-${pkgver}.tar.gz")
sha256sums=('596f350eb01ae9b7ba1ab394f33ef24d7484d5239e537efee148daad7906b4bd')
conflicts=('swi-prolog')
provides=('swi-prolog')

build() {
  cd "swipl-$pkgver"

  ./configure --prefix=/usr --with-world
  cd src
  ./configure --enable-shared --prefix=/usr

  make -C ..
}

check() {
  make -C "swipl-$pkgver" check || true
}

package() {
  make -C "swipl-$pkgver" DESTDIR="$pkgdir" install

  # Fix for FS#20873
  chmod +x "$pkgdir/usr/lib/swipl-$pkgver/library/dialect/sicstus/swipl-lfr.pl"
}

