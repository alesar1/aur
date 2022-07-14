pkgdesc="ROS - Controller for executing joint-space trajectories on a group of joints."
url='https://github.com/ros-controls/ros_controllers/wiki'

pkgname='ros-noetic-joint-trajectory-controller'
pkgver='0.20.0'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
    ros-noetic-catkin
    ros-noetic-angles
    ros-noetic-control-msgs
    ros-noetic-hardware-interface
    ros-noetic-pluginlib
    ros-noetic-trajectory-msgs
)

makedepends=(
    cmake
    ros-build-tools
    ${ros_makedepends[@]}
)

ros_depends=(
    ros-noetic-actionlib
    ros-noetic-control-toolbox
    ros-noetic-controller-interface
    ros-noetic-realtime-tools
    ros-noetic-roscpp
    ros-noetic-urdf
    ros-noetic-controller-manager
    ros-noetic-xacro
    ros-noetic-rostest
    ros-noetic-std-msgs
)

depends=(
    ${ros_depends[@]}
    boost
)

_dir="ros_controllers-${pkgver}/joint_trajectory_controller"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-controls/ros_controllers/archive/${pkgver}.tar.gz")
sha256sums=('c9a42db66d8a90604f255592fb0f2c20d315a235a0a20aaa07a1e045dcda6d27')

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
        -DSETUPTOOLS_DEB_LAYOUT=OFF \

    make
}

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
}
