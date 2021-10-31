# Maintainer: Chris Rizzitello <sithlord48@gmail.com>
pkgname=libff7tk-git
pkgver=Qt5.r203.g96d38e8
pkgrel=1
provides=('libff7tk')
conflicts=('libff7tk')
pkgdesc="Final Fantasy 7 Tool library"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/sithlord48/ff7tk"
license=('GPL3')
makedepends=('cmake' 'git' 'doxygen')
depends=('qt6-base' 'qt6-declarative' 'qt6-5compat' 'zlib') #Qt6)
#optdepends=('otf-ipafont: font for displaying japanese')
install=$pkgname.install
source=('git://github.com/sithlord48/ff7tk.git')
md5sums=(SKIP)

pkgver() {
  cd "ff7tk"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "ff7tk"
  cmake -DDOCS=ON -DCMAKE_INSTALL_PREFIX=/usr -DQT_DEFAULT_MAJOR_VERSION=6 CMakeLists.txt
  make
}

package(){
  cd "ff7tk"
  make DESTDIR="$pkgdir" install
}
