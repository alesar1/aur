# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=zps-git
pkgdesc="A small utility for listing and reaping zombie processes (git)"
pkgver=1.2.3.r0.g9d08c49
pkgrel=1
arch=('any')
url="https://github.com/orhun/zps"
license=('GPL3')
makedepends=('cmake')
conflicts=("${pkgname%-git}" "${pkgname%-git}-bin")
source=('git://github.com/orhun/zps.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  mkdir -p "${pkgname%-git}/build"
  cd "${pkgname%-git}/build"
  cmake ../ -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${pkgname%-git}/build"
  make DESTDIR="$pkgdir" install
}
