# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=phosh
pkgver=0.11.0
pkgrel=1
pkgdesc='A pure Wayland shell prototype for GNOME on mobile devices'
url='https://source.puri.sm/Librem5/phosh'
license=('GPL3')
arch=(x86_64 aarch64)
depends=(
	feedbackd
	libhandy
	phoc
)
makedepends=(
	ctags
	git
	meson
	vala
)
# checkdepends=(xorg-server-xvfb)
source=(
	"git+${url}.git#tag=v${pkgver}"
	"git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git"
)
sha256sums=('SKIP' 'SKIP')

prepare() {
	cd phosh

	git submodule init
	git config --local submodule.subprojects/gvc.url "$srcdir/libgnome-volume-control"
	git submodule update
}

build() {
	arch-meson phosh build # -D gtk_doc=true
	meson compile -C build
}

# check() {
# 	dbus-run-session xvfb-run \
# 		-s '-screen 0 1920x1080x24 -nolisten local' \
# 		meson test -C build --print-errorlogs
# }

package() {
	DESTDIR="${pkgdir}" meson install -C build
}
