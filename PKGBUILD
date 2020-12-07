# Maintainer: Anton Leontiev <scileont /at/ gmail dot com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gst-rtsp-server
pkgver=1.18.2
pkgrel=1
pkgdesc="RTSP server library based on GStreamer"
arch=('i686' 'x86_64' 'armv7h' 'armv6h')
url="https://gstreamer.freedesktop.org/modules/gst-rtsp-server.html"
license=('LGPL')
makedepends=('meson' 'gobject-introspection')
depends=("gst-plugins-base>=$pkgver" "gst-plugins-bad>=$pkgver")
provides=('libgstrtspserver-1.0.so' 'libgstrtspclientsink.so')
source=("https://gstreamer.freedesktop.org/src/$pkgname/$pkgname-$pkgver.tar.xz"{,.asc})
sha256sums=('973922aba65a1672a131527dee965fb09bab4bb996c351f0ee7f42f0d5b954e2'
            'SKIP')
validpgpkeys=('D637032E45B8C6585B9456565D2EEE6F6F349D7C')
              # Tim-Philipp Müller <tim@centricular.com>

build() {
	arch-meson "$pkgname-$pkgver" build \
		-D doc=disabled \
		-D gobject-cast-checks=disabled \
		-D package-name="GStreamer RTSP Server (Arch Linux)" \
		-D package-origin="https://www.archlinux.org/"
	meson compile -C build
}

check() {
	meson test -C build --print-errorlogs
}

package() {
	DESTDIR="$pkgdir" meson install -C build
	install -Dm755 build/examples/test-mp4 "$pkgdir/usr/bin/gst-rtsp-mp4"
	install -Dm755 build/examples/test-launch "$pkgdir/usr/bin/gst-rtsp-launch"
	install -Dm755 build/examples/test-netclock "$pkgdir/usr/bin/gst-rtsp-netclock"
	install -Dm755 build/examples/test-netclock-client "$pkgdir/usr/bin/gst-rtsp-netclock-client"
}
