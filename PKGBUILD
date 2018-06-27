# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - A simple viewer for ROS image topics."
url='http://www.ros.org/wiki/image_view'

pkgname='ros-melodic-image-view'
pkgver='1.12.23'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(ros-melodic-rosconsole
  ros-melodic-dynamic-reconfigure
  ros-melodic-camera-calibration-parsers
  ros-melodic-message-filters
  ros-melodic-roscpp
  ros-melodic-catkin
  ros-melodic-stereo-msgs
  ros-melodic-std-srvs
  ros-melodic-cv-bridge
  ros-melodic-image-transport
  ros-melodic-message-generation
  ros-melodic-sensor-msgs
  ros-melodic-nodelet)
makedepends=('cmake' 'ros-build-tools' 'gtkglext'
  ${ros_makedepends[@]}
  gtk2)

ros_depends=(ros-melodic-rosconsole
  ros-melodic-dynamic-reconfigure
  ros-melodic-camera-calibration-parsers
  ros-melodic-image-transport
  ros-melodic-roscpp
  ros-melodic-std-srvs
  ros-melodic-cv-bridge
  ros-melodic-nodelet
  ros-melodic-message-filters)
depends=(${ros_depends[@]}
  gtk2)

# Git version (e.g. for debugging)
# _tag=release/melodic/image_view/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/image_pipeline-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="image_pipeline-release-release-melodic-image_view-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/image_pipeline-release/archive/release/melodic/image_view/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('db828d83d6f3afbd0b9478c6311ea0da425a062269e91a001da1aaadcdabd5b4')

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
