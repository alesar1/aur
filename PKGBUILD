# Maintainer: Otreblan <otreblain@gmail.com>

pkgname=giara
pkgver=1.0
pkgrel=1
epoch=
pkgdesc="Reddit gtk client"
arch=('any')
url="https://gitlab.gnome.org/World/giara"
license=('GPL3')
groups=()
depends=(
	'gtk4'
	'gtksourceview5'
	'libadwaita'
	'python-beautifulsoup4'
	'python-dateutil'
	'python-gobject'
	'python-mistune'
	'python-pillow'
	'python-praw'
)
makedepends=('meson' 'gobject-introspection')
checkdepends=('appstream')
optdepends=('ffmpeg: For video')
provides=(redditgtk)
conflicts=(redditgtk)
replaces=(redditgtk)
source=("$url/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('ec8a7c7cba8ae6b79cf36db7cefe1ee58f8818d04a7ff305773ba5a317fba88f')

prepare() {
	cd "$srcdir/$pkgname-$pkgver/$pkgname"

	local _pver="$(python --version | sed "s/Python \(.*\)\..*/\1/")"
	local _ddir="/usr/lib/python$_pver/site-packages/$pkgname/"

	# Generate pycache, if you ran giara as root this will conflict
	for f in "" -O;
	do
		python $f -m compileall . --invalidation-mode checked-hash -d "$_ddir"
	done
}

build() {
	arch-meson "$pkgname-$pkgver" build

	meson compile -C build
}

package() {
	DESTDIR="$pkgdir" meson install -C build
}
