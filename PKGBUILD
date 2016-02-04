# Maintainer: Tomasz Maciej Nowak <com[dot]gmail[at]tmn505>
pkgname='minisatip'
pkgdesc="SAT>IP server, tested with DVB-S, DVB-S2, DVB-T, DVB-T2, DVB-C, DVB-C2, ATSC and ISDB-T cards"
pkgver=0.4.1
pkgrel=5
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/catalinii/minisatip"
license=('GPL2')
provides=('minisatip')
conflicts=('minisatip-git')
makedepends=('git')
depends=('libdvbcsa' 'linuxtv-dvb-apps')
optdepends=('oscam: channels descrambling')
backup=('etc/conf.d/minisatip')
install='minisatip.install'
source=("git+${url}#commit=99fed041702c3a136008a285b5c015a981a5dfd3"
        'minisatip.service'
        'minisatip.sysuser'
        'minisatip.conf')
sha256sums=('SKIP'
            'ea3b7b52c33946c156f174c043015e6922af0c28ef43f9a4b4615e3abb36d4ad'
            '9f0ea2c29ab6c69bd444a6e4021928bbafc332c71735e1af975c3a973c3e5c2e'
            '24a03332e662c80c00d8f7ce40a60b35bcd7c8d08052c8e4deeb7e0f6720a2aa')

pkgver() {
	cd ${srcdir}/minisatip
	tac minisatip.h | awk -F"[^.^0-9]*" '/VERSION_BUILD/ {printf $2}'
}

prepare() {
	cd ${srcdir}/minisatip
	git format-patch -1 43482f469e9efd9d9b2026d9346b9b1331a90d32
	sed -i 's/FLAGS?/FLAGS/g' 0001-Add-EXTRA_CFLAGS-adn-EXTRA_LDFLAGS-to-Makefile.patch
	patch -p1 -i 0001-Add-EXTRA_CFLAGS-adn-EXTRA_LDFLAGS-to-Makefile.patch
}

build() {
	cd ${srcdir}/minisatip
	make DVBCA=yes EXTRA_CFLAGS="${CFLAGS}" EXTRA_LDFLAGS="${LDFLAGS}"
}

package() {
	cd ${srcdir}/minisatip
	install -Dm644 ../minisatip.service ${pkgdir}/usr/lib/systemd/system/minisatip.service
	install -Dm644 ../minisatip.sysuser ${pkgdir}/usr/lib/sysusers.d/minisatip.conf
	install -Dm644 ../minisatip.conf ${pkgdir}/etc/conf.d/minisatip
	install -Dm755 minisatip ${pkgdir}/usr/bin/minisatip
	mkdir -p ${pkgdir}/var/lib/minisatip
	cp -ar html ${pkgdir}/var/lib/minisatip
	chown -fR 183:183 ${pkgdir}/var/lib/minisatip
}
