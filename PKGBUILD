pkgname=mingw-w64-paraview
_majordotminor=5.7
pkgver=${_majordotminor}.1
_pkgver=${pkgver}
pkgrel=1
pkgdesc='Parallel Visualization Application using VTK (mingw-w64)'
arch=('any')
url='http://www.paraview.org'
license=('custom')
depends=('mingw-w64-qt5-xmlpatterns' 'mingw-w64-qt5-tools' 'mingw-w64-boost' 'mingw-w64-glew' 'mingw-w64-freetype2' 'mingw-w64-libxml2' 'mingw-w64-libtiff' 'mingw-w64-jsoncpp' 'mingw-w64-hdf5' 'mingw-w64-lz4' 'mingw-w64-proj' 'mingw-w64-cgns' 'mingw-w64-netcdf' 'mingw-w64-double-conversion' 'mingw-w64-protobuf')
makedepends=('mingw-w64-cmake' 'mingw-w64-eigen' 'mingw-w64-utf8cpp' 'mingw-w64-wine' 'mingw-w64-wine-qt' 'protobuf')
options=('!buildflags' '!strip' 'staticlibs')
source=("http://paraview.org/files/v${_majordotminor}/ParaView-v${_pkgver}.tar.gz")
sha256sums=('b6102dcd0099a3a23fe1bbf2d562e21d981e068b252381ad5db4392bfd871e47')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd "${srcdir}/ParaView-v${_pkgver}"
  cd VTK
  curl -L https://gitlab.kitware.com/vtk/vtk/merge_requests/5734.patch | patch -p1
  curl -L https://gitlab.kitware.com/vtk/vtk/merge_requests/5925.patch | patch -p1
}

build() {
  cd "${srcdir}/ParaView-v${_pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DPARAVIEW_INSTALL_DEVELOPMENT_FILES=ON \
      -DPARAVIEW_ENABLE_PYTHON=OFF \
      -DPARAVIEW_ENABLE_EMBEDDED_DOCUMENTATION=OFF \
      -DPARAVIEW_USE_VTKM=OFF \
      -DPARAVIEW_USE_EXTERNAL=ON \
      -DVTK_MODULE_USE_EXTERNAL_VTK_gl2ps=OFF \
      -DVTK_MODULE_USE_EXTERNAL_VTK_libharu=OFF \
      -Dqt_xmlpatterns_executable=/usr/bin/${_arch}-xmlpatterns \
      ..
    WINEPATH="/usr/${_arch}/bin;${PWD}/bin" make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/ParaView-v${_pkgver}/build-${_arch}
    make install/fast DESTDIR="$pkgdir"
    rm -r "$pkgdir"/usr/${_arch}/share
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
