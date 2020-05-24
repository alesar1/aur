# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - Controller for a differential drive mobile base."
url='https://github.com/ros-controls/ros_controllers/wiki'

pkgname='ros-noetic-diff-drive-controller'
pkgver='0.15.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-noetic-urdf
	ros-noetic-dynamic-reconfigure
	ros-noetic-realtime-tools
	ros-noetic-catkin
	ros-noetic-nav-msgs
	ros-noetic-controller-interface
	ros-noetic-tf
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-noetic-urdf
	ros-noetic-dynamic-reconfigure
	ros-noetic-realtime-tools
	ros-noetic-nav-msgs
	ros-noetic-controller-interface
	ros-noetic-tf
	ros-noetic-controller-manager
)

depends=(
	${ros_depends[@]}
)

_dir="ros_controllers-${pkgver}/diff_drive_controller"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-controls/ros_controllers/archive/${pkgver}.tar.gz")
sha256sums=('8c19481a28f394d5bf4372fb05a6c638fa2995614f9b0f82b8213ca32d15a4cf')

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
