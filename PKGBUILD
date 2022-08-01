# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=ITK
pkgname=(itk python-itk)
pkgver=5.2.1
pkgrel=6
pkgdesc='An open-source, cross-platform library that provides developers with an extensive suite of software tools for image analysis'
arch=('x86_64')
url='https://www.itk.org'
license=('Apache')
depends=(
  dcmtk
  double-conversion
  eigen
  expat
  fftw
  gdcm
  hdf5
  intel-oneapi-mkl
  kwiml-git
  libpng
  libtiff
  ocl-icd
  tbb
  vxl
)
makedepends=(
  clang
  cmake
  git
  gtest
  opencl-headers
  subversion
  swig
)
options=(!emptydirs)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/InsightSoftwareConsortium/ITK/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('cccb64766acaebe49ee2dd8b82b7b5aaa6a35e97f2cc7738ad7f3cd65006b73b880ac59341cd640abd64c2ac665633f01504760071f5492e40aa97e7ba6db2a9')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

build() {
# we build the default modules by default
# you could add additional modules by setting -DModule_<NAME>=ON
  cmake_opts=(
    -DBUILD_SHARED_LIBS=ON
    -DBUILD_TESTING=OFF
    -DCMAKE_BUILD_TYPE=Release
    -DCMAKE_CXX_COMPILER=clang++
    -DCMAKE_C_COMPILER=clang
    -DCMAKE_INSTALL_PREFIX=/usr
    -DCMAKE_SKIP_INSTALL_RPATH=ON
    -DITK_BUILD_DEFAULT_MODULES=ON
    -DITK_USE_MKL=ON
    -DITK_USE_SYSTEM_CASTXML=OFF
    -DITK_USE_SYSTEM_DCMTK=ON
    -DITK_USE_SYSTEM_DOUBLECONVERSION=ON
    -DITK_USE_SYSTEM_EIGEN=ON
    -DITK_USE_SYSTEM_EXPAT=ON
    -DITK_USE_SYSTEM_FFTW=ON
    -DITK_USE_SYSTEM_GDCM=ON
    -DITK_USE_SYSTEM_GOOGLETEST=ON
    -DITK_USE_SYSTEM_HDF5=ON
    -DITK_USE_SYSTEM_JPEG=ON
    -DITK_USE_SYSTEM_KWIML=ON
    -DITK_USE_SYSTEM_MINC=OFF
    -DITK_USE_SYSTEM_PNG=ON
    -DITK_USE_SYSTEM_SWIG=ON
    -DITK_USE_SYSTEM_TBB=ON
    -DITK_USE_SYSTEM_TIFF=ON
    -DITK_USE_SYSTEM_VXL=ON
    -DITK_USE_SYSTEM_ZLIB=ON
    -DITK_WRAP_IMAGE_DIMS="2;3;4"
    -DITK_WRAP_PYTHON=ON
    -DITK_WRAP_complex_double=ON
    -DITK_WRAP_covariant_vector_double=ON
    -DITK_WRAP_double=ON
    -DITK_WRAP_rgb_unsigned_short=ON
    -DITK_WRAP_rgba_unsigned_short=ON
    -DITK_WRAP_signed_char=ON
    -DITK_WRAP_signed_long_long=ON
    -DITK_WRAP_unsigned_long_long=ON
    -DITK_WRAP_unsigned_short=ON
    -DITK_WRAP_vector_double=ON
    -DModule_MorphologicalContourInterpolation=ON
)

  cmake -B "build" -S "${srcdir}/${_pkgname}-${pkgver}" \
    ${cmake_opts[@]} \
    -DITK_USE_GPU=ON
  make -C "${srcdir}/build"
}

package_itk() {
  make -C "${srcdir}/build" DESTDIR="${pkgdir}" install
  # quick fix for https://github.com/InsightSoftwareConsortium/ITK/issues/2960
  rm -rf "${pkgdir}/build"
}

package_python-itk() {
  pkgdesc="${pkgdesc} (Python binding)"
  depends+=(
    itk
    python-numpy
    python-xarray
  )

  make -C "${srcdir}/build" DESTDIR="${srcdir}/dist" install
  install -dm755 "${pkgdir}/usr/lib"
  # quick fix for https://github.com/InsightSoftwareConsortium/ITK/issues/2960
  find "${srcdir}/dist" -type d -name "python$(get_pyver)" -print0 -quit | xargs -0 mv -vt "${pkgdir}/usr/lib"
  python -O -m compileall "${pkgdir}/usr/lib"
}
# vim:set ts=2 sw=2 et:
