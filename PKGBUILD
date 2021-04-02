#_                   _ _ _  _ _____ _  _
#| | _______   ____ _| | | || |___  | || |
#| |/ / _ \ \ / / _` | | | || |_ / /| || |_
#|   <  __/\ V / (_| | | |__   _/ / |__   _|
#|_|\_\___| \_/ \__,_|_|_|  |_|/_/     |_|

#Maintainer: kevall474 <kevall474@tuta.io> <https://github.com/kevall474>
#Credits: Laurent Carlier <lordheavym@gmail.com>

pkgname=libclc-rc
pkgdesc='Library requirements of the OpenCL C programming language (rc release)'
url='https://libclc.llvm.org/'
pkgver=12.0.0rc4
versiontag=12.0.0-rc4
pkgrel=1
arch=('x86_64')
license=('MIT')
makedepends=('clang' 'llvm' 'cmake' 'ninja' 'python' 'git' 'spirv-llvm-translator')
conflicts=('libclc' 'libclc-git')
provides=('libclc')
source=("https://github.com/llvm/llvm-project/releases/download/llvmorg-$versiontag/llvm-project-$pkgver.src.tar.xz")
md5sums=('SKIP')

build(){
  cd llvm-project-$pkgver.src/libclc

  rm -rf build

  cmake -H. -G Ninja -Bbuild \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_INSTALL_PREFIX=/usr

  ninja -C build
}

package(){
  DESTDIR="$pkgdir" ninja -C llvm-project-$pkgver.src/libclc/build/ install

  install -Dm644 llvm-project-$pkgver.src/libclc/LICENSE.TXT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
