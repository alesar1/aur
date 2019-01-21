# Maintainer: Philipp A. <flying-sheep@web.de>
pkgname=resvg
pkgver=0.5.0
pkgrel=1
pkgdesc='SVG rendering library and CLI'
arch=(i686 x86_64)
url="https://github.com/RazrFalcon/$pkgname"
license=(MPL2)
makedepends=(cargo qt5-base pango)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f9d0dc31de9b6f516c0c5350f22142ab8af6a2d957a729494bb403cff32ba611')

build() {
	cd "$pkgname-$pkgver"
	for dir in capi tools/{render,u}svg; do
	(
		msg2 "Building $dir"
		cd "$dir"
		if grep -q cairo-backend Cargo.toml; then
			cargo build --release --features='qt-backend cairo-backend'
		else
			cargo build --release
		fi
	)
	done
	(
		msg2 "Building tools/viewsvg"
		cd tools/viewsvg
		qmake PREFIX="$pkgdir/usr"
		make
	)
	#(
	#	msg2 "Building tools/kde-dolphin-thumbnailer"
	#	cd tools/kde-dolphin-thumbnailer
	#	mkdir -p build
	#	cd build
	#	cmake .. \
	#		-DCMAKE_INSTALL_PREFIX="$pkgdir/usr" \
	#		-DCMAKE_EXPORT_COMPILE_COMMANDS=ON \
	#		-DCMAKE_INSTALL_PREFIX=$(kf5-config --prefix) \
	#		-DQT_PLUGIN_INSTALL_DIR=$(kf5-config --qt-plugins) \
	#		-DCMAKE_BUILD_TYPE=Release
	#	make
	#)
	
	msg2 'Building docs'
	cargo doc --release --no-deps -p resvg-capi
}

package() {
	cd "$pkgname-$pkgver"
	
	for tool in {render,u}svg; do
		install -Dm755 target/release/$tool "$pkgdir/usr/bin/$tool"
	done
	install -Dm755 tools/viewsvg/viewsvg "$pkgdir/usr/bin/viewsvg"
	#(
	#	cd tools/kde-dolphin-thumbnailer/build
	#	make install
	#)
	install -Dm755 target/release/libresvg.so "$pkgdir/usr/lib/libresvg.so"
	install -Dm644 capi/include/resvg.h       "$pkgdir/usr/include/resvg.h"
	install -d "$pkgdir/usr/share/doc/resvg"
	cp -r target/doc/* "$pkgdir/usr/share/doc/resvg"
}
