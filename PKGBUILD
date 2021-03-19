# Maintainer:  Vincent Grande <shoober420@gmail.com>
# Contributor: Drew DeVault <sir@cmpwn.com>
# Contributor: Antonin Décimo <antonin dot decimo at gmail dot com>
pkgname=sway-strace-git
_pkgname=sway-strace
pkgver=r6506.1be66c98
pkgrel=1
license=("MIT")
pkgdesc="Tiling Wayland compositor and replacement for the i3 window manager"
makedepends=(
	"git"
	"meson"
	"ninja"
#	"scdoc"
	"wayland-protocols"
	"wlroots-strace-git"
)
depends=(
	"cairo"
	"gdk-pixbuf2"
	"json-c"
	"pango"
	"pcre"
	"swaybg-git"
	"ttf-font"
	"wlroots-strace-git"
	"xorg-server-xwayland"
)
optdepends=(
	"alacritty: Terminal emulator used by the default config"
	"dmenu: Application launcher"
	"grim: Screenshot utility"
	"i3status: Status line"
	"mako: Lightweight notification daemon"
	"polkit: polkit support"
	"slurp: Select a region"
	"swayidle: Idle management daemon"
	"swaylock: Screen locker"
	"wallutils: Timed wallpapers"
	"waybar: Highly customizable bar"
)
backup=(etc/sway/config)
arch=("i686" "x86_64")
url="https://swaywm.org"
source=("${pkgname%-*}::git+https://github.com/swaywm/sway.git")
sha512sums=("SKIP")
provides=("sway")
conflicts=("sway")
install=sway-strace-git.install

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"
	meson  \
		--buildtype=debug \
		-Dwerror=false \
		-Dtray=enabled \
		-Dgdk-pixbuf=enabled \
		-Dman-pages=disabled \
		--prefix /usr \
		-Db_sanitize=address,undefined \
		"$srcdir/build"
	ninja $NINJAFLAGS -C "$srcdir/build"
}

package() {

	cd "$_pkgname"
	DESTDIR="$pkgdir" ninja $NINJAFLAGS -C "$srcdir/build" install

	install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	for util in autoname-workspaces.py inactive-windows-transparency.py grimshot; do
		install -Dm755 "contrib/$util" -t "$pkgdir/usr/share/$pkgname/scripts"
	done
}
