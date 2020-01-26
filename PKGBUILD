# Maintainer: Patrick josé Pereira  <gmail.com@patrickelectric>
pkgname=mavlink-git
pkgver=080811f3
pkgrel=1
pkgdesc="MAVLink - Micro Air Vehicle Message Marshalling Library."
arch=('any')
url="https://github.com/patrickelectric/Gcode3D"
license=('GPLV3')
makedepends=('git' 'cmake' 'python2')
source=('git://github.com/mavlink/mavlink.git')
md5sums=(SKIP)

pkgver() {
  cd "mavlink"
  git log --pretty=format:'%h' -n 1
}

build() {
  cd "mavlink"
  git submodule update --init --recursive
  mkdir "build" || true
  cd "build"
  cmake ..
  make
}

package(){
  cd "mavlink/build"
  make DESTDIR="$pkgdir" install
}
