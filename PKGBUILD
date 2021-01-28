# Maintainer: Jack O'Sullivan <jackos1998 at gmail dot com>

pkgname=obs-gstreamer
pkgver=0.2.1
pkgrel=1
pkgdesc="An OBS Studio source plugin to feed GStreamer launch pipelines into OBS Studio."
arch=('i686' 'x86_64')
url="https://github.com/fzwoch/obs-gstreamer"
license=('GPL2')
depends=('gstreamer' 'gst-plugins-base' 'obs-studio')
makedepends=('git' 'meson' 'ninja')
source=("git+https://github.com/fzwoch/obs-gstreamer#tag=v$pkgver")
sha256sums=('SKIP')

build() {
	cd "$pkgname"
	meson --buildtype=release --prefix=/usr --libdir=lib build
	ninja -C build
}
package() {
	cd "$pkgname"
	DESTDIR="$pkgdir" ninja -C build install
}
