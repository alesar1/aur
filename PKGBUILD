# Maintainer: Tobias Brox <t-arch@tobixen.no>
pkgname=thrash-protect
pkgver=0.14.1
pkgrel=1
pkgdesc="Simple-Stupid user-space program protecting a linux host from thrashing."
url="https://github.com/tobixen/thrash-protect"
arch=('any')
license=('GPL')
depends=('python')
source=("https://github.com/tobixen/$pkgname/archive/v$pkgver.tar.gz")

package() {
  mkdir -p "$pkgdir/usr/lib/systemd/system"
  mkdir -p "$pkgdir/usr/bin/"
  ln -s "$pkgdir/usr/bin/" "$pkgdir/usr/sbin"
  cd "$srcdir/$pkgname-$pkgver/"
  make PREFIX=$pkgdir/usr INSTALL_ROOT=$pkgdir install
  rm "$pkgdir/usr/sbin"
}


md5sums=('a9d31c667a445e3f914c044114e1fc65')
