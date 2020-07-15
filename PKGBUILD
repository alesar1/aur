# Maintainer: Nils Schulte <aur@nilsschulte.de>

pkgname=waybind-git
_pkgname=waybind
pkgver=v0.1.1.r3.g3db32b7
pkgrel=1
pkgdesc='Simple Key rebinder'
arch=('x86_64')
url='https://github.com/arnarg/waybind'
license=('MIT')
makedepends=('git' 'go')
provides=('waybind')
conflicts=('waybind')
source=("$_pkgname::git+https://github.com/arnarg/waybind")
sha512sums=('SKIP')

pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "$srcdir/$_pkgname"
	make PREFIX=/usr VERSION="$(pkgver)"
}

package() {
	cd "$srcdir/$_pkgname"

	mkdir -p "${pkgdir}/usr/bin/"
	install -Dm755 waybind "${pkgdir}/usr/bin/waybind"

	#add waybind user with group uinput
	install -Dm644 "../../waybind.sysusers" "${pkgdir}/usr/lib/sysusers.d/$_pkgname.conf"

	#install uinput udev rule
	mkdir -p "${pkgdir}/usr/lib/udev/rules.d/"
	install -Dm644 "udev/99-uinput.rules" "${pkgdir}/usr/lib/udev/rules.d/99-uinput.rules"

	#install systemd unit
	install -Dm644  "systemd/waybind.service" "${pkgdir}/usr/lib/systemd/system/$_pkgname.service"

	#install example config file
	mkdir -p "${pkgdir}/etc/waybind/"
	if [ ! -f "/etc/waybind/config.yml" ]; then
            install -Dm644 "../../default-config.yml" "${pkgdir}/etc/waybind/config.yml"
        fi
}
