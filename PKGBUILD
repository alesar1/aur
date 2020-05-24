# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - Conversion functions between KDL and geometry_msgs types."
url='https://wiki.ros.org/kdl_conversions'

pkgname='ros-noetic-kdl-conversions'
pkgver='1.12.0'
_pkgver_patch=0
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
	ros-noetic-orocos-kdl
	ros-noetic-catkin
	ros-noetic-geometry-msgs
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-orocos-kdl
	ros-noetic-geometry-msgs
)

depends=(
	${ros_depends[@]}
)

_dir="geometry-${pkgver}/kdl_conversions"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/geometry/archive/${pkgver}.tar.gz")
sha256sums=('61a278bdd50e00ea442055d9f70eaf82b5a36916739edca188fa1b71a59507b4')

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
