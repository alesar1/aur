# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Tests for MAVROS package."
url='https://github.com/mavlink/mavros'

pkgname='ros-melodic-test-mavros'
pkgver='0.32.2'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('BSD, GPLv3, LGPLv3')

ros_makedepends=(ros-melodic-mavros-extras
  ros-melodic-std-msgs
  ros-melodic-eigen-conversions
  ros-melodic-angles
  ros-melodic-roscpp
  ros-melodic-catkin
  ros-melodic-tf2-ros
  ros-melodic-geometry-msgs
  ros-melodic-control-toolbox
  ros-melodic-mavros
  ros-melodic-cmake-modules)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  eigen3)

ros_depends=(ros-melodic-mavros-extras
  ros-melodic-mavros
  ros-melodic-eigen-conversions
  ros-melodic-std-msgs
  ros-melodic-roscpp
  ros-melodic-tf2-ros
  ros-melodic-geometry-msgs
  ros-melodic-control-toolbox)
depends=(${ros_depends[@]}
  eigen3)

# Git version (e.g. for debugging)
# _tag=release/melodic/test_mavros/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/mavlink/mavros-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="mavros-${pkgver}/test_mavros"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/mavlink/mavros/archive/${pkgver}.tar.gz")
sha256sums=('d5e04661f88896a9a77f22a083023ce5e8e13dd71c1f8f1b7d5e187b3bf6c4f8')

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
