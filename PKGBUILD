pkgname=inadyn-mt
pkgver=2.24.46
pkgrel=2
pkgdesc="A simple dynamic DNS client based on inadyn"
arch=('i686' 'x86_64')
url="http://inadyn-mt.sourceforge.net/"
license=('GPL3')
depends=('glibc' 'libao')
source=(http://downloads.sourceforge.net/$pkgname/$pkgname.v.0$pkgver.tar.gz)
md5sums=('f601daacb43f8313e3cf65285755b074')

build() {
  cd "$pkgname.v.0$pkgver"
  ./configure
  make all
}

package() {
  cd "$pkgname.v.0$pkgver"

  # install binary
  install -Dm755 bin/linux/$pkgname "$pkgdir/usr/bin/$pkgname"
  # install manuals
  install -m755 -d "$pkgdir"/usr/share/man/man{5,8}
  install -m644 man/*.5 "$pkgdir"/usr/share/man/man5/
  install -m644 man/*.8 "$pkgdir"/usr/share/man/man8/
}

# vim:set ts=2 sw=2 et:
