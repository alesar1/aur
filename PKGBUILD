pkgdesc="ROS - MAVLink message marshaling library."
url='https://wiki.ros.org/mavlink'

pkgname='ros-noetic-mavlink'
pkgver='2021.1.4'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('LGPLv3')

ros_makedepends=()
makedepends=(
    cmake
    ros-build-tools
    ${ros_makedepends[@]}
    python-lxml
    python-future
    python-distribute
    python
)

ros_depends=(
    ros-noetic-catkin
)
depends=(
    ${ros_depends[@]}
    python
)

_dir="mavlink-gbp-release-upstream-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/mavlink/mavlink-gbp-release/archive/upstream/${pkgver}.tar.gz")
sha256sums=('b3e8cf88d981afad80aba5f9c8c9b4d8ea5229e187d839040d8c7e1a9e1d8158')

build() {
    # Use ROS environment variables
    source /usr/share/ros-build-tools/clear-ros-env.sh
    [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

    # Create build directory
    [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
    cd ${srcdir}/build

    # Build project
    cmake ${srcdir}/${_dir} \
          -DCATKIN_BUILD_BINARY_PACKAGE=ON \
          -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
          -DPYTHON_EXECUTABLE=/usr/bin/python \
          -DSETUPTOOLS_DEB_LAYOUT=OFF
    make
}

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
}
