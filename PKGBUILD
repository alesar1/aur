# Maintainer: Anuskuss <anuskuss@googlemail.com>
pkgname=cemu
pkgver=2.0.96
pkgrel=1
pkgdesc='Software to emulate Wii U games and applications on PC'
arch=(x86_64)
url=https://github.com/cemu-project/Cemu
license=(MPL2)
depends=(
	# unbundled vcpkg
	sdl2 pugixml libzip libpng 'wxwidgets-gtk3>=3.2'
)
makedepends=(
	# pkgbuild
	git 'cmake>=3.21.1' make
	# unbundled vcpkg
	rapidjson boost glslang glm 'fmt>=9.1'
	# cemu
	nasm vulkan-headers
	# wxwidgets
	glu
)
optdepends=(
	'vulkan-driver: Vulkan graphics'
)
provides=(cemu)
source=(
	git+https://github.com/cemu-project/Cemu#commit=0030fa44a5bea51d422bd7d5f413bf0bdc8c7b64
	# dependencies
	imgui-1.88.tar.gz::https://github.com/ocornut/imgui/archive/refs/tags/v1.88.tar.gz
	imgui.cmake::https://raw.githubusercontent.com/microsoft/vcpkg/master/ports/imgui/CMakeLists.txt
	imgui.conf::https://raw.githubusercontent.com/microsoft/vcpkg/master/ports/imgui/imgui-config.cmake.in
	# submodules
	git+https://github.com/mozilla/cubeb#commit=dc511c6b3597b6384d28949285b9289e009830ea
	# git+https://github.com/microsoft/vcpkg#commit=1b0252ca70ca2244a711535462c7f981eb439e83
	# git+https://github.com/KhronosGroup/Vulkan-Headers#commit=715673702f5b18ffb8e5832e67cf731468d32ac6
	git+https://github.com/Exzap/ZArchive#commit=48914a07df3c213333c580bb5e5bb3393442ca5b
	# cubeb submodules
	git+https://github.com/arsenm/sanitizers-cmake#commit=aab6948fa863bc1cbe5d0850bc46b9ef02ed4c1a
	git+https://github.com/google/googletest#commit=800f5422ac9d9e0ad59cd860a2ef3a679588acb4
	# patches
	xdg.diff # https://github.com/cemu-project/Cemu/commit/963f9b38349c5d03b26ab2a50ead2ee4e743ca41.patch
)
sha256sums=(
	SKIP
	9f14c788aee15b777051e48f868c5d4d959bd679fc5050e3d2a29de80d8fd32e
	262faed507149c89aab7572fd2c2a968f843ca2900043e30a9c339735ed08a8f
	91528f60cca93d3bce042d2ac16a63169025ec25a34453b49803126ed19153ae
	SKIP
	SKIP
	SKIP
	SKIP
	78aa9187fa6a1819da039c10f1d2681b962329c9fc6d4724eeff5936b3ec02ee
)

pkgver() {
	cd Cemu
	MAJ=$(awk -F '\t' '/LEAD/ {print $NF;exit}' src/Common/version.h)
	MIN=$(awk -F '\t' '/MAJOR/ {print $NF;exit}' src/Common/version.h)
	CNT=$(git rev-list --count HEAD)
	# HASH=$(git rev-parse --short HEAD)
	echo "$MAJ.$MIN.$CNT"
}

prepare() {
	cd Cemu

	# cemu submodules
	for submodule in dependencies/{cubeb,ZArchive}; do
		git config submodule.$submodule.url "$srcdir/${submodule##*/}"
		git submodule update --init $submodule
	done
	pushd dependencies/cubeb
	for submodule in {cmake/sanitizers-cmake,googletest}; do
		git config submodule.$submodule.url "$srcdir/${submodule##*/}"
		git submodule update --init $submodule
	done
	popd

	# unbundled imgui
	sed -i '/imgui/c\add_subdirectory(dependencies/imgui)' CMakeLists.txt
	ln -srf "$srcdir/imgui-1.88" dependencies/imgui
	ln -srf "$srcdir/imgui.cmake" dependencies/imgui/CMakeLists.txt
	ln -srf "$srcdir/imgui.conf" dependencies/imgui/imgui-config.cmake.in

	# glm fix
	sed -i 's/glm::glm/glm/' src/Common/CMakeLists.txt src/input/CMakeLists.txt

	# glslang fix
	sed -i 's/GLSLANG_VERSION_LESS/GLSLANG_VERSION_GREATER/' src/Cafe/HW/Latte/Renderer/Vulkan/RendererShaderVk.cpp

	# xdg base dir support (https://github.com/cemu-project/Cemu/pull/130)
	git apply "$srcdir/xdg.diff"

	# gameProfiles improvement
	sed -i 's|gameProfiles/default|gameProfiles|' src/Cafe/GameProfile/GameProfile.cpp

	# prefer clang (faster)
	which clang   &> /dev/null && [[ -z $CC  ]] && export CC=$(which clang)
	which clang++ &> /dev/null && [[ -z $CXX ]] && export CXX=$(which clang++)
}

build() {
	cd Cemu
	cmake -B build \
	      -DSYSTEM_DATA_PATH=/opt/cemu \
	      -DENABLE_VCPKG=OFF \
	      -DCMAKE_BUILD_TYPE=Release \
	      -DPUBLIC_RELEASE=ON
	make -C build -j $(nproc)
}

package() {
	cd Cemu
	install -D bin/Cemu_release "$pkgdir/usr/bin/cemu"

	mv bin/gameProfiles/default/000500001011000.ini bin/gameProfiles/default/0005000010111000.ini
	for ini in bin/gameProfiles/default/*[A-Z]*; do
		mv $ini bin/gameProfiles/default/$(basename ${ini,,});
	done
	# install -Dm644 bin/gameProfiles/example.ini "$pkgdir/opt/cemu/gameProfiles/example.ini"
	install -Dm644 bin/gameProfiles/default/* -t "$pkgdir/opt/cemu/gameProfiles"
	install -Dm644 bin/resources/sharedFonts/* -t "$pkgdir/opt/cemu/resources/sharedFonts"
	for lang in {ca,de,es,fr,hu,it,ja,ko,nb,nl,pl,pt,ru,sv,tr,zh}; do
		install -Dm644 bin/resources/$lang/cemu.mo "$pkgdir/opt/cemu/resources/$lang/cemu.mo"
	done
	# install -Dm644 bin/shaderCache/info.txt "$pkgdir/opt/cemu/shaderCache/info.txt"

	install -Dm644 src/resource/logo_icon.png "$pkgdir/usr/share/icons/hicolor/128x128/apps/cemu.png"
	sed -i "s|^Icon=info.cemu.Cemu$|Icon=cemu|;s|^Exec=cemu$|Exec=env GDK_BACKEND=x11 /usr/bin/cemu|" dist/linux/info.cemu.Cemu.desktop
	install -Dm644 dist/linux/info.cemu.Cemu.desktop "$pkgdir/usr/share/applications/cemu.desktop"
}
