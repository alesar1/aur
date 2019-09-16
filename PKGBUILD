# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - diagnostic_aggregator."
url='https://www.wiki.ros.org/diagnostic_aggregator'

pkgname='ros-melodic-diagnostic-aggregator'
pkgver='1.9.3'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-melodic-bondcpp
	ros-melodic-xmlrpcpp
	ros-melodic-rostest
	ros-melodic-diagnostic-msgs
	ros-melodic-bondpy
	ros-melodic-catkin
	ros-melodic-roscpp
	ros-melodic-rospy
	ros-melodic-pluginlib
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-melodic-bondcpp
	ros-melodic-xmlrpcpp
	ros-melodic-diagnostic-msgs
	ros-melodic-bondpy
	ros-melodic-roscpp
	ros-melodic-rospy
	ros-melodic-pluginlib
)

depends=(
	${ros_depends[@]}
)

_dir="diagnostics-${pkgver}/diagnostic_aggregator"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/diagnostics/archive/${pkgver}.tar.gz")
sha256sums=('3b2d3bb7bb333b8685fa084e086c00a044803dac41ff58351161440931d23550')

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
