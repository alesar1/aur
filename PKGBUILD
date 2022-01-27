# Maintainer: Alexandre Demers <alexandre.f.demers@gmail.com>

# Careful when upgrading this package! It usually breaks ABI without bumping soname.
_setPrefix="/usr"
_setLibdir="lib32"
_setFullLibdir="${_setPrefix}/${_setLibdir}"
_pkgbasename=glslang

pkgname=lib32-$_pkgbasename
pkgver=11.7.1
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
        )
options=('staticlibs')
# Get the commits from known_good.json for every release
source=(
        ${_pkgbasename}-${pkgver}.tar.gz::https://github.com/KhronosGroup/glslang/archive/${pkgver}.tar.gz
        git+https://github.com/KhronosGroup/SPIRV-Tools#commit=1fbed83c8aab8517d821fcb4164c08567951938f
        git+https://github.com/KhronosGroup/SPIRV-Headers#commit=449bc986ba6f4c5e10e32828783f9daef2a77644
        )
sha256sums=(
        'ab2e2ddc507bb418b9227cbe6f443eb06e89e2387944f42026d82c0b4ef79b0a'
        'SKIP'
        'SKIP'
        )

prepare() {
  # Sadly, glslang requires super specific versions of SPIRV headers and
  # spirv-tools and so I'm afraid that for the time being we'll have to use
  # their vendored version until we figure out a good way to use system
  # libraries.
  cp -r SPIRV-Tools ${_pkgbasename}-${pkgver}/External/spirv-tools
  cp -r SPIRV-Headers ${_pkgbasename}-${pkgver}/External/spirv-tools/external/spirv-headers

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
    -DCMAKE_C_FLAGS:STRING=-m32 \
    -DCMAKE_CXX_FLAGS:STRING=-m32 \
    -DBUILD_SHARED_LIBS=ON
  ninja -Cbuild-shared

  cmake \
    -Bbuild-static \
    -G Ninja \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib32" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_C_FLAGS:STRING=-m32 \
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

  # Delete the stuff that's been vendored in. It's not ideal but that's we'll deal with for now.
  mv "${pkgdir}"/usr/bin/spirv-remap .
  rm -r "${pkgdir}"/usr/{bin/spirv*,include/spirv-tools,lib32/cmake/SPIRV-Tools*,lib32/libSPIRV-*,lib32/pkgconfig}
  mv spirv-remap "${pkgdir}"/usr/bin/spirv-remap

  for i in "${pkgdir}/usr/bin/"*; do
    mv "$i" "$i"32
  done

  rm -rf "${pkgdir}"/usr/{include,share}
}

# vim: ts=2 sw=2 et: