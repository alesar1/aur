# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - ROS packaging system."
url='https://www.wiki.ros.org/ROS'

pkgname='ros-noetic-ros'
pkgver='1.15.2'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
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
	ros-noetic-rosmake
	ros-noetic-rosboost-cfg
	ros-noetic-rosbuild
	ros-noetic-rosclean
	ros-noetic-rosbash
	ros-noetic-catkin
	ros-noetic-rosunit
	ros-noetic-mk
	ros-noetic-roscreate
	ros-noetic-roslang
	ros-noetic-roslib
)

depends=(
	${ros_depends[@]}
)

_dir="ros-${pkgver}/ros"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/ros/archive/${pkgver}.tar.gz")
sha256sums=('596bb5e04ece0ad0662d6d2ee9b4223aaa890770e83c7310ec71bf9c0c3c7b5e')

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/noetic/setup.bash ] && source /opt/ros/noetic/setup.bash

	# Create the build directory.
	[ -d ${srcdir}/build ] || mkdir ${srcdir}/build
	cd ${srcdir}/build

	# Build the project.
	cmake ${srcdir}/${_dir} \
		-DCMAKE_BUILD_TYPE=Release \
		-DCATKIN_BUILD_BINARY_PACKAGE=ON \
		-DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
		-DPYTHON_EXECUTABLE=/usr/bin/python3 \
		-DSETUPTOOLS_DEB_LAYOUT=OFF
	make
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install
}
