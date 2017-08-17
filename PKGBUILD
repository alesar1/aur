# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - ROS communications-related packages, including core client libraries (roscpp, rospy) and graph introspection tools (rostopic, rosnode, rosservice, rosparam)."
url='http://www.ros.org/wiki/ros_comm'

pkgname='ros-lunar-ros-comm'
pkgver='1.13.2'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-lunar-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-lunar-rosgraph
  ros-lunar-rospy
  ros-lunar-roswtf
  ros-lunar-rostopic
  ros-lunar-std-srvs
  ros-lunar-rosparam
  ros-lunar-roscpp
  ros-lunar-roslisp
  ros-lunar-topic-tools
  ros-lunar-rosconsole
  ros-lunar-xmlrpcpp
  ros-lunar-ros
  ros-lunar-rosout
  ros-lunar-rostest
  ros-lunar-rosmaster
  ros-lunar-rosbag
  ros-lunar-rosservice
  ros-lunar-message-filters
  ros-lunar-roslaunch
  ros-lunar-rosgraph-msgs
  ros-lunar-rosmsg
  ros-lunar-rosnode)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/lunar/ros_comm/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/ros_comm-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_comm-release-release-lunar-ros_comm-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/ros_comm-release/archive/release/lunar/ros_comm/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('fb9ba8f516451059d1484d57af447d03539dfdef4583bfc8df36fd6d1bbc443a')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/lunar/setup.bash ] && source /opt/ros/lunar/setup.bash

  # Create build directory
  [ -d "${srcdir}/build" ] || mkdir "${srcdir}/build"
  cd "${srcdir}/build"

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 "${srcdir}/${_dir}"

  # Build project
  cmake "${srcdir}/${_dir}" \
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
