# Maintainer: ahub <ahub@riseup.net>
pkgname=wf-recorder-git
_pkgname=wf-recorder
pkgver=r60.43fb1c2
pkgrel=1
license=("MIT")
pkgdesc="A video recorder for wlroots-based compositors like sway or wayfire"
makedepends=("meson" "git" "wayland-protocols" "ninja")
depends=(
	"wayland" "ffmpeg" "x264" "opencl-headers"
)
optdepends=(
    "slurp: limit recording to a part of the screen"
)
arch=("i686" "x86_64")
url="https://github.com/ammen99/wf-recorder"
source=("${pkgname%-*}::git+https://github.com/ammen99/wf-recorder")
sha1sums=("SKIP")
provides=("wf-recorder")

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$_pkgname"
	meson -Dwerror=false --prefix /usr "$srcdir/build" --buildtype=release
}

build() {
	cd "$_pkgname"
	ninja -C "$srcdir/build"
}

package() {
	cd "$_pkgname"
	DESTDIR="$pkgdir" ninja -C "$srcdir/build" install
}
