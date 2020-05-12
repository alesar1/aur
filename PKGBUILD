# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - System-wide logging mechanism for messages sent to the /rosout topic."
url='https://wiki.ros.org/rosout'

pkgname='ros-melodic-rosout'
pkgver='1.14.5'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-melodic-rosgraph-msgs
	ros-melodic-roscpp
	ros-melodic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-melodic-rosgraph-msgs
	ros-melodic-roscpp
)

depends=(
	${ros_depends[@]}
)

_dir="ros_comm-${pkgver}/rosout"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/ros_comm/archive/${pkgver}.tar.gz")
sha256sums=('49849315ca55247c656a5a50cd5caa5f33f7d212766ff09b62eae48f1dc6c3e7')

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
		-DSETUPTOOLS_DEB_LAYOUT=OFF
	make
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install
}
