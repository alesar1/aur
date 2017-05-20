# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - camera_calibration_parsers contains routines for reading and writing camera calibration parameters."
url='http://ros.org/wiki/camera_calibration_parsers'

pkgname='ros-lunar-camera-calibration-parsers'
pkgver='1.11.12'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-lunar-sensor-msgs
  ros-lunar-catkin
  ros-lunar-roscpp
  ros-lunar-roscpp-serialization
  ros-lunar-rosconsole)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  boost
  yaml-cpp
  pkg-config)

ros_depends=(ros-lunar-sensor-msgs
  ros-lunar-roscpp
  ros-lunar-roscpp-serialization)
depends=(${ros_depends[@]}
  boost
  yaml-cpp)

# Git version (e.g. for debugging)
# _tag=release/lunar/camera_calibration_parsers/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/image_common-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="image_common-release-release-lunar-camera_calibration_parsers-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/image_common-release/archive/release/lunar/camera_calibration_parsers/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('3d4662ee499b060e3d086279b2c6c07fd9e83e1402127993600f10d5be8b2195')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/lunar/setup.bash ] && source /opt/ros/lunar/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/lunar \
        -DPYTHON_EXECUTABLE=/usr/bin/python2 \
        -DPYTHON_INCLUDE_DIR=/usr/include/python2.7 \
        -DPYTHON_LIBRARY=/usr/lib/libpython2.7.so \
        -DPYTHON_BASENAME=-python2.7 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
