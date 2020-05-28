pkgdesc="ROS - Bindings between Numpy and Eigen using Boost.Python"
url='https://github.com/stack-of-tasks/eigenpy'

pkgname='ros-noetic-eigenpy'
pkgver='2.3.2'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=()
makedepends=(
  'cmake'
  'ros-build-tools'
  ${ros_makedepends[@]}
  git
  doxygen
)

ros_depends=()
depends=(
  ${ros_depends[@]}
  python
  python-numpy
  eigen
  boost
)

_dir="eigenpy_catkin-release-upstream-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ipab-slmc/eigenpy_catkin-release/archive/upstream/${pkgver}.tar.gz")
sha256sums=('36b9daa9d023284c9c755f00869dddfbf3a3e3b39fc612207806fb7977dd0a11')

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
