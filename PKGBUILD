# Contributor Andrew Gunnerson <andrewgunnerson@gmail.com>

pkgname=mingw-w64-lz4
pkgver=1.8.1.2
pkgrel=1
pkgdesc='Very fast lossless compression algorithm (mingw-w64)'
arch=('any')
url='http://lz4.github.io/lz4/'
license=(GPL2)
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake')
options=('!buildflags' 'staticlibs' '!strip')
source=("https://github.com/lz4/lz4/archive/v${pkgver}.tar.gz")
sha256sums=('12f3a9e776a923275b2dc78ae138b4967ad6280863b77ff733028ce89b8123f9')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd lz4-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch}-static && pushd build-${_arch}-static
    ${_arch}-cmake \
        -DLIB_INSTALL_DIR=lib \
        -DBUILD_SHARED_LIBS=OFF \
        ../contrib/cmake_unofficial
    make
    popd

    mkdir -p build-${_arch}-shared && pushd build-${_arch}-shared
    ${_arch}-cmake \
        -DLIB_INSTALL_DIR=lib \
        -DBUILD_SHARED_LIBS=ON \
        ../contrib/cmake_unofficial
    make
    popd
  done
}

package() {
  cd lz4-${pkgver}
  for _arch in ${_architectures}; do
    for _type in static shared; do
      pushd build-${_arch}-${_type}
      make install DESTDIR="${pkgdir}"
      popd
    done
    rm -r "${pkgdir}"/usr/${_arch}/share
    rm -r "${pkgdir}"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "${pkgdir}/usr/${_arch}/bin"/*.dll
    ${_arch}-strip --strip-debug "${pkgdir}/usr/${_arch}/lib"/*.a
  done
}
