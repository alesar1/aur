# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - navfn provides a fast interpolated navigation function that can be used to create plans for a mobile base."
url='http://wiki.ros.org/navfn'

pkgname='ros-indigo-navfn'
pkgver='1.12.6'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-nav-core
  ros-indigo-pcl-ros
  ros-indigo-roscpp
  ros-indigo-geometry-msgs
  ros-indigo-costmap-2d
  ros-indigo-rosconsole
  ros-indigo-pcl-conversions
  ros-indigo-visualization-msgs
  ros-indigo-catkin
  ros-indigo-cmake-modules
  ros-indigo-tf
  ros-indigo-nav-msgs
  ros-indigo-pluginlib)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]}
  netpbm)

ros_depends=(ros-indigo-nav-core
  ros-indigo-pcl-ros
  ros-indigo-roscpp
  ros-indigo-geometry-msgs
  ros-indigo-costmap-2d
  ros-indigo-rosconsole
  ros-indigo-pcl-conversions
  ros-indigo-visualization-msgs
  ros-indigo-tf
  ros-indigo-nav-msgs
  ros-indigo-pluginlib)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/indigo/navfn/${pkgver}-${_pkgver_patch}
# _dir=navfn
# source=("${_dir}"::"git+https://github.com/ros-gbp/navigation-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="navigation-release-release-indigo-navfn-${pkgver}-${_pkgver_patch}"
source=("https://github.com/ros-gbp/navigation-release/archive/release/indigo/navfn/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('1287faebaed0e3f75979c791ca6e2a7c025aa7e79397848205cda1f3fed24ca1')

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
