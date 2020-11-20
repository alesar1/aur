pkgdesc="ROS - roslaunch scripts for starting the TurtleBot3"
url='https://wiki.ros.org/turtlebot3_bringup'

pkgname='ros-melodic-turtlebot3-bringup'
pkgver='1.2.4'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=1
license=('Apache-2.0')

ros_makedepends=(
	ros-melodic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-melodic-roscpp
    ros-melodic-std-msgs
    ros-melodic-diagnostic-msgs
    ros-melodic-sensor-msgs
    ros-melodic-turtlebot3-msgs
    ros-melodic-turtlebot3-description
    ros-melodic-turtlebot3-teleop
    ros-melodic-joint-state-publisher
    ros-melodic-robot-state-publisher
    ros-melodic-rosserial-python
    ros-melodic-hls-lfcd-lds-driver
)

depends=(
	${ros_depends[@]}
)

_dir="turtlebot3-${pkgver}/turtlebot3_bringup"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ROBOTIS-GIT/turtlebot3/archive/${pkgver}.tar.gz")
sha256sums=('a75bd9e8f007cafcd3a0a7fd80a5428dfec69d13dcbd0a5bc018fac3154649fc')

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
