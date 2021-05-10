# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>

pkgdesc="ROS package for real-time 6DOF SLAM using a 3D LIDAR"
url='https://github.com/koide3/hdl_graph_slam'

pkgname='ros-noetic-hdl-graph-slam-git'
pkgver=r146.4adf72e
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD 2-Clause License')

ros_makedepends=(ros-noetic-catkin)
makedepends=(
  cmake
  ros-build-tools
  ${ros_makedepends[@]}
  g2o
  openmp
)


ros_depends=(
    ros-noetic-ndt-omp
    ros-noetic-fast-gicp
    ros-noetic-pcl-ros    
    ros-noetic-cpp-common
    ros-noetic-rospy
    ros-noetic-geodesy
    ros-noetic-nodelet
    ros-noetic-nmea-msgs
    ros-noetic-sensor-msgs
    ros-noetic-message-generation
)
depends=(
  ${ros_depends[@]}
)

source=(
    $pkgname::git://github.com/koide3/hdl_graph_slam.git
    https://github.com/koide3/hdl_graph_slam/pull/191.patch
    https://github.com/koide3/hdl_graph_slam/pull/192.patch
)
sha256sums=(
    'SKIP'
    'SKIP'
    'SKIP'
)

prepare() {
    cd "${srcdir}/${pkgname}"
    patch --forward --strip=1 --input="${srcdir}/191.patch"
    patch --forward --strip=1 --input="${srcdir}/192.patch"
}

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    # Use ROS environment variables
    [ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

    # Build project
    cmake -Wno-dev -B build -S ${pkgname} \
            -DCMAKE_BUILD_TYPE=Release \
            -DCATKIN_ENABLE_TESTING=0 \
            -DCATKIN_BUILD_BINARY_PACKAGE=ON \
            -DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
            -DPYTHON_EXECUTABLE=/usr/bin/python3 \
            -DSETUPTOOLS_DEB_LAYOUT=OFF \
            -DCMAKE_CXX_STANDARD=17
    make -C build
}

package() {
    cd build
    make DESTDIR="${pkgdir}/" install
}
