# Maintainer: Gustavo Costa <xfgusta@gmail.com>

pkgname=strace-with-colors
_pkgname=strace
pkgver=5.19
pkgrel=1
pkgdesc='A diagnostic, debugging and instructional userspace tracer (with colors)'
arch=(x86_64)
url='https://strace.io/'
license=(BSD)
depends=(perl libunwind)
conflicts=($_pkgname)
provides=($_pkgname)
source=("https://github.com/strace/strace/releases/download/v$pkgver/strace-$pkgver.tar.xz"
        "$pkgname.patch")
sha1sums=('dc34c0d7c3ab0d0adb227f751c016da2c415eb2e'
          'SKIP')

prepare() {
  patch -d "$_pkgname-$pkgver" -p1 -i ../$pkgname.patch
}

build() {
  cd $_pkgname-$pkgver
  ./configure --prefix=/usr --with-libunwind --enable-mpers=no
  make
}

package() {
  cd $_pkgname-$pkgver
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
