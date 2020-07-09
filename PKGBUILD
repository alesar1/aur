pkgdesc="ROS - Low-level build system macros and infrastructure for ROS."
url='https://wiki.ros.org/catkin'

pkgname='ros-noetic-catkin'
pkgver='0.8.6'
arch=('any')
pkgrel=2
license=('BSD')

ros_makedepends=(
)

makedepends=(
	cmake
	${ros_makedepends[@]}
	python-catkin-pkg
	python-empy
	python
)

ros_depends=(
)

depends=(
	${ros_depends[@]}
	python-nose
	gtest
	python-catkin-pkg
	python-empy
	gmock
	python
	ros-build-tools
)

_dir="catkin-${pkgver}"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/ros/catkin/archive/${pkgver}.tar.gz"
        "gtest-path.patch"::"https://patch-diff.githubusercontent.com/raw/ros/catkin/pull/1105.patch")
sha256sums=('1a88c99fb0a1bcfe6848cbf9778f1dff8c2587219b09eb56189b38c52c30a486'
            '06513dce4a9ebde7f80e46cd6e5758488e65d8936616f2563a755fbf9e7dcb39')

prepare() {
    cd "$srcdir/$_dir"
    patch --forward --strip=1 --input="${srcdir}/gtest-path.patch"
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
		-DCATKIN_BUILD_BINARY_PACKAGE=OFF \
		-DCMAKE_INSTALL_PREFIX=/opt/ros/noetic \
		-DPYTHON_EXECUTABLE=/usr/bin/python \
		-DSETUPTOOLS_DEB_LAYOUT=OFF
	make
}

package() {
	cd "${srcdir}/build"
	make DESTDIR="${pkgdir}/" install
}
