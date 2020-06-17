# Maintainer: fward <howard Dot main At outlook Dot com>
pkgname=kangaroo-bin
_pkgname=kangaroo
pkgver=0.26.1.200615
pkgrel=1
pkgdesc="Kangaroo is a SQL client and admin tool for popular databases"
arch=('x86_64')
url="https://dbkangaroo.github.io/"
license=('custom')
depends=('glib2' 'gtk3' 'gdk-pixbuf2' 'libgee' 'json-glib' 
	'libsoup' 'libgda' 'gtksourceview4' 'webkit2gtk' 'libssh2' 'openssl')
makedepends=('curl')
optdepends=('libgda-mysql: MySQL support' 'libgda-postgres: PostgreSQL support')
provides=('kangaroo')
conflicts=('kangaroo')

DLAGENTS=("https::/usr/bin/curl -A 'Mozilla' -fLC - --retry 3 --retry-delay 3 -o %o %u")

source=(
    "https://github.com/dbkangaroo/kangaroo/releases/download/v${pkgver}/${_pkgname}_${pkgver}_arch.tar.gz"
)
sha256sums=(
	"e9f42d0de49544a3904b4918edd8e4dc62b8224b27f30f88e38f772f98460653"
)

prepare() {
	tar -zxf "${_pkgname}_${pkgver}_arch.tar.gz"
}

package() {
	mkdir "${pkgdir}/usr/bin" -p
	mkdir "${pkgdir}/usr/share/pixmaps" -p
	mkdir "${pkgdir}/usr/share/licenses" -p
	mkdir "${pkgdir}/usr/share/applications" -p
	mkdir "${pkgdir}/usr/share/metainfo" -p
	install -Dm755 "${srcdir}/kangaroo/kangaroo" "${pkgdir}/usr/bin/kangaroo"
	install -Dm644 "${srcdir}/kangaroo/LICENSE" "${pkgdir}/usr/share/licenses/kangaroo/LICENSE"
	install -Dm644 "${srcdir}/kangaroo/kangaroo.svg" "${pkgdir}/usr/share/pixmaps/kangaroo.svg"
	install -Dm644 "${srcdir}/kangaroo/kangaroo.desktop" "${pkgdir}/usr/share/applications/kangaroo.desktop"
	install -Dm644 "${srcdir}/kangaroo/kangaroo.appdata.xml" "${pkgdir}/usr/share/metainfo/kangaroo.appdata.xml"
}
