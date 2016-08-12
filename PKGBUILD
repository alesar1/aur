# Maintainer: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Alexander Rødseth <rodseth@gmail.com>
# Contributor: Franco Iacomella <yaco@gnu.org>

_pkgbase='drawpile'
pkgbase="${_pkgbase}-beta"
pkgname=("${pkgbase}"{,'-client','-server','-common'})
pkgver=2.0.0b1
pkgrel=1
pkgdesc='Collaborative drawing program specially made for use with pen tablets - 2.0 beta branch'
arch=('i686' 'x86_64')
url='http://drawpile.net/'
license=('GPL3')
makedepends=('karchive' 'qt5-multimedia' 'qt5-tools' 'qt5-svg' 'ninja' 'cmake')
source=("http://drawpile.net/files/src/${_pkgbase}-${pkgver}.tar.gz")
sha256sums=('b23c2624dcf9624557c0e4c7b0b7bbd287a9509fe5e6599ad30eb7eb1098190a')

_cmakeargs+=('-Wno-dev')

build() {
	cd "${_pkgbase}-${pkgver}"

	# Ensure build is an empty directory
	rm -rf 'build'
	mkdir -p 'build'
	cd 'build'

	cmake .. -DCMAKE_INSTALL_PREFIX='/usr' -G Ninja "${_cmakeargs[@]}"
	ninja
}

package_drawpile-beta() {
	pkgdesc+=' (meta package)'
	arch=('any')
	depends=("${pkgbase}-client" "${pkgbase}-server")
	conflicts=("${_pkgbase}")
}

package_drawpile-beta-client() {
	pkgdesc+=' (client)'
	depends=("${pkgbase}-common" 'karchive' 'qt5-multimedia')
	optdepends=('kdnssd: automatic service discovery (such as printers)'
		'giflib: GIF support'
		'miniupnpc: UPnP support'
		'qt5-color-widgets: alternative color wheel')
	conflicts=("${_pkgbase}-client")
	cd "${_pkgbase}-${pkgver}"

	DESTDIR="${pkgdir}" ninja -C 'build' install
	rm -rfv "${pkgdir}"/usr/{share,bin/drawpile-srv}
}

package_drawpile-beta-server() {
	pkgdesc+=' (server)'
	depends=("${pkgbase}-common" 'karchive')
	optdepends=('libsystemd: systemd and logging support')
	conflicts=("${_pkgbase}-server")
	cd "${_pkgbase}-${pkgver}"

	DESTDIR="${pkgdir}" ninja -C 'build' install
	rm -rfv "${pkgdir}"/usr/{share,bin/drawpile{,-2.*}}
}

package_drawpile-beta-common() {
	pkgdesc+=' (common files)'
	arch=('any')
	depends=('desktop-file-utils')
	conflicts=("${_pkgbase}-common")
	install="${pkgbase}.install"
	cd "${_pkgbase}-${pkgver}"

	DESTDIR="${pkgdir}" ninja -C 'build' install
	rm -rfv "${pkgdir}/usr/bin"
	install -Dvm644 "desktop/${_pkgbase}.svg" \
		"${pkgdir}/usr/share/pixmaps/${_pkgbase}.svg"
	install -Dvm644 "desktop/${_pkgbase}.desktop" \
		"${pkgdir}/usr/share/applications/${_pkgbase}.desktop"
}