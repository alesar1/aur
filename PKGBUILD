# Maintainer: Alexandre Bouvier <contact@amb.tf>
pkgname=yuzu
pkgver=mainline.0.722
pkgrel=1
pkgdesc="Nintendo Switch emulator"
arch=('x86_64')
url="https://yuzu-emu.org/"
license=('GPL2')
depends=('qt5-webengine>=5.12')
makedepends=(
	'boost>=1.73'
	'cmake>=3.15'
	'cpp-httplib-compiled>=0.9.1'
	'cubeb>=r1398'
	'discord-rpc>=3.4.0.r10'
	'dynarmic>=5.r88'
	'ffmpeg>=4.3.1'
	'fmt>=8'
	'git'
	'glslang'
	'libinih>=52'
	'libusb>=1.0.24'
	'libzip>=1.5'
	'lz4>=1.8'
	'ninja'
	'nlohmann-json>=3.8'
	'opus>=1.3'
	'qt5-tools>=5.12'
	'sdl2>=2.0.16'
	'sirit>=r184'
	'vulkan-headers>=1.2.145'
	'xbyak>=5.995.r3'
	'zstd>=1.5'
)
checkdepends=('catch2>=2.13')
source=(
	"git+https://github.com/yuzu-emu/yuzu-mainline.git#tag=${pkgver//./-}"
	'yuzu-mbedtls::git+https://github.com/yuzu-emu/mbedtls.git'
	'citra-soundtouch::git+https://github.com/citra-emu/ext-soundtouch.git'
	'unbundle-catch2.patch'
	'unbundle-cubeb.patch'
	'unbundle-discord-rpc.patch'
	'unbundle-dynarmic.patch'
	'unbundle-httplib.patch'
	'unbundle-inih.patch'
	'unbundle-sirit.patch'
	'unbundle-xbyak.patch'
)
b2sums=(
	'SKIP'
	'SKIP'
	'SKIP'
	'655ef1d50b0cc0ff219bc70e24d8cafec24115392e5402ddd1b7d66afc46d8eb2cafda9448e360c67995d361c8d7cdd022872226fcf0948b51f7ca79d8ac034b'
	'5f1cf15e9486e50fe9416919bf34d9b78e5f02cab96216cef77f365855e4c09eaa74118de89c29f6b7899fa43f07e0f70ef8fb21e47808ef347212ea9ee4ed39'
	'0c9b84444e4c938a04b1f60907fc816cbe8eb8d598a9a4b7e490750d339fac7a48de1b682bc5b00b6c2333b5f4e39b1738287b9168844094e3817703635aad9c'
	'86dcbd45aea4bc68846df5737bbf44362de1e96bade7e86b457b247bcd99f7c4c0c28d3ea396902a904ffe57fe4612a37818a54f17d2df9108a038e3edd45f3c'
	'7508b5e6ca43f44eeecd8b91ca8bdfe3350a37601d8c626ce300435d0e3976ae48068ed014c7b4e1712359ef025fff59fef3a0a3adf5f5bf499129492f840df5'
	'f9df47354efda0ef25685e4dc13426a0f8ee2ba61a7af5af18eaaa00de142d0a60208a3f8c7002ea85922cda666288e156ff81449c0e4d74c0931de481b84092'
	'50eece7824e59195ac9906eb142e10328607bb002fbfd6d9b262abb3fa29b1a0425fc5c33d4ca9ab5a88608ddd72891a592eaa669213db76bdde6142485bc1f6'
	'c3139235f6ddc5e9ddd3fe9fb7d129674b26930a4aa5eeb4ec822585ee3817f3e043610d2facd058c40eff3ec482a3b82782eb9559cd87c335748a0426243da5'
)

prepare() {
	cd yuzu-mainline
	git submodule init externals/{mbedtls,soundtouch}
	git config submodule.mbedtls.url ../yuzu-mbedtls
	git config submodule.soundtouch.url ../citra-soundtouch
	git submodule update
	patch -Np1 < ../unbundle-catch2.patch
	patch -Np1 < ../unbundle-cubeb.patch
	patch -Np1 < ../unbundle-discord-rpc.patch
	patch -Np1 < ../unbundle-dynarmic.patch
	patch -Np1 < ../unbundle-httplib.patch
	patch -Np1 < ../unbundle-inih.patch
	patch -Np1 < ../unbundle-sirit.patch
	patch -Np1 < ../unbundle-xbyak.patch
	rm .gitmodules
}

build() {
	cmake -S yuzu-mainline -B build -G Ninja \
		-DBUILD_REPOSITORY=yuzu-emu/yuzu-mainline \
		-DBUILD_TAG=${pkgver/.0./-} \
		-DCMAKE_BUILD_TYPE=None \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DDISPLAY_VERSION=${pkgver##*.} \
		-DENABLE_COMPATIBILITY_LIST_DOWNLOAD=ON \
		-DENABLE_QT_TRANSLATION=ON \
		-DTITLE_BAR_FORMAT_IDLE="yuzu {}" \
		-DTITLE_BAR_FORMAT_RUNNING="yuzu {} | {}" \
		-DUSE_DISCORD_PRESENCE=ON \
		-DYUZU_ENABLE_COMPATIBILITY_REPORTING=ON \
		-DYUZU_TESTS="$CHECKFUNC" \
		-DYUZU_USE_BUNDLED_BOOST=OFF \
		-DYUZU_USE_BUNDLED_FFMPEG=OFF \
		-DYUZU_USE_BUNDLED_LIBUSB=OFF \
		-DYUZU_USE_BUNDLED_QT=OFF \
		-DYUZU_USE_BUNDLED_SDL2=OFF \
		-DYUZU_USE_EXTERNAL_SDL2=OFF \
		-DYUZU_USE_QT_WEB_ENGINE=ON \
		-Wno-dev
	cmake --build build
}

check() {
	cmake --build build --target test
}

package() {
	depends+=(
		'libavcodec.so'
		'libavutil.so'
		'libboost_context.so'
		'libcubeb.so'
		'libdiscord-rpc.so'
		'libdynarmic.so'
		'libfmt.so'
		'libhttplib.so'
		'libINIReader.so'
		'libsirit.so'
		'libswscale.so'
		'libusb-1.0.so'
		'libzip.so'
	)
	# shellcheck disable=SC2154
	DESTDIR="$pkgdir" cmake --install build
}
