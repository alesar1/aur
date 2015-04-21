# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - This is a set of tools for recording from and playing back ROS message without relying on the ROS client library."
url='http://www.ros.org/'

pkgname='ros-indigo-rosbag-storage'
pkgver='1.11.11'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-roscpp-serialization
  ros-indigo-rostime
  ros-indigo-catkin
  ros-indigo-cpp-common
  ros-indigo-roscpp-traits
  ros-indigo-roslz4)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]}
  bzip2
  boost
  console-bridge)

ros_depends=(ros-indigo-roslz4
  ros-indigo-roscpp-serialization
  ros-indigo-rostime
  ros-indigo-cpp-common
  ros-indigo-roscpp-traits)
depends=(${ros_depends[@]}
  bzip2
  boost
  console-bridge)

_tag=release/indigo/rosbag_storage/${pkgver}-${_pkgver_patch}
_dir=rosbag_storage
source=("${_dir}"::"git+https://github.com/ros-gbp/ros_comm-release.git"#tag=${_tag})
md5sums=('SKIP')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/indigo/setup.bash ] && source /opt/ros/indigo/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/indigo \
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
