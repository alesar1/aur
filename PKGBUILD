pkgname=mingw-w64-glslang
pkgver=11.4.0
pkgrel=1
pkgdesc='OpenGL and OpenGL ES shader front end and validator (mingw-w64)'
arch=('any')
url='https://github.com/KhronosGroup/glslang'
license=('BSD')
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake' 'python' 'git')
optdepends=('mingw-w64-wine: runtime support')
options=('!strip' '!buildflags' 'staticlibs')
source=(https://github.com/KhronosGroup/glslang/archive/${pkgver}.tar.gz wine-glslangValidator.sh
        git+https://github.com/KhronosGroup/SPIRV-Tools#commit=dc72924cb31cd9f3dbc3eb47e9d926cf641e3a07
        git+https://github.com/KhronosGroup/SPIRV-Headers#commit=dafead1765f6c1a5f9f8a76387dcb2abe4e54acd)
sha256sums=('9bae79c2b640b60474f8944a5ab4aff3af990074636ea2a0a3c97cb86be61dfa' SKIP SKIP SKIP)

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cp -r SPIRV-Tools glslang-${pkgver}/External/spirv-tools
  cp -r SPIRV-Headers glslang-${pkgver}/External/spirv-tools/external/spirv-headers
}

build() {
  cd glslang-$pkgver
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DBUILD_SHARED_LIBS=OFF \
      ..
    make
    sed "s|@TRIPLE@|${_arch}|g" "${srcdir}"/wine-glslangValidator.sh > ${_arch}-glslangValidator
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/glslang-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    # Delete the stuff that's been vendored in. It's not ideal but that's we'll deal with for now.
    mv "${pkgdir}"/usr/${_arch}/bin/spirv-remap.exe .
    rm -r "${pkgdir}"/usr/${_arch}/{bin/spirv*,bin/libSPIRV-*,include/glslang/SPIRV,include/spirv-tools,SPIRV-Tools*,lib/libSPIRV-*,lib/pkgconfig}
    mv spirv-remap.exe "${pkgdir}"/usr/${_arch}/bin/spirv-remap.exe
    ${_arch}-strip -g "${pkgdir}"/usr/${_arch}/lib/*.a
#     ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/bin/*.dll
    install -d "$pkgdir"/usr/bin
    install -m755 ${_arch}-glslangValidator "$pkgdir"/usr/bin
  done
}
