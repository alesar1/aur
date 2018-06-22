# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - This package contains a C++ parser for the Unified Robot Description Format (URDF), which is an XML format for representing a robot model."
url='http://ros.org/wiki/urdf'

pkgname='ros-melodic-urdf'
pkgver='1.13.1'
_pkgver_patch=1
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(ros-melodic-urdf-parser-plugin
  ros-melodic-roscpp
  ros-melodic-catkin
  ros-melodic-pluginlib
  ros-melodic-rosconsole-bridge
  ros-melodic-cmake-modules
  ros-melodic-rostest)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  tinyxml2
  urdfdom
  tinyxml
  urdfdom-headers)

ros_depends=(ros-melodic-pluginlib
  ros-melodic-roscpp
  ros-melodic-rosconsole-bridge)
depends=(${ros_depends[@]}
  tinyxml2
  urdfdom
  tinyxml
  urdfdom-headers)

# Git version (e.g. for debugging)
# _tag=release/melodic/urdf/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/urdf-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="urdf-release-release-melodic-urdf-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/urdf-release/archive/release/melodic/urdf/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('2d16536bc8a59e01339b034539828f411245a3b170abc65d8e1f99f1305ae4f0')

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
