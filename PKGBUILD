# Script generated with create_pkgbuild.py
# For more information: https://github.com/ros-melodic-arch/ros-build-tools-py3
pkgdesc="ROS - Controller for executing joint-space trajectories on a group of joints."
url='https://github.com/ros-controls/ros_controllers/wiki'

pkgname='ros-melodic-joint-trajectory-controller'
pkgver='0.17.1'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
  ros-melodic-angles
  ros-melodic-roscpp
  ros-melodic-trajectory-msgs
  ros-melodic-cmake-modules
  ros-melodic-catkin
  ros-melodic-realtime-tools
  ros-melodic-control-toolbox
  ros-melodic-actionlib
  ros-melodic-urdf
  ros-melodic-controller-interface
  ros-melodic-control-msgs
  ros-melodic-pluginlib
  ros-melodic-hardware-interface
)

makedepends=(
  'cmake' 'ros-build-tools'
  ${ros_makedepends[@]}
)

ros_depends=(
  ros-melodic-angles
  ros-melodic-roscpp
  ros-melodic-trajectory-msgs
  ros-melodic-realtime-tools
  ros-melodic-control-toolbox
  ros-melodic-actionlib
  ros-melodic-urdf
  ros-melodic-controller-interface
  ros-melodic-control-msgs
  ros-melodic-pluginlib
  ros-melodic-hardware-interface
)

depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/melodic/effort_controllers/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/ros_controllers-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="ros_controllers-${pkgver}/joint_trajectory_controller"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-controls/ros_controllers/archive/${pkgver}.tar.gz")
sha256sums=('373e5b00522a7e0343fa6b7ffe95ccf7fe6bd44622fe28534a05e2abcd8dc6ba')

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

