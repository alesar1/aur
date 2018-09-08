# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - Robot-independent Gazebo plugins for sensors, motors and dynamic reconfigurable components."
url='http://gazebosim.org/tutorials?cat=connect_ros'

pkgname='ros-melodic-gazebo-plugins'
pkgver='2.8.4'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD, Apache 2.0')

ros_makedepends=(
	ros-melodic-message-generation
	ros-melodic-angles
	ros-melodic-rospy
	ros-melodic-rosgraph-msgs
	ros-melodic-gazebo-dev
	ros-melodic-roscpp
	ros-melodic-std-srvs
	ros-melodic-catkin
	ros-melodic-tf2-ros
	ros-melodic-geometry-msgs
	ros-melodic-urdf
	ros-melodic-rosconsole
	ros-melodic-gazebo-msgs
	ros-melodic-trajectory-msgs
	ros-melodic-nav-msgs
	ros-melodic-image-transport
	ros-melodic-tf
	ros-melodic-nodelet
	ros-melodic-std-msgs
	ros-melodic-sensor-msgs
	ros-melodic-diagnostic-updater
	ros-melodic-camera-info-manager
	ros-melodic-dynamic-reconfigure
	ros-melodic-cv-bridge
	ros-melodic-polled-camera
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-melodic-angles
	ros-melodic-rospy
	ros-melodic-rosgraph-msgs
	ros-melodic-gazebo-dev
	ros-melodic-roscpp
	ros-melodic-std-srvs
	ros-melodic-message-runtime
	ros-melodic-tf2-ros
	ros-melodic-geometry-msgs
	ros-melodic-urdf
	ros-melodic-rosconsole
	ros-melodic-gazebo-msgs
	ros-melodic-trajectory-msgs
	ros-melodic-nav-msgs
	ros-melodic-image-transport
	ros-melodic-tf
	ros-melodic-nodelet
	ros-melodic-std-msgs
	ros-melodic-sensor-msgs
	ros-melodic-diagnostic-updater
	ros-melodic-camera-info-manager
	ros-melodic-dynamic-reconfigure
	ros-melodic-cv-bridge
	ros-melodic-polled-camera
)

depends=(
	${ros_depends[@]}
)

_dir=${pkgname}
source=("${_dir}"::"git+https://github.com/ros-gbp/gazebo_ros_pkgs-release.git")
sha256sums=('SKIP')

prepare() {
	cd ${srcdir}/${_dir}
	git checkout upstream
	_pkgname=$(echo ${pkgname} | sed 's/ros-lunar-//' | sed 's/-/_/g')

	if [ -d ${_pkgname} ]; then
		git subtree split -P ${_pkgname} --branch ${_pkgname}
		git checkout ${_pkgname}
	fi
}

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
