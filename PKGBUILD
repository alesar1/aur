# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - This is a set of tools for recording from and playing back ROS message without relying on the ROS client library."
url='https://wiki.ros.org/rosbag_storage'

pkgname='ros-melodic-rosbag-storage'
pkgver='1.14.3'
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-melodic-rostest
	ros-melodic-roscpp-traits
	ros-melodic-catkin
	ros-melodic-roslz4
	ros-melodic-cpp-common
	ros-melodic-roscpp-serialization
	ros-melodic-rostime
	ros-melodic-pluginlib
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
	console-bridge
	gpgme
	openssl
	boost
	bzip2
)

ros_depends=(
	ros-melodic-roscpp-traits
	ros-melodic-roslz4
	ros-melodic-cpp-common
	ros-melodic-roscpp-serialization
	ros-melodic-rostime
	ros-melodic-pluginlib
)

depends=(
	${ros_depends[@]}
	console-bridge
	gpgme
	openssl
	boost
	bzip2
)

_dir="ros_comm-${pkgver}/tools/rosbag_storage"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/ros_comm/archive/${pkgver}.tar.gz")
sha256sums=('3e49bef96b8a0f9684e5c4f1736d171e9c8842a3979d5d3c6442b53698e8167f')

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
