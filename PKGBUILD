# Contrinutor: Anton Leontiev <scileont /at/ gmail.com>
pkgname=gst-rtsp-server
pkgver=1.16.0
pkgrel=2
pkgdesc='RTSP server library based on GStreamer'
arch=('i686' 'x86_64' 'armv7h' 'armv6h')
url='http://gstreamer.freedesktop.org/modules/gst-rtsp-server.html'
license=('LGPL')
depends=("gst-plugins-base>=$pkgver")
source=(http://gstreamer.freedesktop.org/src/$pkgname/$pkgname-$pkgver.tar.xz)
md5sums=('adc4460239ec2eccf58ad9752ce53bfd')

build() {
	cd $pkgname-$pkgver
	./configure --prefix=/usr
	make
}

package() {
	cd $pkgname-$pkgver
	make install DESTDIR="$pkgdir"
	install -Dm755 examples/.libs/test-mp4 "$pkgdir/usr/bin/gst-rtsp-mp4"
	install -Dm755 examples/.libs/test-launch "$pkgdir/usr/bin/gst-rtsp-launch"
	install -Dm755 examples/.libs/test-netclock "$pkgdir/usr/bin/gst-rtsp-netclock"
	install -Dm755 examples/.libs/test-netclock-client "$pkgdir/usr/bin/gst-rtsp-netclock-client"
}
