# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - The actionlib_tutorials package."
url='https://wiki.ros.org/actionlib/Tutorials'

pkgname='ros-noetic-actionlib-tutorials'
pkgver='0.2.0'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-noetic-catkin
	ros-noetic-message-generation
	ros-noetic-std-msgs
	ros-noetic-actionlib
	ros-noetic-actionlib-msgs
	ros-noetic-roscpp
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-message-runtime
	ros-noetic-actionlib
	ros-noetic-roscpp
)

depends=(
	${ros_depends[@]}
)

_dir="common_tutorials-${pkgver}/actionlib_tutorials"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/common_tutorials/archive/${pkgver}.tar.gz")
sha256sums=('61b4f75a846264debe4f8eb4c7090f21079c5cd368f85124cf13eca6340570f3')

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
