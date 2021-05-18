# Maintainer: Brian Bidulock <bidulock@openss7.org>

pkgname=pacana
pkgver=0.11
pkgrel=1
pkgdesc="Pacman repository analysis tool"
arch=('i686' 'x86_64')
url="https://github.com/bbidulock/pacana"
license=('GPL')
depends=('pacman')
source=("https://github.com/bbidulock/$pkgname/releases/download/$pkgver/$pkgname-$pkgver.tar.lz")
md5sums=('636f716d53bfba14f4fda4e40f13d5e7')

build() {
  cd $pkgname-$pkgver
  ./configure
  # Fight unused direct deps
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0 /g' -e 's/    if test "$export_dynamic" = yes && test -n "$export_dynamic_flag_spec"; then/      func_append compile_command " -Wl,-O1,--as-needed"\n      func_append finalize_command " -Wl,-O1,--as-needed"\n\0/' libtool
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
