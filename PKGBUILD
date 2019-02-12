# Maintainer: Davide Depau <davide@depau.eu>

pkgname=networkmanager-wireguard-git
pkgver=r80.61646ad
pkgrel=1
pkgdesc='NetworkManager VPN plugin for WireGuard - git'
arch=('i686' 'x86_64')
license=('GPL')
url='https://github.com/max-moser/network-manager-wireguard/'
depends=('networkmanager' 'libnma' 'WIREGUARD-MODULE' 'wireguard-tools')
makedepends=('git' 'intltool')
provides=('networkmanager-wireguard')
conflicts=('networkmanager-wireguard')
source=("$pkgname::git+https://github.com/max-moser/network-manager-wireguard.git")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cd $pkgname

	./autogen.sh
	./configure --prefix=/usr \
		--sysconfdir=/etc \
		--localstatedir=/var \
		--libexecdir=/usr/lib/networkmanager \
		--enable-more-warnings=yes \
		--disable-static
	make
}

package() {
	cd $pkgname

	make DESTDIR="${pkgdir}" sysconfdir=/etc libdir=/usr/lib install
}

