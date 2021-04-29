# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - rqt_tf_tree provides a GUI plugin for visualizing the ROS TF frame tree."
url='https://wiki.ros.org/rqt_tf_tree'

pkgname='ros-noetic-rqt-tf-tree'
pkgver='0.6.0'
_pkgver_patch=0
arch=('any')
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
	ros-noetic-tf2
	ros-noetic-rqt-gui-py
	ros-noetic-rqt-graph
	ros-noetic-rqt-gui
	ros-noetic-tf2-ros
	ros-noetic-tf2-msgs
	ros-noetic-python-qt-binding
	ros-noetic-qt-dotgraph
	ros-noetic-rospy
	ros-noetic-geometry-msgs
)

depends=(
	${ros_depends[@]}
	python-rospkg
)

_dir="rqt_tf_tree-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros-visualization/rqt_tf_tree/archive/${pkgver}.tar.gz"
        "https://github.com/ros-visualization/rqt_tf_tree/pull/28.patch"
        "https://github.com/ros-visualization/rqt_tf_tree/pull/30.patch")
sha256sums=('0d5996679310b747ac49d52c39e7869870458065b8ba118ed48b105d9f252604'
        'SKIP'
        'SKIP')

prepare() {
    cd "$srcdir/$_dir"
    patch --forward --strip=1 --input="${srcdir}/28.patch"
    patch --forward --strip=1 --input="${srcdir}/30.patch"
}

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
