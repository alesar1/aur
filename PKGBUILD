# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - Generate the ROS interfaces in Python."
url='http://www.ros.org/'

pkgname='ros-ardent-rosidl-generator-py'
pkgver='0.4.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('Apache License 2.0')

ros_makedepends=()
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-ardent-rosidl-cmake
  ros-ardent-rmw-implementation-cmake
  ros-ardent-rosidl-parser
  ros-ardent-rmw-implementation
  ros-ardent-ament-cmake
  ros-ardent-rosidl-typesupport-interface
  ros-ardent-rosidl-generator-c
  ros-ardent-ament-index-python
  ros-ardent-python-cmake-module
  ros-ardent-rosidl-typesupport-c)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/ardent/rosidl_generator_py/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros2-gbp/rosidl-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="rosidl-release-release-ardent-rosidl_generator_py-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros2-gbp/rosidl-release/archive/release/ardent/rosidl_generator_py/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('a69a3d365b6546d2d4670ed48ca1f6242dc6002f4d85d2527847f9a1e93e5d2a')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/ardent/setup.bash ] && source /opt/ros/ardent/setup.bash

  # Create build directory
  [ -d "${srcdir}/build" ] || mkdir "${srcdir}/build"
  cd "${srcdir}/build"

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 3 "${srcdir}/${_dir}"

  export PYTHONPATH=/opt/ros/ardent/lib/python3.6/site-packages
  export AMENT_PREFIX_PATH=/opt/ros/ardent

  # Build project
  cmake "${srcdir}/${_dir}" \
        -DCMAKE_BUILD_TYPE=Release \
        -DBUILD_TESTING=Off \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/ardent
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
