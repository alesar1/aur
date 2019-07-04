# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - USB Video Class camera driver."
url='https://wiki.ros.org/libuvc_camera'

pkgname='ros-melodic-libuvc-camera'
pkgver='0.0.10'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-camera-info-manager
  ros-melodic-nodelet
  ros-melodic-roscpp
  ros-melodic-libuvc
  ros-melodic-dynamic-reconfigure
  ros-melodic-sensor-msgs
  ros-melodic-image-transport
  ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-camera-info-manager
  ros-melodic-nodelet
  ros-melodic-roscpp
  ros-melodic-libuvc
  ros-melodic-dynamic-reconfigure
  ros-melodic-sensor-msgs
  ros-melodic-image-transport)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/libuvc_camera/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-drivers-gbp/libuvc_ros-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="libuvc_ros-release-release-melodic-libuvc_camera-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-drivers-gbp/libuvc_ros-release/archive/release/melodic/libuvc_camera/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('3b85b16607514bfd4e5f49d120a5c88e9b69276e250491156f96190fdad3ae57')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}
  # fix file that previous script missed.
  grep -Rl "env python2" ${srcdir}/${_dir} | xargs -r -n 1 -- sed -i 's/env python2/env python3/'

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
        -DPYTHON_EXECUTABLE=/usr/bin/python3 \
        -DPYTHON_INCLUDE_DIR=/usr/include/python3.7m \
        -DPYTHON_LIBRARY=/usr/lib/libpython3.7m.so \
        -DPYTHON_BASENAME=.cpython3.7m \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
