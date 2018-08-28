# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>

pkgname=dico
pkgver=2.6
pkgrel=1
pkgdesc="GNU Dictionary Server"
arch=('x86_64')
url="http://puszcza.gnu.org.ua/software/$pkgname"
license=(GPL3)
depends=(python gsasl wordnet guile pam)
source=("ftp://download.gnu.org.ua/pub/release/$pkgname/$pkgname-$pkgver.tar.xz"{,.sig})
sha1sums=('a66771ec12d335351efc88614d7d79dddf4ae9c0'
          'SKIP')
validpgpkeys=('325F650C4C2B6AD58807327A3602B07F55D0C732')
   # Sergey Poznyakoff <gray@gnu.org>
   # To validate, see instructions at:
   #   https://puszcza.gnu.org.ua/software/dico/download.html

build() {
  cd $pkgname-$pkgver
  ./configure \
    --prefix=/usr \
    --libexecdir=/usr/lib/dico \
    --sysconfdir=/etc \
    --with-pcre \
    --with-wordnet
  make
}

check() {
  cd $pkgname-$pkgver
  make -k check
}

package() {
  cd $pkgname-$pkgver
  make PREFIX=/usr DESTDIR="$pkgdir" install
}
