# Contributor: Denis 'GNUtoo' Carikli <GNUtoo@cyberdimension.org>
pkgname=fso-unbootimg
pkgver=0.1.2
pkgrel=1
pkgdesc="Utility to unpack images made with Android's mkbootimg"
arch=('armv7h' 'i686' 'x86_64')
url='git://github.com/freesmartphone/utilities.git'
license=('MIT')
depends=('zlib')
_commit=('4566e120fc80fd372f68b20e044387bd97218bfd')
source=("git+https://github.com/freesmartphone/utilities.git#commit=${_commit}")
sha256sums=('SKIP')

prepare() {
  cd "$srcdir/utilities/android/image-utils"
  ./autogen.sh
}

build() {
  cd "$srcdir/utilities/android/image-utils"
  ./configure --prefix=/usr --mandir=/usr/share/man
  make
}

package(){
  cd "$srcdir/utilities/android/image-utils"
  make DESTDIR="$pkgdir" install
  rm -f $pkgdir/usr/bin/fastboot
  rm -f $pkgdir/usr/bin/mkbootimg
  install -D -m644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
