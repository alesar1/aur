# Maintainer: Christian Hesse <mail@eworm.de>

pkgbase=wireguard-git
pkgname=(wireguard-dkms-git wireguard-tools-git)
pkgver=0.0.20160722.r2.g10d6fab
pkgrel=1
pkgdesc='next generation secure network tunnel - git checkout'
arch=('x86_64' 'i686')
url='http://www.wireguard.io/'
license=('GPL')
makedepends=('git' 'libmnl')
source=('git+https://git.zx2c4.com/WireGuard'
	'dkms.conf')
sha256sums=('SKIP'
            'f34dced05d2b1d9713da12eeef02e71db213646a4c8f6852227430bd84127433')

pkgver() {
	cd WireGuard/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git log -1 --format='%h')"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git log -1 --format='%h')"
	fi
}

prepare() {
	sed -i '/^include/d' WireGuard/src/Makefile
	sed -i '/^include/s|tests||' WireGuard/src/Kbuild
}

build() {
	cd WireGuard/src/tools/

	make
}

package_wireguard-dkms-git() {
	arch=('any')
	depends=('dkms')
	provides=('wireguard-dkms')
	conflicts=('wireguard-dkms')

	cd WireGuard/src/

	install -d -m0755 "${pkgdir}"/usr/src/wireguard-${pkgver}/crypto/
	install -D -m0644 "${srcdir}"/dkms.conf "${pkgdir}"/usr/src/wireguard-${pkgver}/dkms.conf
	install -m0644 Kbuild Kconfig Makefile tests/moduledeps.mk *.c *.h "${pkgdir}"/usr/src/wireguard-${pkgver}/
	install -m0644 crypto/* "${pkgdir}"/usr/src/wireguard-${pkgver}/crypto/
}

package_wireguard-tools-git() {
	depends=('libmnl')
	provides=('wireguard-tools')
	conflicts=('wireguard-tools')

	cd WireGuard/src/tools/

	make DESTDIR="${pkgdir}/" install
}

