# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=calls-git
pkgver=41.0.r14.g54bac16
pkgrel=1
pkgdesc='Phone dialer and call handler'
arch=(x86_64 aarch64)
url='https://gitlab.gnome.org/GNOME/calls'
license=(GPL3)
depends=(
	callaudiod
	feedbackd
	folks
	gom
	libhandy
	libpeas
	modemmanager
	sofia-sip
)
makedepends=(
    git
	gobject-introspection
	meson
	vala
)
provides=(calls)
conflicts=(calls)
source=("git+${url}.git")
md5sums=(SKIP)

pkgver() {
	cd calls
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	arch-meson calls build -Dtests=false
	meson compile -C build
}

check() {
	meson test -C build --print-errorlogs
}

package() {
	DESTDIR="${pkgdir}" meson install -C build
}
