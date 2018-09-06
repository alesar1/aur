# Maintainer: Timon Engelke <aur@timonengelke.de>
pkgdesc="ROS - Components of MoveIt used for manipulation."
url='http://moveit.ros.org'

pkgname='ros-melodic-moveit-ros-manipulation'
pkgver='0.10.1'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-moveit-core
  ros-melodic-moveit-msgs
  ros-melodic-tf
  ros-melodic-moveit-ros-move-group
  ros-melodic-pluginlib
  ros-melodic-roscpp
  ros-melodic-dynamic-reconfigure
  ros-melodic-moveit-ros-planning
  ros-melodic-actionlib
  ros-melodic-rosconsole
  ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
  eigen)

ros_depends=(ros-melodic-moveit-core
  ros-melodic-moveit-msgs
  ros-melodic-tf
  ros-melodic-moveit-ros-move-group
  ros-melodic-pluginlib
  ros-melodic-roscpp
  ros-melodic-dynamic-reconfigure
  ros-melodic-moveit-ros-planning
  ros-melodic-actionlib
  ros-melodic-rosconsole)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/moveit_ros_manipulation/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/moveit-release.git"#tag=${_tag})
# sha256sums=('7de3f6be5c047901bfe324986686e8d8370be6ebfef96738a8ad3f3365b570f4')

# Tarball version (faster download)
_dir="moveit-release-release-melodic-moveit_ros_manipulation-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/moveit-release/archive/release/melodic/moveit_ros_manipulation/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('6a1d0a44ffb53fa7e8de994bc0dc281d325a88f341872cd283394ced0436caf8')

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
        -DPYTHON_INCLUDE_DIR=/usr/include/python3.7m \
        -DPYTHON_LIBRARY=/usr/lib/libpython3.7m.so \
        -DPYTHON_BASENAME=-python3.7m \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
