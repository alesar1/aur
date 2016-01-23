# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - This package allows you to publish the state of a robot to tf."
url='http://wiki.ros.org/robot_state_publisher'

pkgname='ros-jade-robot-state-publisher'
pkgver='1.12.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-jade-cmake-modules
  ros-jade-orocos-kdl
  ros-jade-kdl-parser
  ros-jade-roscpp
  ros-jade-catkin
  ros-jade-tf2-ros
  ros-jade-tf2-kdl
  ros-jade-tf
  ros-jade-sensor-msgs
  ros-jade-rosconsole
  ros-jade-rostime)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]}
  eigen3)

ros_depends=(ros-jade-orocos-kdl
  ros-jade-kdl-parser
  ros-jade-roscpp
  ros-jade-catkin
  ros-jade-tf2-ros
  ros-jade-tf2-kdl
  ros-jade-tf
  ros-jade-sensor-msgs
  ros-jade-rosconsole
  ros-jade-rostime)
depends=(${ros_depends[@]}
  eigen3)

_tag=release/jade/robot_state_publisher/${pkgver}-${_pkgver_patch}
_dir=robot_state_publisher
source=("${_dir}"::"git+https://github.com/ros-gbp/robot_state_publisher-release.git"#tag=${_tag})
md5sums=('SKIP')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/jade/setup.bash ] && source /opt/ros/jade/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/jade \
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
