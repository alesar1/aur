# Script generated with create_pkgbuild.py
# For more information: https://github.com/ros-melodic-arch/ros-build-tools-py3
pkgdesc="ROS - The trac_ik_python package contains a python wrapper using SWIG for trac_ik_lib."
url='http://wiki.ros.org/trac_ik_python'

pkgname='ros-melodic-trac-ik-python'
pkgver='1.5.1'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=3
license=('BSD')

ros_makedepends=(
  ros-melodic-catkin
  ros-melodic-rospy
  ros-melodic-trac-ik-lib
  ros-melodic-tf-conversions
)
makedepends=(
  'cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  swig
)

ros_depends=(
  ros-melodic-tf
  ros-melodic-rospy
  ros-melodic-trac-ik-lib
  ros-melodic-tf-conversions
)

depends=(
  ${ros_depends[@]}
  swig
)

_dir="traclabs-trac_ik-f4597094e974/trac_ik_python"
source=("trac_ik-${pkgver}.tar.gz"::"https://bitbucket.org/traclabs/trac_ik/get/${pkgver}.tar.gz")
sha256sums=('67bdfb8dfcdf99c4ff5bd10de3c214527443a5c1ac54c99a0b5590d2692bf676')

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
          -DPYTHON_INCLUDE_DIR=/usr/include/python3.9 \
          -DPYTHON_LIBRARY=/usr/lib/libpython3.9.so \
          -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}

