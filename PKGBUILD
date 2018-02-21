# Maintainer: Benjamin Chrétien <chretien dot b plus aur at gmail dot com>
# Contributor: Fabio Loli <loli_fabio@protonmail.com>
# Contributor: Yuxin Wu <ppwwyyxxc@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: hauptmech
# Contributor: figo.zhang
# Contributor: lubosz
# Contributor: ZiXiS

pkgname=pcl
pkgver=1.8.1
pkgrel=4
pkgdesc="A comprehensive open source library for n-D Point Clouds and 3D geometry processing"
arch=('x86_64' 'i686')
url='http://www.pointclouds.org'
license=('BSD')
depends=('boost' 'eigen' 'flann' 'vtk' 'qhull' 'qt5-base' 'glu' 'qt5-webkit'
  'openmpi' 'python2' 'libxt' 'libharu' 'proj' 'glew' 'netcdf')
makedepends=('cmake' 'gl2ps')
optdepends=('cuda' 'openni2' 'python2-sphinx')
source=("pcl-${pkgver}.tar.gz"::"https://github.com/PointCloudLibrary/pcl/archive/pcl-${pkgver}.tar.gz" "https://github.com/PointCloudLibrary/pcl/commit/f527e5819d6a4d0e8ed46658032975b73d617f60.patch")
sha256sums=('5a102a2fbe2ba77c775bf92c4a5d2e3d8170be53a68c3a76cfc72434ff7b9783' '6d48d5665e393c8f5ef3d8f2ead0c903a5cb63dff0c9aed32975bfb96ab843f2')

prepare() {
  cd "${srcdir}/pcl-pcl-${pkgver}"

  # Patch to support boost 1.5.6:
  # 1. Api change. See http://www.pcl-users.org/PCL-compilation-errors-Please-help-me-td4035209.html
  # This patch is not necessary for now.
  # sed -i "s/boost::property_tree::xml_writer_settings.*/boost::property_tree::xml_writer_settings<std::string> settings = boost::property_tree::xml_writer_make_settings<std::string>('\\\t', 1);/g" io/src/lzf_image_io.cpp
  # 2. Qt moc parser fails on some boost headers files. Try to get around.
  grep -rl '#include <boost/date_time/posix_time/posix_time.hpp>' . \
    | xargs sed -i "s/#include <boost.*posix_time.hpp>/#ifndef Q_MOC_RUN\n\r#include <boost\\/date_time\\/posix_time\\/posix_time.hpp>\n\r#endif/g"

  # Fix the issue about pcl_feature that cannot be used through pkgconfig due to missing pcl_2d-1.8.pc
  # (see https://github.com/PointCloudLibrary/pcl/issues/1978)
  # Patch that was merged into master : https://github.com/PointCloudLibrary/pcl/pull/1979
  patch -Np1 -i ${srcdir}/f527e5819d6a4d0e8ed46658032975b73d617f60.patch

  # [[ -d build ]] && rm -r build
}

build() {
# [[ -d build ]] && rm -r build
#  mkdir -p build && cd build
 # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  cmake ${srcdir}/pcl-pcl-${pkgver} \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCUDA_HOST_COMPILER=/usr/bin/gcc

#  cd "${srcdir}/pcl-pcl-${pkgver}/build"
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR=${pkgdir} install

  install -Dm644 ${srcdir}/pcl-pcl-${pkgver}/LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
