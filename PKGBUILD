# Maintainer: Philipp A. <flying-sheep@web.de>
_name=resvg
pkgname=$_name-cairo
pkgver=0.9.0
pkgrel=1
pkgdesc='SVG rendering library and CLI (Linked against cairo)'
arch=(i686 x86_64)
url="https://github.com/RazrFalcon/$_name"
license=(MPL2)
provides=(resvg)
conflicts=(resvg)
depends=(gdk-pixbuf2 cairo pango)
makedepends=(cargo)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('8da2c0463cb76ab2a75c597be9f83384daf27a2d6162b95310b8f68763dfcc47')

build() {
	cd "$_name-$pkgver"
	for dir in capi tools/{render,u}svg; do
	(
		msg2 "Building $dir"
		cd "$dir"
		if grep -q cairo-backend Cargo.toml; then
			cargo build --release --features=cairo-backend
		else
			cargo build --release
		fi
	)
	done
	
	msg2 'Building docs'
	cargo doc --release --no-deps -p resvg-capi
}

package() {
	cd "$_name-$pkgver"
	
	for tool in {render,u}svg; do
		install -Dm755 target/release/$tool "$pkgdir/usr/bin/$tool"
	done
	install -Dm755 target/release/libresvg.so "$pkgdir/usr/lib/libresvg.so"
	install -Dm644 capi/include/resvg.h       "$pkgdir/usr/include/resvg.h"
	install -d "$pkgdir/usr/share/doc/resvg"
	cp -r target/doc/* "$pkgdir/usr/share/doc/resvg"
}
