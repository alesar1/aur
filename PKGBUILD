# Script generated with import_catkin_packages.py.
# For more information: https://github.com/bchretien/arch-ros-stacks.
pkgdesc="ROS - This package contains the python bindings PyKDL for the Kinematics and Dynamics Library (KDL), distributed by the Orocos Project."
url='http://wiki.ros.org/python_orocos_kdl'

pkgname='ros-melodic-python-orocos-kdl'
pkgver='1.4.0'
_pkgver_patch=0
arch=('any')
pkgrel=1
license=('LGPL')

ros_makedepends=(
	ros-melodic-orocos-kdl
)

makedepends=(
	'cmake'
	'ros-build-tools'
	${ros_makedepends[@]}
	python-sip
	sip
)

ros_depends=(
	ros-melodic-catkin
	ros-melodic-orocos-kdl
)

depends=(
	${ros_depends[@]}
	python-sip
	sip
)

_dir=${pkgname}
source=("${_dir}"::"git+https://github.com/orocos/orocos-kdl-release.git")
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
