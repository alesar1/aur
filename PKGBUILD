# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - MAVLink communication library."
url='https://wiki.ros.org/libmavconn'

pkgname='ros-noetic-libmavconn'
pkgver='0.33.3'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('GPLv3, LGPLv3, BSD')

ros_makedepends=(ros-noetic-mavlink
  ros-noetic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  boost
  console-bridge)

ros_depends=(ros-noetic-mavlink)
depends=(${ros_depends[@]}
  boost
  console-bridge)

_dir="mavros-${pkgver}/libmavconn"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/mavlink/mavros/archive/${pkgver}.tar.gz"
        "boost-1.70.patch")
sha256sums=('eb4fc2439c78cdc2fa5f2d9ab81abe4f1fa54f9dd45f02b8f2440a231125118e'
            'd7a6c462f9328536ffd9b5b59e3a7e483fc5d403d71114bfc03024c364df233d')

prepare() {
    cd "${srcdir}/${_dir}"
    patch -uN src/tcp.cpp ../../../boost-1.70.patch || return 1
}

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
        -DPYTHON_EXECUTABLE=/usr/bin/python \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
