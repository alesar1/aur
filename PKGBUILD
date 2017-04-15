# Maintainer: Jan Neumann <neum dot ja at gmail dot com>
# Contributor: Michael Straube <straubem@gmx.de>

pkgname=latte-dock-git
pkgver=0.6.0.r43.g4eda03c
pkgrel=1
pkgdesc='A dock based on plasma frameworks - git version'
arch=('i686' 'x86_64')
url='https://github.com/psifidotos/Latte-Dock'
license=('GPL')
depends=('plasma-framework' 'plasma-desktop')
makedepends=('git' 'cmake' 'extra-cmake-modules' 'python')
conflicts=('latte-dock')
source=("git+https://github.com/psifidotos/Latte-Dock.git")
sha256sums=('SKIP')

pkgver() {
  cd Latte-Dock

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd Latte-Dock

  mkdir build && cd build

  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release
    
  make
}

package() {
  cd Latte-Dock/build

  make DESTDIR="$pkgdir" install
}
