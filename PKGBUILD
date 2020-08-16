# Maintainer: Tom Zander

pkgname=flowee-pay-git
pkgver=b2d1486
pkgrel=1
pkgdesc="Flowee Payment solution"
arch=('x86_64')
url="https://flowee.org/"
license=('GPL3')
depends=('flowee-libs' 'qt5-base')
makedepends=('boost' 'cmake')
provides=('flowee-pay')
source=("git+https://gitlab.com/FloweeTheHub/pay.git#branch=master")

sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/pay"
  git rev-parse --short HEAD
}

build() {
  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE=release -DCMAKE_INSTALL_PREFIX=$pkgdir/usr/ ../pay
  make
}

package() {
  cd build
  make install
}
