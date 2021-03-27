# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gnome-shell-extension-tweaks-system-menu-git
_gitname=tweaks-system-menu
pkgver=14.r0.g86e0b95
pkgrel=1
pkgdesc="GNOME Shell Extension to put Gnome Tweaks in the system menu."
arch=('any')
url="https://github.com/F-i-f/tweaks-system-menu"
license=('GPL3')
depends=('gnome-shell')
makedepends=('git' 'meson')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/F-i-f/tweaks-system-menu.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$_gitname"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/$_gitname"
	sed -i "s/home + '\/.local/'\/usr/g" meson.build meson-gse/meson.build.m4
}

build() {
	arch-meson "$_gitname" build
	meson compile -C build
}

check() {
	meson test -C build --print-errorlogs
}

package() {
	DESTDIR="$pkgdir" meson install -C build
}
