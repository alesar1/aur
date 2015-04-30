# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Stereo and single image rectification and disparity processing."
url='http://www.ros.org/wiki/stereo_image_proc'

pkgname='ros-indigo-stereo-image-proc'
pkgver='1.12.13'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(ros-indigo-image-geometry
  ros-indigo-cv-bridge
  ros-indigo-catkin
  ros-indigo-image-transport
  ros-indigo-stereo-msgs
  ros-indigo-sensor-msgs
  ros-indigo-image-proc
  ros-indigo-dynamic-reconfigure
  ros-indigo-message-filters
  ros-indigo-nodelet)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]}
  opencv)

ros_depends=(ros-indigo-image-geometry
  ros-indigo-cv-bridge
  ros-indigo-image-transport
  ros-indigo-stereo-msgs
  ros-indigo-sensor-msgs
  ros-indigo-image-proc
  ros-indigo-dynamic-reconfigure
  ros-indigo-message-filters
  ros-indigo-nodelet)
depends=(${ros_depends[@]}
  opencv)

_tag=release/indigo/stereo_image_proc/${pkgver}-${_pkgver_patch}
_dir=stereo_image_proc
source=("${_dir}"::"git+https://github.com/ros-gbp/image_pipeline-release.git"#tag=${_tag})
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
