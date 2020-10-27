# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=elementary-planner-git
pkgver=2.5.7.r1.g1c84365a
pkgrel=1
pkgdesc="Task manager with Todoist support"
arch=('x86_64')
url="https://useplanner.com"
license=('GPL3')
depends=('libsoup' 'granite' 'webkit2gtk' 'evolution-data-server'
         'libpeas' 'gtk-theme-elementary' 'elementary-icon-theme')
makedepends=('git' 'meson' 'vala')
provides=("${pkgname%-git}" 'planner')
conflicts=("${pkgname%-git}" 'planner')
source=('git+https://github.com/alainm23/planner.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/planner"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	arch-meson planner build
	meson compile -C build
}

package() {
	DESTDIR="$pkgdir" meson install -C build

	ln -s /usr/bin/com.github.alainm23.planner "$pkgdir/usr/bin/planner"
}
