# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - rqt_py_common provides common functionality for rqt plugins written in Python."
url='https://wiki.ros.org/rqt_py_common'

pkgname='ros-noetic-rqt-py-common'
pkgver='0.5.0'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-noetic-std-msgs
	ros-noetic-genmsg
	ros-noetic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-genpy
	ros-noetic-rosbag
	ros-noetic-qt-gui
	ros-noetic-rostopic
	ros-noetic-actionlib
	ros-noetic-python-qt-binding
	ros-noetic-rospy
	ros-noetic-roslib
)

depends=(
	${ros_depends[@]}
)

_dir="rqt-${pkgver}/rqt_py_common"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-visualization/rqt/archive/${pkgver}.tar.gz")
sha256sums=('3f62f90db254e111483b9a7cb9d486d0bf07c863b2a987808dc3636ee7004c22')

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
