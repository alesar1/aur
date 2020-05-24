pkgdesc="ROS - ROS packages for the turtlebot3 simulation (meta package)"
url='https://wiki.ros.org/turtlebot3_simulations'

pkgname='ros-noetic-turtlebot3-simulations'
pkgver='1.2.0'
arch=('any')
pkgrel=1
license=('Apache-2.0')

ros_makedepends=(
	ros-noetic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
    ros-noetic-turtlebot3-fake
    ros-noetic-turtlebot3-gazebo
)

depends=(
	${ros_depends[@]}
)

_dir="turtlebot3_simulations-${pkgver}/turtlebot3_simulations"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ROBOTIS-GIT/turtlebot3_simulations/archive/${pkgver}.tar.gz")
sha256sums=('6fbb4cf74b9777c3be3a751dd8d638df2570dd4478681b5eadf51dee32f57c5b')

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
