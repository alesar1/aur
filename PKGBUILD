# Maintainer: Alexandre Demers <alexandre.f.demers@gmail.com>

# Careful when upgrading this package! It usually breaks ABI without bumping soname.
_setPrefix="/usr"
_setLibdir="lib32"
_setFullLibdir="${_setPrefix}/${_setLibdir}"
_pkgbasename=glslang

pkgname=lib32-$_pkgbasename
pkgver=11.9.0
pkgrel=1
pkgdesc='OpenGL and OpenGL ES shader front end and validator (32bit)'
arch=('x86_64')
url='https://github.com/KhronosGroup/glslang'
license=('BSD')
depends=(
        "$_pkgbasename>=$pkgver"
        'lib32-gcc-libs'
        )
makedepends=(
        'cmake'
        'ninja'
        'git'
        'python'
        'lib32-spirv-tools'
        'spirv-headers'
        )
options=('staticlibs')
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/KhronosGroup/glslang/archive/${pkgver}.tar.gz)
sha256sums=('d5744adba19eef9ad3d73f524226b39fec559d94cb582cd442e3c5de930004b2')

prepare() {
  echo "Patching if needed"
  cd ${_pkgbasename}-${pkgver}
}

build() {
  export CCFLAGS="-m32"
  export CXXFLAGS="-m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd ${_pkgbasename}-${pkgver}
  export CXXFLAGS+=" -ffat-lto-objects"
  cmake \
    -Bbuild-shared \
    -G Ninja \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib32" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS:STRING=-m32 \
    -DBUILD_SHARED_LIBS=ON
  ninja -Cbuild-shared

  cmake \
    -Bbuild-static \
    -G Ninja \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib32" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_CXX_FLAGS:STRING=-m32 \
    -DBUILD_SHARED_LIBS=OFF
  ninja -Cbuild-static
}

package() {
  cd ${_pkgbasename}-${pkgver}
  DESTDIR="${pkgdir}" ninja -C build-shared install
  DESTDIR="${pkgdir}" ninja -C build-static install

  cd "${pkgdir}/usr/lib32/"
  for lib in *.so; do
    ln -sf "${lib}" "${lib}.0"
  done

  for i in "${pkgdir}/usr/bin/"*; do
    mv "$i" "$i"32
  done

  rm -rf "${pkgdir}"/usr/{include,share}
}

# vim: ts=2 sw=2 et: