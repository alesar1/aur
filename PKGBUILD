# Maintainer: Zom <zomaur at eevul dot org>
pkgname=annex-git
_pkgname=annex
pkgver=r8.ed11171
pkgrel=3
license=("GPL2")
pkgdesc="Simple appstore for gnome shell extensions."
makedepends=(git meson)
depends=(gjs hicolor-icon-theme chrome-gnome-shell gtk4 python-gobject libsoup)
optdepends=()
arch=("any")
url="https://github.com/andyholmes/annex"
source=("${pkgname%-*}::git+https://github.com/andyholmes/annex.git")
sha512sums=('SKIP')
provides=("annex")
conflicts=("annex")

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
        cd "$_pkgname"
	meson --prefix /usr build
}

package() {
	cd "$_pkgname"
	DESTDIR="$pkgdir" meson install -C build
	install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
