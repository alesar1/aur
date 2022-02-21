# Maintainer: Łukasz Mariański <lmarianski dot protonmail dot com>
pkgname=alvr
pkgver=17.0.2.r0.g6b8efcce
pkgrel=1
pkgdesc="Experimental Linux version of ALVR. Stream VR games from your PC to your headset via Wi-Fi."
arch=('x86_64')
url="https://github.com/alvr-org/ALVR"
license=('MIT')
groups=()
depends=('vulkan-driver' 'ffmpeg-vulkan' 'gtk3' 'libunwind')
makedepends=('git' 'cargo' 'clang' 'imagemagick' 'vulkan-headers')
provides=("${pkgname}")
conflicts=("${pkgname}")
_tag="v17.0.2"
source=('alvr'::"git+https://github.com/alvr-org/ALVR.git#tag=${_tag}")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/${pkgname}"

	sed -i 's:../../../lib64/libalvr_vulkan_layer.so:libalvr_vulkan_layer.so:' alvr/vulkan-layer/layer/alvr_x86_64.json

	cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
	cd "$srcdir/${pkgname}"
	export RUSTUP_TOOLCHAIN=stable
	export CARGO_TARGET_DIR=target

	export ALVR_ROOT_DIR=/usr

	export ALVR_LIBRARIES_DIR=$ALVR_ROOT_DIR/lib/

	export ALVR_OPENVR_DRIVER_ROOT_DIR=$ALVR_LIBRARIES_DIR/steamvr/alvr/
	export ALVR_VRCOMPOSITOR_WRAPPER_DIR=$ALVR_LIBRARIES_DIR/alvr/

	cargo build \
		--frozen \
		--release \
		-p alvr_server \
		-p alvr_launcher \
		-p alvr_vulkan-layer \
		-p vrcompositor-wrapper

	for res in 16x16 32x32 48x48 64x64 128x128 256x256; do
		mkdir -p "icons/hicolor/${res}/apps/"
		convert 'alvr/launcher/res/launcher.ico' -thumbnail "${res}" -alpha on -background none -flatten "./icons/hicolor/${res}/apps/alvr.png"
	done
}

# check() {
# 	cd "$srcdir/${pkgname}"
#     export RUSTUP_TOOLCHAIN=stable
#     cargo test \
# 		--frozen \
# 		-p alvr_server \
# 		-p alvr_launcher \
# 		-p alvr_vulkan-layer \
# 		-p vrcompositor-wrapper
# }

package() {
	cd "$srcdir/${pkgname}"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm755 target/release/alvr_launcher -t "$pkgdir/usr/bin/"

	# vrcompositor wrapper
	install -Dm755 target/release/vrcompositor-wrapper -t "$pkgdir/usr/lib/alvr/"

	# OpenVR Driver
	install -Dm644 target/release/libalvr_server.so "$pkgdir/usr/lib/steamvr/alvr/bin/linux64/driver_alvr_server.so"
	install -Dm644 alvr/xtask/resources/driver.vrdrivermanifest -t "$pkgdir/usr/lib/steamvr/alvr/"

	# Vulkan Layer
	install -Dm644 target/release/libalvr_vulkan_layer.so -t "$pkgdir/usr/lib/"
	install -Dm644 alvr/vulkan-layer/layer/alvr_x86_64.json -t "$pkgdir/usr/share/vulkan/explicit_layer.d/"

	# resources (presets + dashboard)
	install -d $pkgdir/usr/share/alvr/{dashboard,presets}

	install -Dm644 alvr/xtask/resources/presets/* -t "$pkgdir/usr/share/alvr/presets/"
	cp -ar alvr/dashboard $pkgdir/usr/share/alvr/

	# Misc
	install -Dm644 packaging/freedesktop/alvr.desktop -t "$pkgdir/usr/share/applications"

	install -d $pkgdir/usr/share/icons/hicolor/{16x16,32x32,48x48,64x64,128x128,256x256}/apps/
	cp -r icons/* $pkgdir/usr/share/icons/

	install -Dm644 packaging/firewall/$pkgname-firewalld.xml "$pkgdir/usr/lib/firewalld/services/${_pkgname}.xml"
	install -Dm644 packaging/firewall/ufw-$pkgname -t "$pkgdir/etc/ufw/applications.d/"

	install -Dm755 packaging/firewall/alvr_fw_config.sh -t "$pkgdir/usr/lib/alvr/"
}
