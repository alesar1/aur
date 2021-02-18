# Maintainer: Daniel Peukert <daniel@peukert.cc>
_projectname='spot'
pkgname="$_projectname-client-git"
pkgver='0.1.7.r7.g58a1db7'
pkgrel='1'
pkgdesc='Gtk/Rust native Spotify client'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/xou816/$_projectname"
license=('MIT')
depends=('alsa-lib' 'glib2' 'gtk3' 'libhandy' 'libpulse' 'openssl')
makedepends=('cargo' 'git' 'meson')
provides=("$_projectname-client")
conflicts=("$_projectname-client")
source=("$pkgname::git+$url")
sha256sums=('SKIP')

_sourcedirectory="$pkgname"
_builddirectory='build'

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	git describe --long --tags | sed -e 's/^v//' -e 's/-\([^-]*-g[^-]*\)$/-r\1/' -e 's/-/./g'
}

build() {
	cd "$srcdir/"
	arch-meson "$_sourcedirectory" "$_builddirectory" -Doffline=false
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
