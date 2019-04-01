# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=gnome-screencast-git
pkgver=r78.82d604e
pkgrel=1
pkgdesc="Miracast implementation for GNOME"
arch=('any')
url="https://blogs.gnome.org/benzea/2019/01/30/gnome-screencast"
license=('GPL3')
depends=('appstream-glib' 'desktop-file-utils' 'faac' 'gst-rtsp-server' 'libpulse' 'networkmanager>1.15.2' 'python-gobject' 'x264')
makedepends=('git' 'meson')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/benzea/gnome-screencast')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "${pkgname%-git}"
	meson . build --prefix /usr
	ninja -C build
}

package() {
 	cd "${pkgname%-git}"
	DESTDIR="$pkgdir" ninja -C build install
}
