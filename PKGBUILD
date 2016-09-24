# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>

pkgname=libisds
pkgver=0.10.4
pkgrel=1
pkgdesc="Client library for accessing SOAP services of ISDS (Data Box Information System)"
arch=('i686' 'x86_64')
url="http://xpisar.wz.cz/libisds/"
license=('LGPL')
depends=('libxml2' 'expat')
source=(http://xpisar.wz.cz/$pkgname/dist/$pkgname-$pkgver.tar.xz{,.asc})
validpgpkeys=('4B528393E6A3B0DFB2EF3A6412C9C5C767C6FAA2') # Petr Pisar
sha256sums=('34833f4cda15e5243c32f2c4c9113c4469cef13556fa1495b3ffb2e450a66e5a'
            'SKIP')

build() {
  cd "${srcdir}"/$pkgname-$pkgver

  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}"/$pkgname-$pkgver

  make DESTDIR="${pkgdir}" install
}
