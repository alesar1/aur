# Maintainer: Thayne McCombs <bytecurry.software@gmail.com>
pkgname=roswell
pkgver="17.4.8.76"
pkgrel=1
pkgdesc="Lisp installer and launcher"
url="https://github.com/snmsts/roswell"
arch=('i686' 'x86_64')
license=('MIT')
depends=('curl')
optdepends=()
source=("https://github.com/roswell/roswell/archive/v$pkgver.tar.gz")
md5sums=('ca8086cdfd5d52998fc7fada145c3107')



build() {
  cd "$pkgname-$pkgver"
  ./bootstrap
  ./configure --prefix=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
  install -D COPYING "$pkgdir/usr/share/licenses/roswell/LICENSE"
}
