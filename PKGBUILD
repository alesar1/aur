# Maintainer: Ebrahim Azarisooreh <ebrahim.azarisooreh@gmail.com>
# Contributor: Nikolaos Bezirgiannis <bezeria@gmail.com>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Jachym Barvinek <jachymb@gmail.com>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: John Proctor <jproctor@prium.net>
# Contributor: Juergen Hoetzel <juergen@archlinux.org>

pkgname=swi-prolog-devel
pkgver=8.1.10
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
sha256sums=('3e938ba4479e9c9ea44f51d0a8d125a3fd0922318839d745b47197ae68769b27')
conflicts=('swi-prolog')
provides=('swi-prolog')

build() {
  cd "swipl-$pkgver"

  mkdir build
  cd build && cmake -DCMAKE_INSTALL_PREFIX=/usr .. && make
}

package() {
  make -C "swipl-$pkgver/build" DESTDIR="$pkgdir" install
}
