pkgdesc="ROS - PCL (Point Cloud Library) ROS interface stack."
url='https://wiki.ros.org/perception_pcl'

pkgname='ros-noetic-pcl-ros'
pkgver='1.7.3'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('BSD')

ros_makedepends=(
    ros-noetic-catkin
    ros-noetic-cmake-modules
    ros-noetic-rosconsole
    ros-noetic-roslib
)
makedepends=(
    cmake
    ros-build-tools
    ${ros_makedepends[@]}
)

ros_depends=(
    ros-noetic-dynamic-reconfigure
    ros-noetic-geometry-msgs
    ros-noetic-message-filters
    ros-noetic-nodelet
    ros-noetic-nodelet-topic-tools
    ros-noetic-pcl-conversions
    ros-noetic-pcl-msgs
    ros-noetic-pluginlib
    ros-noetic-rosbag
    ros-noetic-roscpp
    ros-noetic-sensor-msgs
    ros-noetic-std-msgs
    ros-noetic-tf
    ros-noetic-tf2
    ros-noetic-tf2-eigen
    ros-noetic-tf2-ros
)
depends=(
    ${ros_depends[@]}
    eigen
    pcl
)

_dir="perception_pcl-${pkgver}/pcl_ros"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-perception/perception_pcl/archive/${pkgver}.tar.gz")
sha256sums=('1047c20bcc559834bf36baebb89b2eeec9ae503f34b53dd414e056291908bb1b')

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
          -DCMAKE_CXX_STANDARD=17 \
          -DCMAKE_PREFIX_PATH=/opt/ros/noetic \
          -DSETUPTOOLS_DEB_LAYOUT=OFF
    make
}

package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
}
