# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>
pkgdesc="IMU complementary filter based on http://www.mdpi.com/1424-8220/15/8/19302"
url='https://wiki.ros.org/imu_complementary_filter?distro=noetic'

pkgname='ros-noetic-imu-complementary-filter'
pkgver=1.2.4
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
  ros-noetic-catkin
  ros-noetic-cmake-modules
  ros-noetic-message-filters
  ros-noetic-roscpp
  ros-noetic-sensor-msgs
  ros-noetic-std-msgs
  ros-noetic-tf
)

makedepends=(
  'cmake'
  'ros-build-tools'
  ${ros_makedepends[@]}
)

ros_depends=(
  ros-noetic-message-filters
  ros-noetic-roscpp
  ros-noetic-sensor-msgs
  ros-noetic-std-msgs
  ros-noetic-tf
)

depends=(
  ${ros_depends[@]}
)

# Tarball version (faster download)
_dir="imu_tools-${pkgver}/imu_complementary_filter "
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ccny-ros-pkg/imu_tools/archive/${pkgver}.tar.gz")
sha256sums=('ff3ddceb244c9f9112682274287b2a0bb15ae019e64bf70aed5c28142d6e0769')

build() {
    # Use ROS environment variables
    source /usr/share/ros-build-tools/clear-ros-env.sh
    [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

    # Create build directory
    [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
    cd ${srcdir}/build

    # Build project
    cmake ${srcdir}/${_dir} \
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
