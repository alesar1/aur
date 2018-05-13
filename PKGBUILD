# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - This package provides ROS specific hooks for stage."
url='http://ros.org/wiki/stage_ros'

pkgname='ros-melodic-stage-ros'
pkgver='1.8.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-tf
  ros-melodic-std-msgs
  ros-melodic-rostest
  ros-melodic-stage
  ros-melodic-catkin
  ros-melodic-std-srvs
  ros-melodic-roscpp
  ros-melodic-nav-msgs
  ros-melodic-sensor-msgs
  ros-melodic-geometry-msgs)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  boost)

ros_depends=(ros-melodic-tf
  ros-melodic-std-msgs
  ros-melodic-roscpp
  ros-melodic-stage
  ros-melodic-std-srvs
  ros-melodic-geometry-msgs
  ros-melodic-nav-msgs
  ros-melodic-sensor-msgs)
depends=(${ros_depends[@]}
  boost)

# Git version (e.g. for debugging)
# _tag=release/melodic/stage_ros/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/stage_ros-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="stage_ros-release-release-melodic-stage_ros-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/stage_ros-release/archive/release/melodic/stage_ros/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('5762c477b0401c12f43573895f7a94ec3bdfddc4aa9fe3a127d3acc1ce2960d8')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
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
