# Maintainer: Fangrui Song <i at maskray.me>

pkgname=ccls-git
_pkgname=ccls
pkgver=1820.dac413c3
pkgrel=1
pkgdesc='C/C++ language server supporting cross references, hierarchies, completion and semantic highlighting'
arch=('any')
url='https://github.com/MaskRay/ccls'
license=('Apache')
depends=('clang' 'llvm')
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
}

build() {
  cd $_pkgname
  cmake -H. -Bbuild -DCMAKE_INSTALL_PREFIX=/usr -DSYSTEM_CLANG=on -DUSE_SHARED_LLVM=on -DLLVM_ENABLE_RTTI=on
  cmake --build build
}

package() {
  cd $_pkgname/build
  make DESTDIR="$pkgdir" install
}
