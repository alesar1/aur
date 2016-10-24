# Maintainer:   Razer <razer[AT]neuf[DOT]fr>
pkgname=rf24
pkgver='1.1.7.r8.gc94f877'
pkgver() {
  cd RF24
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
pkgrel=1
pkgdesc='Linux support for RF24 radio modules'
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='http://tmrh20.github.io/RF24/'
license=('MIT')
source=('git://github.com/TMRh20/RF24')
md5sums=('SKIP')

build() {
  cd "$srcdir/RF24"
  if [ ! -e /dev/spidev0.0 ] && [ -e /dev/spidev1.0 ]; then
    sed 's/spidev0.0/spidev1.0/' utility/SPIDEV/spi.cpp > utility/SPIDEV/spi.cpp.new
    mv utility/SPIDEV/spi.cpp.new utility/SPIDEV/spi.cpp
  fi
  ./configure --driver=SPIDEV --prefix="$pkgdir/usr" --ldconfig=''
}

package() {
  cd "$srcdir/RF24"
  make install
  cd "$pkgdir/usr/lib"
  rm librf24.so librf24-bcm.so
  ln -s librf24.so.1 librf24.so
  ln -s librf24.so librf24-bcm.so
}

