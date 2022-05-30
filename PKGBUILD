# Maintainer: ThatOneCalculator <kainoa@t1c.dev>

_pkgname="hyprland"
pkgname="${_pkgname}"
pkgver="0.1.4beta"
pkgrel=1
pkgdesc="Hyprland is a dynamic tiling Wayland compositor based on wlroots that doesn't sacrifice on its looks."
arch=(any)
url="https://github.com/vaxerski/Hyprland"
license=('BSD')
depends=(libxcb xcb-proto xcb-util xcb-util-keysyms libxfixes libx11 libxcomposite xorg-xinput libxrender pixman wayland-protocols wlroots-git cairo pango)
makedepends=(git cmake ninja gcc gdb)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/vaxerski/hyprland/archive/v${pkgver}.tar.gz")
sha256sums=('SKIP')
options=(!makeflags !buildflags)

build() {
	cd "$srcdir/Hyprland-$pkgver"
	make all
}

package() {
	cd "$srcdir/Hyprland-$pkgver"
	mkdir -p "${pkgdir}/usr/share/wayland-sessions"
	mkdir -p "${pkgdir}/usr/share/hyprland"
	install -Dm755 build/Hyprland -t "${pkgdir}/usr/bin"
	install -Dm755 hyprctl/hyprctl -t "${pkgdir}/usr/bin"
	install -Dm644 assets/*.png -t "${pkgdir}/usr/share/hyprland"
	install -Dm644 example/hyprland.desktop -t "${pkgdir}/usr/share/wayland-sessions"
	install -Dm644 example/hyprland.conf -t "${pkgdir}/usr/share/hyprland"
	install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${_pkgname}"
}
