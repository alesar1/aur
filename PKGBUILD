# Maintainer: 100best <jm.100best@hotmail.com>

pkgname=libhttpseverywhere
pkgrel=1
pkgver=0.2.6
pkgdesc="library to use HTTPSEverywhere in desktop applications"
arch=('i686' 'x86_64')
url="https://git.gnome.org/browse/libhttpseverywhere"
license=('LGPL3')
depends=('libgee' 'libxml2' 'libarchive' 'libsoup' 'glib2' 'json-glib')
makedepends=('meson' 'ninja' 'vala' 'valadoc' 'gobject-introspection')
source=(https://git.gnome.org/browse/libhttpseverywhere/snapshot/$pkgname-$pkgver.tar.xz)
md5sums=('1341639f79dfb097a57a4211b503e774')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
        mkdir -p "$srcdir/$pkgname-$pkgver/build"
        cd "$srcdir/$pkgname-$pkgver/build"
	meson --prefix "/usr" --libdir "lib" ..
}
build() {
	cd "$srcdir/$pkgname-$pkgver/build"
	ninja
}

package() {
	cd "$srcdir/$pkgname-$pkgver/build"
	DESTDIR="$pkgdir" ninja install
}
