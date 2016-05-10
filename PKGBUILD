# Maintainer: Jerome Leclanche <jerome@leclan.ch>

pkgname=ofono
pkgver=1.18
pkgrel=1
pkgdesc="Infrastructure for building mobile telephony (GSM/UMTS) applications"
url="https://01.org/ofono"
arch=("i686" "x86_64")
license=("GPL2")
depends=("bluez" "dbus-core" "modemmanager" "glib2" "udev" "mobile-broadband-provider-info")
source=(
	"https://www.kernel.org/pub/linux/network/$pkgname/$pkgname-$pkgver.tar.xz"
	"https://www.kernel.org/pub/linux/network/$pkgname/$pkgname-$pkgver.tar.sign"
)
sha256sums=(
	"53cdbf342913f46bce4827241c60e24255a3d43a94945edf77482ae5b312d51f"
	"SKIP"
)
validpgpkeys=("E932D120BC2AEC444E558F0106CA9F5D1DCF2659") # Marcel Holtmann <marcel@holtmann.org>


build() {
	cd "$srcdir/$pkgname-$pkgver"
	./configure \
		--prefix=/usr \
		--sysconfdir=/etc \
		--sbindir=/usr/bin \
		--disable-bluez4

	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
	install -Dm755 "$srcdir/$pkgname-$pkgver/src/ofono.conf" "$pkgdir/etc/dbus-1/system.d/ofono.conf"
	install -Dm755 "$srcdir/$pkgname-$pkgver/src/ofono.service" "$pkgdir/usr/lib/systemd/system/ofono.service"
}
