# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - This contains CvBridge, which converts between ROS Image messages and OpenCV images."
url='https://www.wiki.ros.org/cv_bridge'

pkgname='ros-melodic-cv-bridge'
pkgver='1.13.0'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-melodic-sensor-msgs
	ros-melodic-rosconsole
	ros-melodic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
	boost
	python
	python-numpy
	opencv3-opt
)

ros_depends=(
	ros-melodic-sensor-msgs
	ros-melodic-rosconsole
)

depends=(
	${ros_depends[@]}
	boost
	python
	python-numpy
	opencv3-opt
)

_dir="vision_opencv-${pkgver}/cv_bridge"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-perception/vision_opencv/archive/${pkgver}.tar.gz"
  "endian-fix.patch")
sha256sums=('c8db35dbb6b470cdedb45195f725bc2cfda7f0dc3155e16a5a37e4b48e29fa59'
  'bc06dbe12f26015c6bce73b2c95123851415d5662c17ef87267737dd433bb22b')

prepare() {
  cd "${srcdir}/${_dir}"
  patch -uN src/module.hpp ../../../endian-fix.patch || return 1
}

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

	# Create the build directory.
	[ -d ${srcdir}/build ] || mkdir ${srcdir}/build
	cd ${srcdir}/build

	# Fix Python2/Python3 conflicts.
	/usr/share/ros-build-tools/fix-python-scripts.sh -v 3 ${srcdir}/${_dir}

	# Build the project.
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
