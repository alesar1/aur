# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org>
# Contributor: Yunhui Fu <yhfudev@gmail.com>
# Contributor: Andreas Wagner <andreas.wagner@lowfatcomputing.org>
# Contributor: Guillem Rieu <guillemr@gmx.net>

pkgname=gccxml-git
pkgver=0.6.x.r1221.gdcd36c5c
pkgrel=1
pkgdesc="GCC-XML generates an XML description of a C++ program from GCC's internal representation"
arch=(i686 x86_64 arm armv6h armv7h aarch64)
url="http://www.gccxml.org/"
license=('custom')
makedepends=(git cmake)
provides=(gccxml)
conflicts=(gccxml)
source=("git+https://github.com/gccxml/gccxml.git"
        'Copyright.txt')
sha512sums=('SKIP'
            'd73327835acd2980108e3ddb4d30ed6734e098737d05567d62bf70efefbdeacf226bda8548203bc2ccbc762b052bfc774b3371aea7b14032a0d7128a76d027b1')

pkgver() {
  cd "$srcdir/${pkgname/-git/}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/${pkgname/-git/}"
  CFLAGS=' -fgnu89-inline' cmake \
    -DBUILD_TESTING=OFF \
    -DCMAKE_INSTALL_PREFIX=/usr
}

build() {
  cd "$srcdir/${pkgname/-git/}"
  make
}

package() {
  cd "$srcdir/${pkgname/-git/}"
  make DESTDIR="$pkgdir/" install

  install -D -m644 "$srcdir/Copyright.txt" "$pkgdir/usr/share/licenses/$pkgname/Copyright.txt"
}
