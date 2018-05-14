# Maintainer: Fangrui Song <i at maskray.me>

pkgname=ccls-git
_pkgname=ccls
pkgver=1589.89af70fe
pkgrel=1
pkgdesc='C/C++ language server supporting cross references, hierarchies, completion and semantic highlighting'
arch=('any')
url='https://github.com/MaskRay/ccls'
license=('MIT')
depends=('clang')
makedepends=("cmake" "git" "llvm")
source=('git+https://github.com/MaskRay/ccls.git')
md5sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd $_pkgname
  git submodule update --init
  install -d build
}

build() {
  cd $_pkgname
  cmake -H. -Bbuild -DCMAKE_INSTALL_PREFIX=/usr -DSYSTEM_CLANG=on -DUSE_SHARED_LLVM=on
  cmake --build build
}

package() {
  cd $_pkgname/build
  make DESTDIR="$pkgdir" install
}
