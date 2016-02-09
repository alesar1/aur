# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - The opencv_apps package, most of code is taken from https://github.com/Itseez/opencv/tree/master/samples/cpp."
url='http://www.ros.org/'

pkgname='ros-indigo-opencv-apps'
pkgver='1.11.11'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-indigo-nodelet
  ros-indigo-roscpp
  ros-indigo-message-generation
  ros-indigo-cv-bridge
  ros-indigo-std-srvs
  ros-indigo-catkin
  ros-indigo-image-transport
  ros-indigo-dynamic-reconfigure)
makedepends=('cmake' 'git' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-indigo-nodelet
  ros-indigo-roscpp
  ros-indigo-cv-bridge
  ros-indigo-message-runtime
  ros-indigo-std-srvs
  ros-indigo-image-transport
  ros-indigo-dynamic-reconfigure)
depends=(${ros_depends[@]})

# Git version (e.g. for debugging)
# _tag=release/indigo/opencv_apps/${pkgver}-${_pkgver_patch}
# _dir=opencv_apps
# source=("${_dir}"::"git+https://github.com/ros-gbp/vision_opencv-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="vision_opencv-release-release-indigo-opencv_apps-${pkgver}-${_pkgver_patch}"
source=("https://github.com/ros-gbp/vision_opencv-release/archive/release/indigo/opencv_apps/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('2a8a74749b8eec323c8a86c787273549fa0fc4775a5d0e6561c3b7bff59afa4a')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/indigo/setup.bash ] && source /opt/ros/indigo/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/indigo \
        -DPYTHON_EXECUTABLE=/usr/bin/python2 \
        -DPYTHON_INCLUDE_DIR=/usr/include/python2.7 \
        -DPYTHON_LIBRARY=/usr/lib/libpython2.7.so \
        -DPYTHON_BASENAME=-python2.7 \
        -DSETUPTOOLS_DEB_LAYOUT=OFF
  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}/" install
}
