# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=battery-monitor
pkgver=0.6
pkgrel=10
pkgdesc='A utility tool, notifies user about charging, discharging and not charging state of the battery on Linux.'
arch=('any')
url="https://github.com/maateen/battery-monitor"
license=('GPL3')
depends=('acpi' 'python' 'python-gobject' 'libnotify' 'libappindicator-gtk3')
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/maateen/battery-monitor/archive/v$pkgver.tar.gz")
md5sums=('69169d19f98c71c6e76919651133f729')

package() {
	cd "$pkgname-$pkgver"
	install -d "$pkgdir/"usr/{bin,share/battery-monitor}
	cp -a src/. "$pkgdir/usr/share/$pkgname"
	install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "$pkgname-autostart.desktop" "$pkgdir/etc/xdg/autostart/$pkgname-autostart.desktop"
	install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
