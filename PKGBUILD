# Maintainer: Alexandre Bouvier <contact@amb.tf>
_pkgname=cemu
pkgname=$_pkgname-git
pkgver=2.0.2.r11.g12b6830
pkgrel=1
pkgdesc="Nintendo Wii U emulator"
arch=('x86_64')
url="https://cemu.info/"
license=('MPL2')
depends=(
	'discord-rpc'
	'imgui'
	'pugixml'
	'wxwidgets-gtk3>=3.2'
)
makedepends=(
	'boost'
	'cmake>=3.21.1'
	'cubeb'
	'curl'
	'fmt>=9.1'
	'git'
	'glm'
	'glslang'
	'glu'
	'libglvnd'
	'libpng'
	'libzip'
	'nasm'
	'openssl'
	'rapidjson'
	'sdl2'
	'vulkan-headers>=1.3.225'
	'zarchive>=0.1.2'
	'zlib'
	'zstd'
)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=(
	"$_pkgname::git+https://github.com/cemu-project/Cemu.git"
	"$_pkgname.bash"
)
b2sums=(
	'SKIP'
	'dbb107d6eea8ce57e8275fb57fc24c10cbc490b1a95a80a4ae1676306d56ea4380a2b4350bea9045fdafb4730be31d060eabcc8f2e74afd3787e80564f79fca4'
)

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd $_pkgname
	sed -i '/CMAKE_INTERPROCEDURAL_OPTIMIZATION/d' CMakeLists.txt
	sed -i '/discord-rpc/d' CMakeLists.txt
	sed -i '/FMT_HEADER_ONLY/d' src/Common/precompiled.h
	sed -i 's/glm::glm/glm/' src/{Common,input}/CMakeLists.txt
	sed -i 's/GLSLANG_VERSION_LESS_OR_EQUAL_TO/GLSLANG_VERSION_GREATER_OR_EQUAL_TO/' src/Cafe/HW/Latte/Renderer/Vulkan/RendererShaderVk.cpp
	sed -i '/target_precompile_headers/c target_compile_options(CemuCommon PUBLIC -include Common/precompiled.h)' src/Common/CMakeLists.txt
}

build() {
	cmake -S $_pkgname -B build \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_C_FLAGS_RELEASE="-DNDEBUG" \
		-DCMAKE_CXX_FLAGS_RELEASE="-DNDEBUG" \
		-DENABLE_VCPKG=OFF \
		-DPUBLIC_RELEASE=ON \
		-Wno-dev
	cmake --build build
}

package() {
	depends+=(
		'libboost_filesystem.so'
		'libboost_program_options.so'
		'libcubeb.so'
		'libcurl.so'
		'libfmt.so'
		'libzarchive.so'
		'libzip.so'
		'libzstd.so'
	)
	cd $_pkgname
	mv bin/Cemu{_release,}
	# shellcheck disable=SC2154
	install -d "$pkgdir"/usr/lib/$_pkgname
	cp -dr --no-preserve=ownership -t "$pkgdir"/usr/lib/$_pkgname bin/*
	install -Dm644 -t "$pkgdir"/usr/share/applications dist/linux/info.cemu.Cemu.desktop
	install -Dm644 -t "$pkgdir"/usr/share/metainfo dist/linux/info.cemu.Cemu.metainfo.xml
	install -Dm644 src/resource/logo_icon.png "$pkgdir"/usr/share/icons/hicolor/128x128/apps/info.cemu.Cemu.png
	install -D ../$_pkgname.bash "$pkgdir"/usr/bin/$_pkgname
}
