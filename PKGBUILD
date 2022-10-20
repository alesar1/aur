# Maintainer: Alexandre Bouvier <contact@amb.tf>
pkgname=yuzu
pkgver=mainline.0.1204
pkgrel=1
pkgdesc="Nintendo Switch emulator"
arch=('x86_64')
url="https://yuzu-emu.org/"
license=('GPL3')
depends=(
	'discord-rpc>=3.4'
	'enet>=1.3.13'
	'qt5-multimedia>=5.15'
	'qt5-webengine>=5.15'
)
makedepends=(
	'boost>=1.73'
	'cmake>=3.15'
	'cpp-httplib-compiled>=0.10.8'
	'cpp-jwt>=1.4'
	'cubeb>=r1486'
	'dynarmic>=6.2.3'
	'ffmpeg>=4.3.1'
	'fmt>=9'
	'git'
	'glslang'
	'libinih>=52'
	'libusb>=1.0.24'
	'libva'
	'lz4>=1.8'
	'nlohmann-json>=3.8'
	'opus>=1.3'
	'qt5-tools>=5.15'
	'sdl2>=2.0.18'
	'spirv-headers>=1.2.198'
	'vulkan-headers>=1.3.213'
	'xbyak>=6'
	'zstd>=1.5'
)
checkdepends=(
	'catch2>=2.13.9'
	'catch2<3'
)
source=(
	"yuzu-mainline::git+https://github.com/yuzu-emu/yuzu-mainline.git#tag=${pkgver//./-}"
	'yuzu-mbedtls::git+https://github.com/yuzu-emu/mbedtls.git'
	'sirit::git+https://github.com/ReinUsesLisp/sirit.git'
	'compatibility_list.json.xz'
	'unbundle-cpp-jwt.patch'
	'unbundle-cubeb.patch'
	'unbundle-discord-rpc.patch'
	'unbundle-dynarmic.patch'
	'unbundle-enet.patch'
	'unbundle-httplib.patch'
	'unbundle-inih.patch'
	'unbundle-xbyak.patch'
)
b2sums=(
	'SKIP'
	'SKIP'
	'SKIP'
	'267466b843029b133246986f75d5336b41b0faeb9f52c337a18b3ada3345530a2578d0f940d0391c4a1833ff897f19249065d6505f77a7a5e92ccdaa320f1356'
	'5c8d17aeb525233574e7b02ae1339f0a3caeb9172327cdbb5c6d6a04e0108198eb96227e0c785b690d871a474c5538c28a948acdefb0b63ef36aa399fcea3eb4'
	'5f1cf15e9486e50fe9416919bf34d9b78e5f02cab96216cef77f365855e4c09eaa74118de89c29f6b7899fa43f07e0f70ef8fb21e47808ef347212ea9ee4ed39'
	'0c9b84444e4c938a04b1f60907fc816cbe8eb8d598a9a4b7e490750d339fac7a48de1b682bc5b00b6c2333b5f4e39b1738287b9168844094e3817703635aad9c'
	'ded67432d74377204ce37895688da4f10a67d34f2e49198c8d8161de8ae9f419987be194b7ee139342e37d27fc9599fb5ed82c4b1bdda75edd0f6b2c76d138b8'
	'001189e1072a84a1584cdff534a86b702db1689b2ea309883b4ddd5da2b0399fa4e97a842078749dbbd356de466502935d9023d958cdc8d7bd040904f9254ee6'
	'7508b5e6ca43f44eeecd8b91ca8bdfe3350a37601d8c626ce300435d0e3976ae48068ed014c7b4e1712359ef025fff59fef3a0a3adf5f5bf499129492f840df5'
	'f9df47354efda0ef25685e4dc13426a0f8ee2ba61a7af5af18eaaa00de142d0a60208a3f8c7002ea85922cda666288e156ff81449c0e4d74c0931de481b84092'
	'c3139235f6ddc5e9ddd3fe9fb7d129674b26930a4aa5eeb4ec822585ee3817f3e043610d2facd058c40eff3ec482a3b82782eb9559cd87c335748a0426243da5'
)

prepare() {
	cd yuzu-mainline
	cp ../compatibility_list.json dist/compatibility_list
	git config submodule.mbedtls.url ../yuzu-mbedtls
	git config submodule.sirit.url ../sirit
	git submodule--helper update
	patch -Np1 < ../unbundle-cpp-jwt.patch
	patch -Np1 < ../unbundle-cubeb.patch
	patch -Np1 < ../unbundle-discord-rpc.patch
	patch -Np1 < ../unbundle-dynarmic.patch
	patch -Np1 < ../unbundle-enet.patch
	patch -Np1 < ../unbundle-httplib.patch
	patch -Np1 < ../unbundle-inih.patch
	patch -Np1 < ../unbundle-xbyak.patch
}

build() {
	cmake -S yuzu-mainline -B build \
		-DBUILD_REPOSITORY=yuzu-emu/yuzu-mainline \
		-DBUILD_TAG=${pkgver/.0./-} \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_C_FLAGS_RELEASE="-DNDEBUG" \
		-DCMAKE_CXX_FLAGS_RELEASE="-DNDEBUG" \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DDISPLAY_VERSION=${pkgver##*.} \
		-DENABLE_COMPATIBILITY_LIST_DOWNLOAD=OFF \
		-DENABLE_QT_TRANSLATION=ON \
		-DSIRIT_USE_SYSTEM_SPIRV_HEADERS=ON \
		-DTITLE_BAR_FORMAT_IDLE="yuzu {}" \
		-DTITLE_BAR_FORMAT_RUNNING="yuzu {} | {}" \
		-DUSE_DISCORD_PRESENCE=ON \
		-DYUZU_CHECK_SUBMODULES=OFF \
		-DYUZU_ENABLE_COMPATIBILITY_REPORTING=ON \
		-DYUZU_TESTS="$CHECKFUNC" \
		-DYUZU_USE_BUNDLED_FFMPEG=OFF \
		-DYUZU_USE_BUNDLED_LIBUSB=OFF \
		-DYUZU_USE_BUNDLED_OPUS=OFF \
		-DYUZU_USE_BUNDLED_QT=OFF \
		-DYUZU_USE_BUNDLED_SDL2=OFF \
		-DYUZU_USE_EXTERNAL_SDL2=OFF \
		-DYUZU_USE_QT_WEB_ENGINE=ON \
		-Wno-dev
	cmake --build build
}

check() {
	ctest --test-dir build
}

package() {
	depends+=(
		'libavcodec.so'
		'libavutil.so'
		'libboost_context.so'
		'libcubeb.so'
		'libdynarmic.so'
		'libfmt.so'
		'libhttplib.so'
		'libINIReader.so'
		'libopus.so'
		'libswscale.so'
		'libusb-1.0.so'
		'libva.so'
	)
	# shellcheck disable=SC2154
	DESTDIR="$pkgdir" cmake --install build
}
