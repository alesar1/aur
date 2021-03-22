# Script generated with create_pkgbuild.py
    # For more information: https://github.com/ros-melodic-arch/ros-build-tools-py3
    pkgdesc="ROS - Cartographer is a system that provides real-time simultaneous localization and mapping (SLAM) in 2D and 3D across multiple platforms and sensor configurations."
    url='https://github.com/googlecartographer/cartographer_ros'

    pkgname='ros-melodic-cartographer-rviz'
    pkgver='1.0.0'
    arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
    pkgrel=4
    license=('Apache 2.0')

    ros_makedepends=(ros-melodic-message-runtime
  ros-melodic-cartographer
  ros-melodic-cartographer-ros
  ros-melodic-rviz
  ros-melodic-catkin
  ros-melodic-cartographer-ros-msgs
  ros-melodic-roslib
  ros-melodic-eigen-conversions
  ros-melodic-roscpp)
    makedepends=('cmake' 'ros-build-tools'
    ${ros_makedepends[@]}
    gcc
  qt5-base)

    ros_depends=(ros-melodic-message-runtime
  ros-melodic-cartographer
  ros-melodic-cartographer-ros
  ros-melodic-rviz
  ros-melodic-cartographer-ros-msgs
  ros-melodic-roslib
  ros-melodic-eigen-conversions
  ros-melodic-roscpp)
    depends=(${ros_depends[@]}
    qt5-base)
    
    # Tarball version (faster download)
    _dir="cartographer_ros-release-release-melodic-cartographer_rviz"
    source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-gbp/cartographer_ros-release/archive/release/melodic/cartographer_rviz/${pkgver}.tar.gz"
      CMakeLists.patch)
sha256sums=('6b9bc233a6e64b0a737797fff2eb0e1b9217cd990cc98f8d62e12c95bee73ef6'
            '7e706acef5e7029a50acee352221a035605ecc51b81d32f795f9c1c9be646556')

  prepare() {
    cd "${srcdir}/${_dir}"
    patch -uN CMakeLists.txt ../CMakeLists.patch || return 1
}


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
                -DPYTHON_BASENAME=.cpython-37m \
                -DSETUPTOOLS_DEB_LAYOUT=OFF
    make
    }

    package() {
    cd "${srcdir}/build"
    make DESTDIR="${pkgdir}/" install
    }
    
