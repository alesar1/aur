# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - mavros_msgs defines messages for MAVROS."
url='https://wiki.ros.org/mavros_msgs'

pkgname='ros-noetic-mavros-msgs'
pkgver='1.8.0'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('GPLv3, LGPLv3, BSD')

ros_makedepends=(
  ros-noetic-catkin
  ros-noetic-message-generation
)

makedepends=(
  cmake
  ros-build-tools
  ${ros_makedepends[@]}
)

ros_depends=(
  ros-noetic-message-runtime
  ros-noetic-std-msgs
  ros-noetic-geometry-msgs
  ros-noetic-sensor-msgs
  ros-noetic-geographic-msgs
)

depends=(
  ${ros_depends[@]}
)

_dir="mavros-${pkgver}/mavros_msgs"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/mavlink/mavros/archive/${pkgver}.tar.gz")
sha256sums=('b078a8cdbe5675b93a4e2dc68d71b8f39241942af053722778da1be5d5db3152')

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
