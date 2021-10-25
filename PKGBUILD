# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

_pkgname=netns-helper
pkgname=netns-helper-git
provides=("${_pkgname}")
conflicts=("${_pkgname}")
pkgver=r44.755de37
pkgrel=1
pkgdesc='Helper systemd services to create network namespaces for other programs and services.'
url="https://gitlab.com/patlefort/${_pkgname}"
license=('GPL3')
depends=('systemd' 'iproute2')
arch=('any')
optdepends=()
makedepends=('git' 'libxslt' 'docbook-xsl')
sha256sums=('SKIP')
source=("git+https://gitlab.com/patlefort/${_pkgname}")
options=('!strip')

pkgver() {
	cd "${_pkgname}"
	( set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	mkdir -p "build/man" && cd "build/man"
	xsltproc 'http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl' "${srcdir}/${_pkgname}/man/manual.xml"
}

package() {
	cd "${_pkgname}"
	
	install -dm755 "${pkgdir}/etc/netns-helper/ns"
	install -dm755 "${pkgdir}/usr/lib/systemd/system"
	install -Dm644 'systemd/system'/* -t "${pkgdir}/usr/lib/systemd/system"
	install -dm755 "${pkgdir}/usr/lib/netns-helper"
	install -Dm755 'scripts/netns-helperctl' -t "${pkgdir}/usr/lib/netns-helper/"
	install -Dm755 'scripts/netns-dhclient-script-wrapper' -t "${pkgdir}/usr/lib/netns-helper/"
	install -Dm755 'scripts/netns-helper' -t "${pkgdir}/usr/bin/"
	install -Dm644 "${srcdir}/build/man/"* -t "${pkgdir}/usr/share/man/man1"
	install -Dm644 'license.txt' -t "${pkgdir}/usr/share/licenses/${_pkgname}"
}
