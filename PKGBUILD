# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor:  Dimitris Kiziridis <ragouel at outlook dot com>
pkgname=sparrow-wifi-git
pkgver=r170.ad95f2e
pkgrel=1
pkgdesc="Next-Gen GUI-based WiFi and Bluetooth Analyzer for Linux"
arch=('any')
url="https://github.com/ghostop14/sparrow-wifi"
license=('GPL3')
depends=('iw'
         'tk'
         'python-matplotlib'
         'python-qscintilla-qt5'
         'python-pyqt5-sip'
         'qt5-declarative'
         'python-gps3'
         'python-manuf'
         'python-dateutil'
         'python-numpy'
         'python-pyqt5-chart')
makedepends=('git')
optdepends=('gpsd: GPS support'
            'bluez-utils-compat: Blueooth-support'
            'ubertooth-git: Ubertooth support'
            'python-dronekit: Drone communication support'
            'net-tools: for rpi.monitor_3dr script'
            'python-elasticsearch'
            'python-pytz')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
backup=("opt/${pkgname%-git}/sparrowwifiagent.cfg")
install="${pkgname%-git}.install"
source=('git+https://github.com/ghostop14/sparrow-wifi.git'
        "${pkgname%-git}.desktop"
        "${pkgname%-git}.sh")
sha256sums=('SKIP'
            'ec12b01c211e0860c478db732d7328358c0aa8be195168d569902ce159c44d29'
            '3fe15a6d48b2a907629a767328267897e186948a3bd200a4067413fe6a6342d1')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	sed -i 's|service gpsd status|systemctl status gpsd|g' scripts/*.sh
	sed -i 's|service gpsd stop|systemctl stop gpsd|g' scripts/*.sh
}

package() {
	cd "$srcdir/${pkgname%-git}"
	install -Dm644 sparrowwifiagent.cfg.sample \
		"$pkgdir/opt/${pkgname%-git}/sparrowwifiagent.cfg"
	cp -r *.py scripts "$pkgdir/opt/${pkgname%-git}"

	install -Dm644 docs/* README.md -t "${pkgdir}/usr/share/doc/${pkgname%-git}"
	install -Dm644 wifi_icon.png "${pkgdir}/usr/share/pixmaps/${pkgname%-git}.png"

	install -Dm644 "$srcdir/${pkgname%-git}.desktop" -t \
		"${pkgdir}/usr/share/applications"
	install -Dm755 "$srcdir/${pkgname%-git}.sh" "$pkgdir/usr/bin/${pkgname%-git}"
}
