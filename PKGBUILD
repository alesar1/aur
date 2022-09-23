# Maintainer: Thomas Booker <tw.booker@outlook.com>
# Contributor: Philip Goto <philip.goto@gmail.com>

pkgname=phosh
pkgver=0.21.0
pkgrel=1
pkgdesc='A pure Wayland shell prototype for GNOME on mobile devices'
arch=(x86_64 aarch64 armv7h)
url='https://gitlab.gnome.org/World/Phosh/phosh'
license=(GPL3)
depends=(
	gtk3
	'libhandy>=1.1.90'
	gnome-desktop
	gnome-session
	upower
	libpulse
	gcr
	feedbackd
	libnm
	evolution-data-server
	# Replace this with phoc once it works.
	#'phoc>=0.21.0'
	'phoc-embedded-wlroots>=0.21.0'
	gnome-shell
	callaudiod
	polkit
)
makedepends=(
	meson
	git
	wayland-protocols
)
_tag=4122630266abfd6623e169330da6e7d6bc01be7f # git rev-parse v${pkgver}
source=(
	"git+${url}.git#tag=${_tag}"
	"pam_phosh"
)
sha256sums=(
	'SKIP'
	'b7793f80c533e84ad8adfe8bb46c69f107575e724aa9b53b41f370baa37e4fd5'
)

pkgver() {
	cd phosh
	git describe --tags | sed 's/^v//'
}

prepare() {
	cd phosh

	git submodule init
	git submodule update
}

build() {
	# If we don't set `libexecdir` then meson will try and place the phosh bin in /lib/phosh and collide with the dir so we put it in /lib/phosh/phosh
	arch-meson --libexecdir="/usr/lib/phosh" -D tests=false -D systemd=true phosh _build 
	meson compile -C _build
}

package() {
	DESTDIR="${pkgdir}" meson install -C _build

		install -Dm644 "$srcdir"/pam_phosh \
			"$pkgdir"/etc/pam.d/phosh
}
