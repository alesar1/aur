# Maintainer: Timon Engelke <aur@timonengelke.de>
pkgdesc="ROS - Messages for representing PR2 state"
url='https://wiki.ros.org/pr2_msgs'

pkgname='ros-melodic-pr2-msgs'
pkgver='1.12.3'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-catkin
  ros-melodic-message-generation
  ros-melodic-message-runtime
  ros-melodic-std-msgs
  ros-melodic-geometry-msgs)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-std-msgs
  ros-melodic-geometry-msgs
  ros-melodic-message-runtime)
depends=(${ros_depends[@]})

_dir="pr2_common-release-release-melodic-pr2_msgs-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/pr2-gbp/pr2_common-release/archive/release/melodic/pr2_msgs/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('9ced0d809f30168f7a97b29da6230c99e19011a5b4416111f02bc62f5e35b8d2')

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
        -DPYTHON_INCLUDE_DIR=/usr/include/python3.7 \
        -DPYTHON_LIBRARY=/usr/lib/libpython3.7.so \
        -DPYTHON_BASENAME=-python3.7 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
