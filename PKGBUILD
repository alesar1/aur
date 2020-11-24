# Maintainer: Frank Großgasteiger <frank@grossgasteiger.de>
pkgname=xgifwallpaper
pkgver=0.3.0
pkgrel=5
pkgdesc="Use an animated GIF as wallpaper on X11 systems"
arch=("x86_64")
url="https://github.com/calculon102/xgifwallpaper"
license=("GPL-3.0")
depends=("gcc-libs" "glibc" "libx11" "libxau" "libxcb" "libxdmcp" "libxinerama" "libxext")
makedepends=("gcc" "git" "rust")
source=(git+${url}#commit=e9c0c632be39b217e37783781d1b7b4102f76636)
sha256sums=('SKIP')

build() {
	cd $pkgname
  	cargo build --release --locked --all-features --target-dir=target
}

package() {
	cd $pkgname
	install -Dm 755 target/release/${pkgname} -t "${pkgdir}/usr/bin"
}

