# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Interface base class for controllers."
url='https://github.com/ros-controls/ros_control/wiki'

pkgname='ros-melodic-controller-interface'
pkgver='0.18.0'
_pkgver_patch=0
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=4
license=('BSD')

ros_makedepends=(ros-melodic-pluginlib
  ros-melodic-roscpp
  ros-melodic-hardware-interface
  ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-pluginlib
  ros-melodic-roscpp
  ros-melodic-hardware-interface)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/controller_interface/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/ros_control-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_control-${pkgver}/controller_interface"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-controls/ros_control/archive/${pkgver}.tar.gz")
sha256sums=('fb4b8e98bdefbc2fdbe31f2e230e983319c2595274ba47afd40d7f1e70a212c4')

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
        -DCATKIN_ENABLE_TESTING=0 \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
        -DPYTHON_EXECUTABLE=/usr/bin/python3 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
