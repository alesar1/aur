# Maintainer: Caleb Fontenot <foley2431 at gmail dot com>
pkgname=mmsd-tng-git
pkgver=1.5.r0.g2bbeaa2
pkgrel=1
pkgdesc="Multimedia Messaging Service Daemon - The Next Generation"
url="https://git.kernel.org/pub/scm/network/ofono/mmsd.git"
arch=('x86_64' 'aarch64')
license=("GPL2")
provides=("mmsd" "mmsd-tng")
conflicts=("mmsd" "mmsd-tng")
depends=("c-ares")
makedepends=("git" "meson")
source=("$pkgname::git+https://gitlab.com/kop316/mmsd.git")
sha256sums=("SKIP")

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'  
}
prepare() {
	cd "$srcdir/$pkgname"
	meson _build
}
build() {
	cd "$srcdir/$pkgname"
	arch-meson $srcdir/$pkgname build
	meson compile -C _build
}
check() {
	cd "$srcdir/$pkgname"
	meson test -C _build
}
package() {
	cd "$srcdir/$pkgname"
	DESTDIR="$pkgdir" meson install -C build
}
