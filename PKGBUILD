# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - PCL (Point Cloud Library) ROS interface stack."
url='http://ros.org/wiki/perception_pcl'

pkgname='ros-lunar-pcl-ros'
pkgver='1.5.3'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-lunar-tf2-eigen
  ros-lunar-message-filters
  ros-lunar-roscpp
  ros-lunar-nodelet-topic-tools
  ros-lunar-genmsg
  ros-lunar-tf
  ros-lunar-pcl-conversions
  ros-lunar-roslib
  ros-lunar-rosconsole
  ros-lunar-sensor-msgs
  ros-lunar-cmake-modules
  ros-lunar-dynamic-reconfigure
  ros-lunar-pluginlib
  ros-lunar-pcl-msgs
  ros-lunar-std-msgs
  ros-lunar-nodelet
  ros-lunar-catkin
  ros-lunar-rosbag)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  proj
  vtk
  qt5-base
  pcl
  eigen3)

ros_depends=(ros-lunar-tf2-eigen
  ros-lunar-message-filters
  ros-lunar-roscpp
  ros-lunar-tf
  ros-lunar-pcl-conversions
  ros-lunar-nodelet-topic-tools
  ros-lunar-pluginlib
  ros-lunar-pcl-msgs
  ros-lunar-dynamic-reconfigure
  ros-lunar-sensor-msgs
  ros-lunar-std-msgs
  ros-lunar-nodelet
  ros-lunar-rosbag)
depends=(${ros_depends[@]}
  proj
  vtk
  qt5-base
  pcl
  eigen3)

# Git version (e.g. for debugging)
# _tag=release/lunar/pcl_ros/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/perception_pcl-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="perception_pcl-release-release-lunar-pcl_ros-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/perception_pcl-release/archive/release/lunar/pcl_ros/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('7c0c1140335b2ced45f9074120ff2dc9eae0f12619a4fa07573292f33284b332')

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
