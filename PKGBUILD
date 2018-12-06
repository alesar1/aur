# Contributor: Maxim Devaev <mdevaev@gmail.com>
# Author: Maxim Devaev <mdevaev@gmail.com>


pkgname=kvmd
pkgver=0.110
pkgrel=1
pkgdesc="The main Pi-KVM daemon"
url="https://github.com/pi-kvm/kvmd"
license=(GPL)
arch=(any)
depends=(
	python
	python-yaml
	python-aiohttp
	python-aiofiles
	python-pyudev
	python-raspberry-gpio
	python-pyserial
	python-setproctitle
	python-systemd
	python-dbus
	v4l-utils
)
makedepends=(python-setuptools)
source=("$url/archive/v$pkgver.tar.gz")
md5sums=(SKIP)
install=$pkgname.install


build() {
	cd $srcdir
	rm -rf $pkgname-build
	cp -r kvmd-$pkgver $pkgname-build
	cd $pkgname-build
	python setup.py build
}

package() {
	cd $srcdir/$pkgname-build
	python setup.py install --root="$pkgdir"

	mkdir -p "$pkgdir/usr/lib/systemd/system"
	install -Dm644 configs/systemd/kvmd.service "$pkgdir/usr/lib/systemd/system/kvmd.service"
	install -Dm644 configs/systemd/kvmd-tc358743.service "$pkgdir/usr/lib/systemd/system/kvmd-tc358743.service"

	mkdir -p "$pkgdir/usr/share/kvmd"
	cp -r web "$pkgdir/usr/share/kvmd"
	cp -r extras "$pkgdir/usr/share/kvmd"
	cp -r configs "$pkgdir/usr/share/kvmd/configs.default"
	find "$pkgdir" -name ".gitignore" -delete

	mkdir -p "$pkgdir/etc/kvmd"
}
