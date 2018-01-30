# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Point Grey camera driver based on libflycapture2."
url='http://ros.org/wiki/pointgrey_camera_driver'

pkgname='ros-kinetic-pointgrey-camera-driver'
pkgver='0.13.4'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-kinetic-nodelet
  ros-kinetic-wfov-camera-msgs
  ros-kinetic-camera-info-manager
  ros-kinetic-diagnostic-updater
  ros-kinetic-roscpp
  ros-kinetic-dynamic-reconfigure
  ros-kinetic-sensor-msgs
  ros-kinetic-image-exposure-msgs
  ros-kinetic-image-transport
  ros-kinetic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  curl
  libusb
  libraw1394
  dpkg)

ros_depends=(ros-kinetic-image-transport
  ros-kinetic-nodelet
  ros-kinetic-wfov-camera-msgs
  ros-kinetic-camera-info-manager
  ros-kinetic-diagnostic-updater
  ros-kinetic-image-proc
  ros-kinetic-roscpp
  ros-kinetic-dynamic-reconfigure
  ros-kinetic-sensor-msgs
  ros-kinetic-image-exposure-msgs
  ros-kinetic-stereo-image-proc)
depends=(${ros_depends[@]}
  libusb
  libraw1394)

# Git version (e.g. for debugging)
# _tag=release/kinetic/pointgrey_camera_driver/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-drivers-gbp/pointgrey_camera_driver-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="pointgrey_camera_driver-release-release-kinetic-pointgrey_camera_driver-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-drivers-gbp/pointgrey_camera_driver-release/archive/release/kinetic/pointgrey_camera_driver/${pkgver}-${_pkgver_patch}.tar.gz"
		python_fix.patch)
sha256sums=('5071819dbbc690a77113595dba44f1d6ba7baef7cd7ec55c4f120b11ed20e086'
            '64641306a635a6201f2f52546ca1a14fbf7b254d66784d3919c79a35731614d0')

prepare() {
  cd ${srcdir}
  patch -p1 -i python_fix.patch
}

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/kinetic/setup.bash ] && source /opt/ros/kinetic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/kinetic \
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
