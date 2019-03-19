# Maintainer: VanLaser <gabi_laser at yahoo dot com>

pkgname=c2ffi-git
pkgver=r164.d7aaba1
pkgrel=1
pkgdesc="Clang-based FFI wrapper generator"
arch=('x86_64')
url="https://github.com/rpav/c2ffi"
license=('GPL2')
depends=('clang')
makedepends=('git'
             'make'
             'cmake'
             'gcc')
provides=('c2ffi')
conflicts=('c2ffi')
source=('git+https://github.com/rpav/c2ffi#branch=llvm-7.0.0')
md5sums=('SKIP')

pkgver() {
  cd c2ffi
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

_gitroot=GITURL
_gitname=MODENAME

build() {
  cd c2ffi
  cmake -DCMAKE_INSTALL_PREFIX=/usr .
  make
}

package() {
  install -Dm755 c2ffi/bin/c2ffi "$pkgdir/usr/bin/c2ffi"
}

# vim:set ts=2 sw=2 et:
