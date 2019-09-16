# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - tf2_tools."
url='https://www.wiki.ros.org/tf2_tools'

pkgname='ros-melodic-tf2-tools'
pkgver='0.6.5'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-tf2-msgs
  ros-melodic-tf2
  ros-melodic-catkin
  ros-melodic-tf2-ros)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-tf2-msgs
  ros-melodic-tf2
  ros-melodic-tf2-ros)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/tf2_tools/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/geometry2-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="geometry2-${pkgver}/tf2_tools"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/geometry2/archive/${pkgver}.tar.gz")
sha256sums=('9a1268621518fc22afd7b12ef1cf30e6901a57b054535924d1d74fd5d267773a')

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
