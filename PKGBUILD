# Maintainer: Morten Linderud <foxboron@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: dorphell <dorphell@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Denis Tikhomirov <dvtikhomirov@gmail.com>

pkgname=minicom-line_timestamp
_pkgname=minicom
pkgver=2.8
pkgrel=2
pkgdesc='A serial communication program (with line_timestamp patch)'
arch=('x86_64')
url='https://salsa.debian.org/minicom-team/minicom'
license=('GPL')
depends=('bash')
optdepends=('lrzsz: for xmodem, ymodem and zmodem file transfer protocols')
provides=("minicom=$pkgver")
conflicts=('minicom')
backup=('etc/minirc.dfl')
source=("https://salsa.debian.org/minicom-team/minicom/-/archive/$pkgver/minicom-$pkgver.tar.bz2"
        "minicom-line_timestamp-2.8.patch::https://salsa.debian.org/yan12125-guest/minicom/-/commit/d7d40624f00cb06544e475fb308000575eaa95bc.patch")
sha256sums=('38cea30913a20349326ff3f1763ee1512b7b41601c24f065f365e18e9db0beba'
            '821e65384543bee3da87954144277c051029af174cef3e7789a71c9c06efb073')

prepare(){
  cd "${_pkgname}-${pkgver}"
  patch -Np1 < "$srcdir/minicom-line_timestamp-2.8.patch"
}

build() {
  cd "${_pkgname}-${pkgver}"

  ./configure --prefix=/usr \
              --sysconfdir=/etc
  make
}

package() {
  cd "${_pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}/" install
  install -Dm644 doc/minirc.dfl ${pkgdir}/etc/minirc.dfl
}
