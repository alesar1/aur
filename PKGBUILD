# Maintainer: Philip Jones <philj56@gmail.com>
pkgname=tofi-git
pkgver=r73.32e2cb8
pkgrel=1
pkgdesc="Tiny rofi / dmenu replacement for wlroots-based Wayland compositors."
arch=("x86_64")
url="https://github.com/philj56/tofi"
license=("MIT")
groups=()
depends=("freetype2" "harfbuzz" "cairo" "pango" "wayland" "libxkbcommon")
makedepends=("meson" "git" "scdoc" "wayland-protocols")
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=("${pkgname}::git+${url}")
noextract=()
sha512sums=("SKIP")

pkgver() {
	cd "${pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "${pkgname}"
        meson --prefix /usr -Dbuildtype=release build
}

build() {
	cd "${pkgname}"
        ninja -C build
}

package() {
	cd "${pkgname}"
        DESTDIR="$pkgdir" ninja -C build install
}
