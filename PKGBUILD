# Maintainer: BasedUser <route@baseduser.eu.org>
# Contributor: Egor Vorontsov <sdoregor@sdore.me>

_pkgname=orbitfight
pkgname=${_pkgname}-git
pkgver=0.8.1.r11.g9cdc4f3
pkgrel=1
pkgdesc="A game in C++ written with SFML, very in-development (git version)"
arch=('x86_64')
url="https://github.com/Ilya246/${_pkgname}"
license=('GPL3')
depends=('ttf-hack')
makedepends=('sfml' 'gendesk')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("git+${url}.git")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "${srcdir}/${_pkgname}"

	gendesk --pkgname "${pkgname}" --pkgdesc "${pkgdesc}"
}

build() {
	cd "${srcdir}/${_pkgname}"

	make
}

package() {
	cd "${srcdir}/${_pkgname}"

	install -Dm755 "${_pkgname}" -t "${pkgdir}/usr/bin/"

	install -Dm644 'SERVERS.md' -t "${pkgdir}/usr/share/${_pkgname}/"

	install -Dm644 "${_pkgname}.desktop" -t "${pkgdir}/usr/share/applications/"
}
