# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - rqt_logger_level provides a GUI plugin for configuring the logger level of ROS nodes."
url='https://wiki.ros.org/rqt_logger_level'

pkgname='ros-noetic-rqt-logger-level'
pkgver='0.4.8'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-noetic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-rqt-gui-py
	ros-noetic-rosservice
	ros-noetic-rosnode
	ros-noetic-python-qt-binding
	ros-noetic-rqt-gui
	ros-noetic-rospy
)

depends=(
	${ros_depends[@]}
	python-rospkg
)

_dir="rqt_logger_level-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-visualization/rqt_logger_level/archive/${pkgver}.tar.gz")
sha256sums=('e645a8311a8a461b946a512f7700793c54e2b4d82adddd9328c66f5a86b2fcff')

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

	# Create the build directory.
	[ -d ${srcdir}/build ] || mkdir ${srcdir}/build
	cd ${srcdir}/build

	# Build the project.
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
