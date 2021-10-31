# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
# Maintainer: Antonin Décimo <antonin dot decimo at gmail dot com>
pkgname=wlroots-no-axrgb-assert-git
pkgver=0.14.0.r328.g8e225261
pkgrel=1
license=(custom:MIT)
pkgdesc='wlroots-git, with argb/xrgb8888 assert removed to make nvidia driver work'
url=https://github.com/swaywm/wlroots
arch=(x86_64)
provides=("libwlroots.so" "wlroots" "wlroots-git" "wlroots=${pkgver%%.r*}")
conflicts=(wlroots wlroots-git)
options=(debug)
depends=(
	glslang
	libinput
	libxcb
	libxkbcommon
	opengl-driver
	pixman
	wayland
	xcb-util-errors
	xcb-util-renderutil
	xcb-util-wm
	seatd
	vulkan-icd-loader
	xorg-xwayland)
makedepends=(
	git
	meson
	vulkan-headers
	wayland-protocols
	xorgproto)
source=("${pkgname}::git+${url}"
	"no-axrgb-assert.patch")
sha512sums=('SKIP'
            '34cab3eb72cf0c5f1e71c2eba8da780517469b952dba0a0950960e3ac4a5d9b2043debcde884d605dda3d15ee88870b2e55bceb97bbc928b2344b38620e19ef3')

pkgver () {
	cd "${pkgname}"
	(
		set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

prepare() {
	cd "$pkgname"
	patch --forward --strip=1 --input="${srcdir}/no-axrgb-assert.patch"
}

build () {
	arch-meson \
		--buildtype=debug \
		-Dwerror=false \
		-Dexamples=false \
		"${pkgname}" build
	meson compile -C build
}

package () {
	DESTDIR="${pkgdir}" meson install -C build
	install -Dm644 "${pkgname}/"LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

post_upgrade() {
  echo "Make sure to upgrade wlroots-git and sway-git together."
  echo "Upgrading one but not the other is unsupported."
}
