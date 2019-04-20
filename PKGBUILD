# Contributor: Maxim Devaev <mdevaev@gmail.com>
# Author: Maxim Devaev <mdevaev@gmail.com>


[ -n "$PIKVM_PLATFORM" ] || PIKVM_PLATFORM="v1-vga v1-hdmi"
[ -n "$PIKVM_BOARD" ] || PIKVM_BOARD="rpi2 rpi3"


pkgname=(kvmd)
for _platform in $PIKVM_PLATFORM; do
	for _board in $PIKVM_BOARD; do
		pkgname+=(kvmd-platform-$_platform-$_board)
	done
done
pkgbase=kvmd
pkgver=0.154
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
	python-passlib
	python-pyudev
	python-raspberry-gpio
	python-pyserial
	python-setproctitle
	python-systemd
	python-dbus
	python-pygments
	psmisc
	v4l-utils
	nginx-mainline
	openssl
	raspberrypi-io-access
)
optdepends=(
	dkms
	tc358743-dkms
)
makedepends=(python-setuptools)
source=("$url/archive/v$pkgver.tar.gz")
md5sums=(SKIP)


build() {
	cd "$srcdir"
	rm -rf $pkgname-build
	cp -r kvmd-$pkgver $pkgname-build
	cd $pkgname-build
	python setup.py build
}


package_kvmd() {
	install=$pkgname.install

	cd "$srcdir/$pkgname-build"
	python setup.py install --root="$pkgdir"
	install -Dm755 scripts/* "$pkgdir/usr/bin"

	mkdir -p "$pkgdir/usr/lib/systemd/system"
	cp configs/os/systemd/*.service "$pkgdir/usr/lib/systemd/system"

	mkdir -p "$pkgdir/usr/share/kvmd"
	cp -r web "$pkgdir/usr/share/kvmd"
	cp -r extras "$pkgdir/usr/share/kvmd"

	_cfgdir="$pkgdir/usr/share/kvmd/configs.default"
	mkdir -p "$_cfgdir"
	cp -r configs/* "$_cfgdir"

	rm -rf "$_cfgdir/os/systemd"
	find "$pkgdir" -name ".gitignore" -delete
	sed -i -e "s/^#PROD//g" "$_cfgdir/nginx/nginx.conf"
	find "$_cfgdir" -type f -exec chmod 444 '{}' \;
	chmod 440 "$_cfgdir/kvmd/htpasswd"

	mkdir -p "$pkgdir/etc/kvmd/nginx/ssl"
	chmod 750 "$pkgdir/etc/kvmd/nginx/ssl"
	for path in "$_cfgdir/kvmd"/*.yaml; do
		ln -sf "/usr/share/kvmd/configs.default/kvmd/`basename $path`" "$pkgdir/etc/kvmd"
	done
	rm "$pkgdir/etc/kvmd"/{auth.yaml,meta.yaml}
	cp "$_cfgdir/kvmd"/{auth.yaml,meta.yaml} "$pkgdir/etc/kvmd"
	cp -a "$_cfgdir/kvmd/htpasswd" "$pkgdir/etc/kvmd"
	for path in "$_cfgdir/nginx"/*.conf; do
		ln -sf "/usr/share/kvmd/configs.default/nginx/`basename $path`" "$pkgdir/etc/kvmd/nginx"
	done
}


for _platform in $PIKVM_PLATFORM; do
	for _board in $PIKVM_BOARD; do
		eval "package_kvmd-platform-$_platform-$_board() {
			pkgdesc=\"Pi-KVM platform configs - $_platform for $_board\"

			mkdir -p \"\$pkgdir/etc\"/{kvmd,sysctl.d,udev/rules.d,modules-load.d}

			_cfgdir=\"/usr/share/kvmd/configs.default\"

			ln -sf \"\$_cfgdir/os/sysctl.conf\" \"\$pkgdir/etc/sysctl.d/99-pikvm.conf\"
			ln -sf \"\$_cfgdir/os/udev/$_platform-$_board.rules\" \"\$pkgdir/etc/udev/rules.d/99-pikvm.rules\"
			ln -sf \"\$_cfgdir/os/modules-load/$_platform.conf\" \"\$pkgdir/etc/modules-load.d/pikvm.conf\"

			ln -sf \"\$_cfgdir/kvmd/main/$_platform.yaml\" \"\$pkgdir/etc/kvmd/main.yaml\"
			if [ $_platform == v1-hdmi ]; then
				ln -sf \"\$_cfgdir/kvmd/tc358743-edid.hex\" \"\$pkgdir/etc/kvmd/tc358743-edid.hex\"
			fi
		}"
	done
done
