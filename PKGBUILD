pkgname=mingw-w64-paraview
pkgver=5.10.1
pkgrel=1
pkgdesc='Parallel Visualization Application using VTK (mingw-w64)'
arch=('any')
url='https://www.paraview.org'
license=('custom')
depends=('mingw-w64-qt5-xmlpatterns' 'mingw-w64-qt5-tools' 'mingw-w64-qt5-svg' 'mingw-w64-boost' 'mingw-w64-glew' 'mingw-w64-freetype2' 'mingw-w64-libxml2' 'mingw-w64-libtiff' 'mingw-w64-jsoncpp' 'mingw-w64-hdf5' 'mingw-w64-lz4' 'mingw-w64-cgns' 'mingw-w64-netcdf' 'mingw-w64-double-conversion' 'mingw-w64-protobuf' 'mingw-w64-libtheora' 'mingw-w64-pugixml' 'mingw-w64-gl2ps' 'mingw-w64-libharu')
makedepends=('mingw-w64-cmake' 'mingw-w64-eigen' 'mingw-w64-utf8cpp' 'mingw-w64-cli11' 'mingw-w64-exprtk-git' 'mingw-w64-wine' 'mingw-w64-wine-qt' 'protobuf')
options=('!buildflags' '!strip' 'staticlibs')
source=("${url}/files/v${pkgver:0:4}/ParaView-v${pkgver}.tar.xz")
sha256sums=('520e3cdfba4f8592be477314c2f6c37ec73fb1d5b25ac30bdbd1c5214758b9c2')

_architectures="x86_64-w64-mingw32"

prepare() {
  cd "${srcdir}/ParaView-v${pkgver}"
  sed -i "/MFTranscodeContainerType_MPEG4/d" VTK/IO/Movie/vtkMP4Writer.cxx
  # We have a patched libharu
  sed -i "s|2.4.0|2.3.0|" VTK/ThirdParty/libharu/CMakeLists.txt
  # _isatty
  curl -L https://github.com/gsjaardema/seacas/commit/175e2ecf.patch | patch -p6 -d VTK/ThirdParty/ioss/vtkioss
}

build() {
  cd "${srcdir}/ParaView-v${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DPARAVIEW_USE_PYTHON=OFF \
      -DPARAVIEW_ENABLE_EMBEDDED_DOCUMENTATION=OFF \
      -DPARAVIEW_USE_VTKM=OFF \
      -DPARAVIEW_BUILD_WITH_EXTERNAL=ON \
      -DVTK_MODULE_USE_EXTERNAL_VTK_ioss=OFF \
      -DVTK_MODULE_USE_EXTERNAL_VTK_fmt=OFF \
      -DVTK_MODULE_USE_EXTERNAL_ParaView_vtkcatalyst=OFF \
      -DVTK_QT_VERSION=5 \
      -Dqt_xmlpatterns_executable=/usr/bin/${_arch}-xmlpatterns \
      ..
    WINEPATH="/usr/${_arch}/bin;${PWD}/bin" make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/ParaView-v${pkgver}/build-${_arch}
    make install/fast DESTDIR="$pkgdir"
    rm -r "$pkgdir"/usr/${_arch}/share
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
