# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Robot-independent Gazebo plugins for sensors, motors and dynamic reconfigurable components."
url='http://gazebosim.org/tutorials?cat=connect_ros'

pkgname='ros-melodic-gazebo-plugins'
pkgver='2.8.3'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD, Apache 2.0')

ros_makedepends=(ros-melodic-diagnostic-updater
  ros-melodic-rosgraph-msgs
  ros-melodic-std-srvs
  ros-melodic-cv-bridge
  ros-melodic-rosconsole
  ros-melodic-tf
  ros-melodic-std-msgs
  ros-melodic-gazebo-msgs
  ros-melodic-catkin
  ros-melodic-gazebo-dev
  ros-melodic-geometry-msgs
  ros-melodic-dynamic-reconfigure
  ros-melodic-trajectory-msgs
  ros-melodic-nodelet
  ros-melodic-tf2-ros
  ros-melodic-urdf
  ros-melodic-nav-msgs
  ros-melodic-sensor-msgs
  ros-melodic-camera-info-manager
  ros-melodic-angles
  ros-melodic-roscpp
  ros-melodic-polled-camera
  ros-melodic-image-transport
  ros-melodic-message-generation
  ros-melodic-rospy)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-diagnostic-updater
  ros-melodic-rosgraph-msgs
  ros-melodic-std-srvs
  ros-melodic-cv-bridge
  ros-melodic-rosconsole
  ros-melodic-tf
  ros-melodic-std-msgs
  ros-melodic-gazebo-msgs
  ros-melodic-geometry-msgs
  ros-melodic-trajectory-msgs
  ros-melodic-dynamic-reconfigure
  ros-melodic-message-runtime
  ros-melodic-nodelet
  ros-melodic-tf2-ros
  ros-melodic-urdf
  ros-melodic-nav-msgs
  ros-melodic-sensor-msgs
  ros-melodic-camera-info-manager
  ros-melodic-angles
  ros-melodic-roscpp
  ros-melodic-polled-camera
  ros-melodic-image-transport
  ros-melodic-gazebo-dev
  ros-melodic-rospy)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/gazebo_plugins/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/gazebo_ros_pkgs-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="gazebo_ros_pkgs-release-release-melodic-gazebo_plugins-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/gazebo_ros_pkgs-release/archive/release/melodic/gazebo_plugins/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('1ab1e508c9a6898db067493087bf438e726cced9f4024b6f1bb36c644f9e4950')

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
