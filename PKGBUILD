# Maintainer: Oleksandr Natalenko <oleksandr@natalenko.name>

pkgname=encrypted-dns
_rev=0deb4f4d0bac6647414d2c61d4c2c1585044f587
pkgver=0.9.1.r3.${_rev:0:10}
pkgrel=1
pkgdesc="A modern encrypted DNS server (DNSCrypt v2, Anonymized DNSCrypt, DoH)"
url="https://github.com/DNSCrypt/encrypted-dns-server"
license=(MIT)
arch=(x86_64)
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/DNSCrypt/encrypted-dns-server/archive/${_rev}.tar.gz
		encrypted-dns.service)
backup=(etc/encrypted-dns/encrypted-dns.toml)
makedepends=(rust cargo)
sha256sums=('0fc0ffb66d610bd6f78e11d31efbb04288295c11b08c77a78d6fc075a39d1578'
            '6de2ead853fc3de465ebcb3bd9e26edbb361c9dcc1afa3703eb0c8ce05d28676')

prepare() {
	cd ${pkgname}-server-${_rev}

	sed -i 's|state_file = "encrypted-dns.state"|state_file = "/var/lib/encrypted-dns/encrypted-dns.state"|' example-encrypted-dns.toml
	sed -i 's|# log_file = "/tmp/encrypted-dns.log"|log_file = "/var/log/encrypted-dns/encrypted-dns.log"|' example-encrypted-dns.toml
	sed -i 's|# pid_file = "/tmp/encrypted-dns.pid"|pid_file = "/run/encrypted-dns/encrypted-dns.pid"|' example-encrypted-dns.toml
	sed -i 's|# domain_blacklist = "/etc/domain_blacklist.txt"|# domain_blacklist = "/etc/encrypted-dns/domain_blacklist.txt"|' example-encrypted-dns.toml
	sed -i 's|# undelegated_list = "/etc/undelegated.txt"|# undelegated_list = "/etc/encrypted-dns/undelegated.txt"|' example-encrypted-dns.toml
	sed -i 's|blacklisted_ips = \[ "93.184.216.34" \]|blacklisted_ips = \[ \]|' example-encrypted-dns.toml
}

build() {
	cd ${pkgname}-server-${_rev}

	cargo build --release
}

package() {
	cd ${pkgname}-server-${_rev}

	install -Dt "${pkgdir}"/usr/bin -m0755 target/release/encrypted-dns
	install -Dm0644 example-encrypted-dns.toml "${pkgdir}"/etc/encrypted-dns/encrypted-dns.toml
	touch "${pkgdir}"/etc/encrypted-dns/domain_blacklist.txt
	install -Dt "${pkgdir}"/etc/encrypted-dns -m0644 undelegated.txt
	install -Dt "${pkgdir}"/usr/share/licenses/encrypted-dns -m0644 LICENSE
	install -Dt "${pkgdir}"/usr/share/doc/encrypted-dns -m0644 README.md dashboard.png logo.png

	install -Dm644 "../encrypted-dns.service" -t "${pkgdir}/usr/lib/systemd/system"
}

