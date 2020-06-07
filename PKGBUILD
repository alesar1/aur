# Maintainer: Sophie Tauchert <sophie@999eagle.moe>

pkgname=gwe
pkgver=0.15.0
pkgrel=1
pkgdesc="A system utility for controlling NVIDIA GPUs"
arch=('any')
url="https://gitlab.com/leinardi/gwe"
license=('GPL3')
depends=('gobject-introspection' 'libdazzle' 'libappindicator-gtk3' 'python' 'python-cairo' 'python-gobject' 'python-injector' 'python-matplotlib' 'python-peewee' 'python-py3nvml' 'python-requests' 'python-rx' 'python-pyxdg' 'python-xlib')
makedepends=('meson' 'appstream-glib')
provides=()
source=("https://gitlab.com/leinardi/gwe/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('4ea6b0462c8c25911143a25e7d50351010916222a445375c84f762da59899a75')

build() {
	if [[ -d "$srcdir/build" ]]; then
		rm -rf "$srcdir/build"
	fi
	meson --prefix /usr --buildtype=plain "$pkgname-$pkgver" build
	ninja -C build
}

check() {
	ninja -C build test
}

package() {
	DESTDIR="$pkgdir" ninja -C build install
}
