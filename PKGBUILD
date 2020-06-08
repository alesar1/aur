# Maintainer: hashworks <mail@hashworks.net>

pkgname=dns-zone-blacklist-git
pkgver=r409.676938e
pkgrel=1
pkgdesc='dnsmasq, bind and unbound zone files to be used in DNS based AD Blockers'
url='https://github.com/oznu/dns-zone-blacklist'
arch=('any')
license=('MIT') # https://github.com/oznu/dns-zone-blacklist/blob/master/package.json#L10
conflicts=('dns-zone-blacklist')
provides=('dns-zone-blacklist')
optdepends=('unbound' 'bind' 'dnsmasq')
makedepends=('git')
source=('git+https://github.com/oznu/dns-zone-blacklist.git')
sha256sums=('SKIP')

pkgver() {
	cd "dns-zone-blacklist"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	mkdir -p "${pkgdir}/etc/dns-zone-blacklist"
	cd "dns-zone-blacklist"
	rm */*.checksum
	cp -r bind dnsmasq unbound "${pkgdir}/etc/dns-zone-blacklist"
}
