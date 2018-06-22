# Maintainer: Sherlock Holo <sherlockya at gmail com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Hisato Tatekura <hisato_tatekura@excentrics.net>
# Contributor: Massimiliano Torromeo <massimiliano DOT torromeo AT google mail service>

pkgname=unbound-ecs
_pkgname=unbound
pkgver=1.7.3
pkgrel=1
pkgdesc='Validating, recursive, and caching DNS resolver, enable EDNS client subnet'
url='https://unbound.net/'
license=('custom:BSD')
arch=('x86_64')
makedepends=('expat')
optdepends=('expat: unbound-anchor')
depends=('openssl' 'ldns' 'libevent' 'fstrm' 'protobuf-c' 'dnssec-anchors')
conflicts=('unbound')
backup=('etc/unbound/unbound.conf')
validpgpkeys=('EDFAA3F2CA4E6EB05681AF8E9F6F1C2D7E045F8D')
source=("https://unbound.net/downloads/${_pkgname}-${pkgver}.tar.gz"
        'sysusers.d'
        'tmpfiles.d'
        'service'
        'hook'
        'conf')
sha256sums=('c11de115d928a6b48b2165e0214402a7a7da313cd479203a7ce7a8b62cba602d'
            '85b8f00881fb93bcce83bdfe3246463a396eb5b352c0d7f5fca32fcb839d22fa'
            '31a573f43287dd7e3678be1680388bfc7d8dee8280eb2443f521a4b349aaa6b6'
            '526ee18a5394073404ee10a67addf9894efa43fa234234562e84a1641d54b556'
            '2746aede36b1f57efdcc370b7643ce31ff9e6acb9a1f62705987b07eaed866a3'
            '07d764f4f42adfba9685c5c7feef81116118f4a1772b118aa3ebbe059e8a513e')

build() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	./configure \
		--prefix=/usr \
		--sysconfdir=/etc \
		--localstatedir=/var \
		--sbindir=/usr/bin \
		--disable-rpath \
		--enable-dnstap \
		--enable-pie \
		--enable-relro-now \
		--with-conf-file=/etc/unbound/unbound.conf \
		--with-pidfile=/run/unbound.pid \
		--with-rootkey-file=/etc/trusted-key.key \
		--with-libevent \
        --enable-subnet \

	make -j4
}

package() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	install -Dm644 doc/example.conf.in "${pkgdir}/etc/unbound/unbound.conf.example"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 ../sysusers.d "${pkgdir}/usr/lib/sysusers.d/unbound.conf"
	install -Dm644 ../service "${pkgdir}/usr/lib/systemd/system/unbound.service"
	install -Dm644 ../conf "${pkgdir}/etc/unbound/unbound.conf"

	# Trust anchor file available from within unbound's chroot.
	install -Dm644 ../tmpfiles.d "${pkgdir}/usr/lib/tmpfiles.d/unbound.conf"
	install -Dm644 ../hook "${pkgdir}/usr/share/libalpm/hooks/unbound-key.hook"
}
