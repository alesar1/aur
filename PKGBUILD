# Maintainer: Michael Schubert <mschu.dev at gmail> github.com/mschubert/PKGBUILDs
pkgname=libsbml
pkgver=5.19.7
pkgrel=1
pkgdesc="XML-based description language for computational models in systems biology"
url="https://github.com/sbmlteam/libsbml"
license=('LGPL')
arch=('i686' 'x86_64')
depends=('libxml2')
optdepends=('bzip2' 'python' 'perl' 'ruby' 'java-runtime') # 'octave' 'mono'
makedepends=('cmake' 'swig' 'python' 'perl' 'ruby' 'java-environment') # 'octave', 'mono'
options=('!libtool')
source=($pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz)
sha256sums=('61cbdf1a86aefbc002ac5a0cf9c0f3f91eca2ae8aa5c3e7ef78be0f5a84426c5')

build() {
  cd "$srcdir"/$pkgname-$pkgver
  ./autogen.sh

  mkdir -p "$srcdir"/build-$pkgver && cd "$srcdir"/build-$pkgver
  cmake ../$pkgname-$pkgver \
    -DCMAKE_INSTALL_PREFIX:PATH=/usr \
    -DCMAKE_INSTALL_LIBDIR:PATH=lib \
    -DWITH_LIBXML=ON \
    -DWITH_EXPAT=OFF \
    -DWITH_BZIP2=ON \
    -DWITH_ZLIB=ON \
    -DWITH_PYTHON=ON \
    -DENABLE_LAYOUT=ON \
    -DENABLE_RENDER=ON \
    -DENABLE_QUAL=ON \
    -DENABLE_MULTI=ON \
    -DENABLE_COMP=ON \
    -DENABLE_FBC=ON \
    -DENABLE_GROUPS=ON

  make
}

package() {
  cd "$srcdir"/build-$pkgver
  DESTDIR="$pkgdir" cmake -DCMAKE_INSTALL_PREFIX=/usr -P cmake_install.cmake

  rm "$pkgdir"/usr/share/cmake/Modules/Find{ZLIB,LIBXML,BZ2}.cmake
}
