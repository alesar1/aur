# Maintainer: Einar Lielmanis <einar@spicausis.lv>

pkgname=sylpheed-beta
pkgver=3.5.1
pkgrel=1
pkgdesc="Lightweight and user-friendly e-mail client. Latest official beta version."
arch=('i686' 'x86_64')
url="http://sylpheed.sraoss.jp/en/"
license=('GPL')
depends=('gpgme' 'gtk2' 'compface' 'gtkspell')
options=('libtool')
conflicts=('sylpheed' 'sylpheed-beta-iconmod')
provides=('sylpheed')
source=(http://sylpheed.sraoss.jp/sylpheed/v3.5/sylpheed-$pkgver.tar.bz2{,.asc})

build() {
  #cd "$srcdir/sylpheed-$pkgver"
  cd "$srcdir/sylpheed-3.5.1" # RC paths
  ./configure --prefix=/usr --enable-ldap --enable-gpgme
  make
}

package() {
  #cd "$srcdir/sylpheed-$pkgver"
  cd "$srcdir/sylpheed-3.5.1" # RC paths
  make DESTDIR="$pkgdir" install
}

validpgpkeys=('8CF3A5AC417ADE72B0AA4A835024337CC00C2E26')

md5sums=('d88e892b54b160209c8183ebe2574490'
         'SKIP')
