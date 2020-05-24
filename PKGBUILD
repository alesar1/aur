# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - The dynamicEDT3D library implements an inrementally updatable Euclidean distance transform (EDT) in 3D."
url='https://octomaphub.io'

pkgname='ros-noetic-dynamic-edt-3d'
pkgver='1.9.0'
_pkgver_patch=1
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(ros-noetic-octomap)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-noetic-octomap
  ros-noetic-catkin)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/noetic/dynamic_edt_3d/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/octomap-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="octomap-${pkgver}/dynamicEDT3D"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/OctoMap/octomap/archive/v${pkgver}.tar.gz")
sha256sums=('5f81c9a8cbc9526b2e725251cd3a829e5222a28201b394314002146d8b9214dd')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
        -DPYTHON_EXECUTABLE=/usr/bin/python2 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
