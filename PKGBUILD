# MAINTAINER: haagch <christoph.haag@collabora.com>

pkgname=basalt-monado-git
pkgver=r430.b379a7c
pkgrel=1
pkgdesc="Visual-Inertial Mapping with Non-Linear Factor Recovery"
arch=('i686' 'x86_64')
url="https://gitlab.freedesktop.org/mateosss/basalt"
license=('BSD')
depends=('eigen' 'glew' 'libpng' 'lz4' 'bzip2' 'boost' 'gtest' 'opencv' 'libpng' 'lz4' 'bzip2' 'libuvc' 'fmt' 'python')
optdepends=('librealsense: Intel realsense support')
makedepends=('cmake' 'ninja')
_pkgname="basalt"
source=('git+https://gitlab.freedesktop.org/mateosss/basalt.git#branch=xrtslam'
	'fix_basalt_passed_cxx_flags.patch'
	'disable-werror.patch'
	'279c17d9c9eb9374c89489b449f92cb93350e8cd.patch')
sha256sums=('SKIP'
            '7f85404aec5ec73f5dca2cbf68fd05f1578d3036f0e6f05b60af539e304cc600'
            'e83d1f4243d319d0d3acbcfaa501b5b6b97109204194e26f55a6a17df4f9ee07'
            '04d4185309a72be30f508a9961c54b5cf69da323f54ea754482a79a999914b4c')
#options=('debug' '!strip')
options=('!strip')

pkgver() {
cd "$_pkgname"
printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$_pkgname"
	git submodule update --init --recursive

	# Merged by Mateo
	#git checkout thirdparty/CMakeLists.txt
	#git apply ../fix_basalt_passed_cxx_flags.patch

	# Merged by Mateo
	#git checkout CMakeLists.txt
	#git apply ../disable-werror.patch

	# https://github.com/stevenlovegrove/Pangolin/issues/657
	cd thirdparty/Pangolin
	git checkout include/pangolin/utils/picojson.h
	git apply ../../../279c17d9c9eb9374c89489b449f92cb93350e8cd.patch
}

build() {
	msg "Starting CMake"
	cd "$_pkgname"

	cmake \
		-DCMAKE_INSTALL_PREFIX="/usr" \
		-DCMAKE_BUILD_TYPE="RelWithDebInfo" \
		-Bbuild \
		-GNinja

	msg "Building the project"
	ninja -C build -j4 # only increase if you have a lot of ram
}

package() {
	cd "$_pkgname"

	msg "Installing files"
	DESTDIR="${pkgdir}/" ninja -C build install

	cp -Ra "${srcdir}/${_pkgname}"/data/monado/ "${pkgdir}"/usr/etc/basalt/
	for i in "${pkgdir}"/usr/etc/basalt/monado/*.toml
	do
		sed -i "s#/home/mateo/Documents/apps/bsltdeps/basalt/data/#/usr/etc/basalt/#" "$i"
	done

	mkdir -p "$pkgdir"/usr/share/basalt/thirdparty/basalt-headers/thirdparty
	cp -Ra "$srcdir"/basalt/thirdparty/basalt-headers/thirdparty/eigen "$pkgdir"/usr/share/basalt/thirdparty
}
