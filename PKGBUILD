# Maintainer: dmidge <quelque_ri1 at caramail point fr>
pkgname=trisycl-git
pkgver=1.2.1.r
pkgrel=2
pkgdesc="It is the open source implementation of the SYCL Khronos specification, to do some kind of OpenCL like programming in C++ fashion."
arch=('x86_64' 'i686')
url="https://github.com/triSYCL/triSYCL.git"
license=('custom')
depends=('boost' 'boost-libs')
makedepends=('git' 'cmake' 'boost' 'boost-libs')
source=(git+git://github.com/triSYCL/triSYCL)
md5sums=('SKIP')

pkgver() {
  cd triSYCL
  echo "1.2.1.r`git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'`"
}

prepare() {
  git config --global http.postBuffer 5242808000
}

build() {
  cd triSYCL
  mkdir -p build
  cd build
  #cmake .. -DCMAKE_C_COMPILER=gcc -DCMAKE_CXX_COMPILER=g++ -DTRISYCL_OPENCL=ON
  cmake .. -DCMAKE_C_COMPILER=gcc -DCMAKE_CXX_COMPILER=g++
  make -j4 ..
}

package() {
  cd $srcdir/triSYCL/build
  make DESTDIR="$pkgdir" install
}
