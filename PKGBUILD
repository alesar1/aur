# Maintainer: Johnathan Jenkins <twodopeshaggy@gmail.com>
# Contributor: Christian Neukirchen <chneukirchen@gmail.com>
# Contributor: bl4ckb1t <bl4ckb1t@gmail.com>
pkgname=toilet
pkgver=0.3
pkgrel=1
pkgdesc="free replacement for the FIGlet utility."
arch=('i686' 'x86_64')
url="http://libcaca.zoy.org/wiki/toilet"
license=('custom:WTFPL')
depends=('libcaca')
source=(http://libcaca.zoy.org/files/toilet/$pkgname-$pkgver.tar.gz)
md5sums=('9b72591cb22a30c42a3184b17cabca6f')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/${pkgname}/COPYING
}
