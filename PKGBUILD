# Maintainer: Timon Engelke <aur@timonengelke.de>
pkgdesc="ROS - The move_base package provides an implementation of an action (see the actionlib package) that, given a goal in the world, will attempt to reach it with a mobile base."
url='https://wiki.ros.org/move_base'

pkgname='ros-melodic-move-base'
pkgver='1.16.6'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=3
license=('BSD')

ros_makedepends=(ros-melodic-nav-core
  ros-melodic-tf
  ros-melodic-catkin
  ros-melodic-roscpp
  ros-melodic-geometry-msgs
  ros-melodic-std-msgs
  ros-melodic-rotate-recovery
  ros-melodic-base-local-planner
  ros-melodic-clear-costmap-recovery
  ros-melodic-rospy
  ros-melodic-navfn
  ros-melodic-costmap-2d
  ros-melodic-message-generation
  ros-melodic-std-srvs
  ros-melodic-actionlib
  ros-melodic-visualization-msgs
  ros-melodic-move-base-msgs
  ros-melodic-cmake-modules
  ros-melodic-dynamic-reconfigure
  ros-melodic-nav-msgs
  ros-melodic-pluginlib)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-nav-core
  ros-melodic-navfn
  ros-melodic-roscpp
  ros-melodic-geometry-msgs
  ros-melodic-message-runtime
  ros-melodic-base-local-planner
  ros-melodic-clear-costmap-recovery
  ros-melodic-rospy
  ros-melodic-std-msgs
  ros-melodic-costmap-2d
  ros-melodic-nav-msgs
  ros-melodic-std-srvs
  ros-melodic-actionlib
  ros-melodic-visualization-msgs
  ros-melodic-move-base-msgs
  ros-melodic-tf
  ros-melodic-dynamic-reconfigure
  ros-melodic-rotate-recovery
  ros-melodic-pluginlib)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/move_base/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/navigation-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="navigation-${pkgver}/move_base"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-planning/navigation/archive/${pkgver}.tar.gz")
sha256sums=('88e3b4433de9645e1132db15b01f436a75a28ebc15cd5b70660b158dd6ba42dd')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
        -DPYTHON_EXECUTABLE=/usr/bin/python3 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
