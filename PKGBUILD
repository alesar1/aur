# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - image_pipeline fills the gap between getting raw images from a camera driver and higher-level vision processing."
url='http://www.ros.org/wiki/image_pipeline'

pkgname='ros-melodic-image-pipeline'
pkgver='1.12.23'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('BSD')

ros_makedepends=(
	ros-melodic-catkin
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
)

ros_depends=(
	ros-melodic-image-rotate
	ros-melodic-stereo-image-proc
	ros-melodic-depth-image-proc
	ros-melodic-image-view
	ros-melodic-image-proc
	ros-melodic-image-publisher
	ros-melodic-camera-calibration
)

depends=(
	${ros_depends[@]}
)

_dir="image_pipeline-release-release-melodic-image_pipeline-${pkgver}-${_pkgver_patch}"
source=("${pkgname}-${pkgver}-${_pkgver_patch}.tar.gz"::"https://github.com/ros-gbp/image_pipeline-release/archive/release/melodic/image_pipeline/${pkgver}-${_pkgver_patch}.tar.gz")
sha256sums=('a6e5d39fd81ad438d67124e646c3da415e14afb3d0e59931e0d40433a6c1ea77')

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
