# Maintainer: John FrostFox <john.frostfox at gmail dot com>
pkgname=recapp-git
pkgver=1.1.0.r0.g65d6ef1
pkgrel=1
pkgdesc="Simple screen recorder for Linux written in GTK, using only GStreamer."
arch=('any')
url="https://github.com/amikha1lov/RecApp"
license=('GPL3')
depends=('gst-plugins-base' 'gst-plugins-good' 'hicolor-icon-theme' 'python-pydbus' 'slop' 'python-pulse-control')
# optdepends=('gst-plugins-ugly')
makedepends=('meson' 'ninja' 'git' 'intltool' 'appstream-glib' 'desktop-file-utils' 'python')
source=(${pkgname}::'git+'${url}'.git')
md5sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g;s/rc.\.//'
}

build() {
	cd "${srcdir}/${pkgname}"
    arch-meson --buildtype=plain build
    ninja -C build
}

check() {
	cd "${srcdir}/${pkgname}"
	arch-meson check 
}

package() {
	cd "${srcdir}/${pkgname}"
	install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
    DESTDIR="$pkgdir" ninja -C build install
}