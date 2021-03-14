# Maintainer: Daniel Peukert <daniel@peukert.cc>
_projectname='spot'
pkgname="$_projectname-client-git"
pkgver='0.1.10.r0.g1d361b1'
pkgrel='3'
pkgdesc='Gtk/Rust native Spotify client - git version'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/xou816/$_projectname"
license=('MIT')
depends=('alsa-lib' 'glib2' 'gtk3' 'libhandy' 'libpulse' 'openssl')
optdepends=('org.freedesktop.secrets')
makedepends=('cargo' 'git' 'meson>=0.50.0')
checkdepends=('appstream-glib')
provides=("$_projectname-client")
conflicts=("$_projectname-client")
source=(
	"$pkgname::git+$url"
	'meson-test-release.diff'
)
sha256sums=('SKIP'
            '4366433646f05f74cb9cdc23079ad37655e06589cd28ecd3cd156223ff213a95')

_sourcedirectory="$pkgname"
_builddirectory='build'

prepare() {
	cd "$srcdir/$_sourcedirectory/"
	patch --forward -p1 < '../meson-test-release.diff'
}

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	git describe --long --tags | sed -e 's/^v//' -e 's/-\([^-]*-g[^-]*\)$/-r\1/' -e 's/-/./g'
}

build() {
	cd "$srcdir/"
	meson setup --prefix '/usr' --libexecdir 'lib' --sbindir 'bin' --buildtype 'release' --wrap-mode 'nodownload' \
		-Db_lto='true' -Db_pie='true' -Doffline='false' -Dfeatures='warn-cache' "$_sourcedirectory" "$_builddirectory"
	meson compile -C "$_builddirectory"
}

check() {
	cd "$srcdir/"
	meson test -C "$_builddirectory"
}

package() {
	cd "$srcdir/"
	DESTDIR="$pkgdir" meson install -C "$_builddirectory"
	install -Dm644 "$_sourcedirectory/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
