pkgdesc="ROS - 3D visualization tool for ROS."
url='https://wiki.ros.org/rviz'

pkgname='ros-melodic-rviz'
pkgver='1.13.12'
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h')
pkgrel=4
license=('BSD, Creative Commons')

ros_makedepends=(
	ros-melodic-std-srvs
	ros-melodic-rosbag
	ros-melodic-tf
	ros-melodic-nav-msgs
	ros-melodic-urdf
	ros-melodic-python-qt-binding
	ros-melodic-resource-retriever
	ros-melodic-laser-geometry
	ros-melodic-std-msgs
	ros-melodic-interactive-markers
	ros-melodic-message-filters
	ros-melodic-rospy
	ros-melodic-roslib
	ros-melodic-image-transport
	ros-melodic-cmake-modules
	ros-melodic-catkin
	ros-melodic-rosconsole
	ros-melodic-roscpp
	ros-melodic-visualization-msgs
	ros-melodic-sensor-msgs
	ros-melodic-map-msgs
	ros-melodic-pluginlib
	ros-melodic-geometry-msgs
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
	yaml-cpp
	eigen
	ogre-1.9
	assimp
	mesa
	tinyxml2
	urdfdom-headers
	qt5-base
)

ros_depends=(
	ros-melodic-std-srvs
	ros-melodic-rosbag
	ros-melodic-tf
	ros-melodic-nav-msgs
	ros-melodic-urdf
	ros-melodic-python-qt-binding
	ros-melodic-resource-retriever
	ros-melodic-laser-geometry
	ros-melodic-media-export
	ros-melodic-std-msgs
	ros-melodic-interactive-markers
	ros-melodic-message-filters
	ros-melodic-rospy
	ros-melodic-roslib
	ros-melodic-image-transport
	ros-melodic-rosconsole
	ros-melodic-roscpp
	ros-melodic-visualization-msgs
	ros-melodic-sensor-msgs
	ros-melodic-map-msgs
	ros-melodic-pluginlib
	ros-melodic-geometry-msgs
)

depends=(
	${ros_depends[@]}
	yaml-cpp
	eigen
	ogre-1.9
	assimp
	mesa
	tinyxml2
	urdfdom-headers
	qt5-base
	sip
	python-sip
)

_dir="rviz-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-visualization/rviz/archive/${pkgver}.tar.gz")
sha256sums=('d9d3071d3528d74cb3f466724e48597db28c0ec05dbc84c71cae88d001524d4a')

build() {
	# Use ROS environment variables.
	source /usr/share/ros-build-tools/clear-ros-env.sh
	[ -f /opt/ros/melodic/setup.bash ] && source /opt/ros/melodic/setup.bash

	# Fixes OGRE Path issue
	PKG_CONFIG_PATH=/opt/OGRE-1.9/lib/pkgconfig:$PKG_CONFIG_PATH

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
