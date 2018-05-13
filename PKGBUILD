# Script generated with import_catkin_packages.py
# For more information: https://github.com/bchretien/arch-ros-stacks
pkgdesc="ROS - rqt_plot provides a GUI plugin visualizing numeric values in a 2D plot using different plotting backends."
url='http://wiki.ros.org/rqt_plot'

pkgname='ros-melodic-rqt-plot'
pkgver='0.4.8'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(ros-melodic-catkin)
makedepends=('cmake' 'ros-build-tools'
  ${ros_makedepends[@]})

ros_depends=(ros-melodic-rostopic
  ros-melodic-qwt-dependency
  ros-melodic-rqt-gui-py
  ros-melodic-rosgraph
  ros-melodic-std-msgs
  ros-melodic-rqt-py-common
  ros-melodic-qt-gui-py-common
  ros-melodic-rqt-gui
  ros-melodic-python-qt-binding)
depends=(${ros_depends[@]}
  python2-numpy
  python2-rospkg
  python2-matplotlib)

# Git version (e.g. for debugging)
# _tag=release/melodic/rqt_plot/${pkgver}-${_pkgver_patch}
# _dir=${pkgname}
# source=("${_dir}"::"git+https://github.com/ros-gbp/rqt_plot-release.git"#tag=${_tag})
# sha256sums=('SKIP')

# Tarball version (faster download)
_dir="rqt_plot-release-release-melodic-rqt_plot-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/rqt_plot-release/archive/release/melodic/rqt_plot/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('89cebc7715ea72f74783d846cb7149c5b7bbff21ab9bafe65e3d6f2509f75868')

build() {
  # Use ROS environment variables
  source /usr/share/ros-build-tools/clear-ros-env.sh
  [ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

  # Create build directory
  [ -d ${srcdir}/build ] || mkdir ${srcdir}/build
  cd ${srcdir}/build

  # Fix Python2/Python3 conflicts
  /usr/share/ros-build-tools/fix-python-scripts.sh -v 2 ${srcdir}/${_dir}

  # Build project
  cmake ${srcdir}/${_dir} \
        -DCMAKE_BUILD_TYPE=Release \
        -DCATKIN_BUILD_BINARY_PACKAGE=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/ros/melodic \
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
