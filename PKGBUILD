# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>

pkgdesc="IMU rviz plugin"
url='https://wiki.ros.org/rviz_imu_plugin?distro=noetic'

pkgname='ros-noetic-rviz-imu-plugin'
pkgver='1.2.3'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
  ros-noetic-catkin
  ros-noetic-roscpp
  ros-noetic-rviz
)
makedepends=(
  cmake
  ros-build-tools
  ${ros_makedepends[@]}
  qt5-base
)

ros_depends=(
  ros-noetic-roscpp
  ros-noetic-rviz
)
depends=(
  ${ros_depends[@]}
  qt5-base
)

# Tarball version (faster download)
_dir="imu_tools-${pkgver}/rviz_imu_plugin "
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ccny-ros-pkg/imu_tools/archive/${pkgver}.tar.gz")
sha256sums=('8c5eb01a2bcb8855e6fb5bb66795a0d5b1eb6c4586282bf177f3552f72e357af')

build() {
    # Use ROS environment variables
    source /usr/share/ros-build-tools/clear-ros-env.sh
    [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

    # Create build directory
    [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
    cd ${srcdir}/build

    # Build project
    cmake ${srcdir}/${_dir}\
            -DCMAKE_BUILD_TYPE=Release \
            -DCATKIN_BUILD_BINARY_PACKAGE=ON \
            -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
            -DPYTHON_EXECUTABLE=/usr/bin/python3 \
            -DSETUPTOOLS_DEB_LAYOUT=OFF
    make
}

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
}
