# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - This package contains the ROS bindings for the tf2 library, for both Python and C++."
url='https://www.wiki.ros.org/tf2_ros'

pkgname='ros-noetic-tf2-ros'
pkgver='0.6.5'
_pkgver_patch=0
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=3
license=('BSD')

ros_makedepends=(
	ros-noetic-tf2
	ros-noetic-xmlrpcpp
	ros-noetic-tf2-py
	ros-noetic-catkin
	ros-noetic-actionlib-msgs
	ros-noetic-actionlib
	ros-noetic-std-msgs
	ros-noetic-roscpp
	ros-noetic-rosgraph
	ros-noetic-message-filters
	ros-noetic-tf2-msgs
	ros-noetic-rospy
	ros-noetic-geometry-msgs
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-tf2
	ros-noetic-xmlrpcpp
	ros-noetic-tf2-py
	ros-noetic-actionlib-msgs
	ros-noetic-actionlib
	ros-noetic-std-msgs
	ros-noetic-roscpp
	ros-noetic-rosgraph
	ros-noetic-message-filters
	ros-noetic-tf2-msgs
	ros-noetic-rospy
	ros-noetic-geometry-msgs
)

depends=(
	${ros_depends[@]}
)

_dir="geometry2-${pkgver}/tf2_ros"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/geometry2/archive/${pkgver}.tar.gz")
sha256sums=('9a1268621518fc22afd7b12ef1cf30e6901a57b054535924d1d74fd5d267773a')

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
