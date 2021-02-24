# Maintainer: Gabriel Guldner <gabriel at guldner . eu>

# Contributor: hashworks <mail@hashworks.net>

pkgname=wiki-js
_pkgname=wiki-js
pkgver=2.5.170
pkgrel=2
pkgdesc="Wiki.js | A modern, lightweight and powerful wiki app built on Node.js"
license=('AGPL3')
arch=('any')
depends=('nodejs>=10.12.0')
optdepends=('mariadb' 'postgresql')
makedepends=('yarn')
provides=($_pkgname)
conflicts=($_pkgname)
backup=('etc/wiki-js/config.yml')
url='https://github.com/Requarks/wiki'
source=(
	"wiki-js-${pkgver}.tar.gz::https://github.com/Requarks/wiki/releases/download/${pkgver}/wiki-js.tar.gz"
	"wiki-js.service"
	"wiki-js.sysusers"
	"wiki-js.tmpfiles"
	"config.sample.yml.patch"
)
sha256sums=('37c8415bb19bc4e7923123f7c37d7609ef737bb90bb8bea0eb8cf5615517e99b'
            '39bfd1390d3f2eba2522d750b89176aeefcdfdd1e3b2ba4d10276f1b7d3c55e8'
            '64b73d48ab564f11a174377e063da1ff4d8c36000ee13a7914ec8479aa540b22'
            'ce6fa54a3f4f28a635b68ef4b869fe08c99b2ea3387065766efa57260d1be453'
            '0924b4ae73e4787ff50f0f21eb43bb2c41e06a2cc03d841de90f95d570d0e7e3')

prepare() {
	cd "$srcdir"
	patch config.sample.yml ../config.sample.yml.patch
}

package() {
	cd "$srcdir"

	install -Dm644 "wiki-js.service" -t "${pkgdir}/usr/lib/systemd/system"
	install -Dm644 "wiki-js.sysusers" "${pkgdir}/usr/lib/sysusers.d/wiki-js.conf"
	install -Dm644 "wiki-js.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/wiki-js.conf"

	install -Dm644 -o 5494 -g 5494 "config.sample.yml" "${pkgdir}/etc/wiki-js/config.yml"

	install -Dm644 "package.json" -t "${pkgdir}/usr/lib/wiki-js"
	cp -aR "assets" "server" "node_modules" "${pkgdir}/usr/lib/wiki-js"
}
