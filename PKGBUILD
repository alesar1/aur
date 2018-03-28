# Maintainer: Einhard Leichtfuß <alguien@respiranto.de>
pkgname=freedict-tools
pkgver=0.1.0
pkgrel=1
pkgdesc="Tools to compile the Freedict dictionaries"
arch=('any')
url="http://www.freedict.org/"
license=('GPL' 'GPL3' 'CC-BY-SA')
source=("freedict-tools_${pkgver}.tar.gz::https://github.com/freedict/tools/archive/v${pkgver}.tar.gz")
sha512sums=('60b1d5027cb9609e14bf13c260c1d5e5158b1f23dc631fa625ba1452fbdea37be915bfe2dbe5c0f425ebe930104799d1fb73b398a48066984990e4a0cd7ebb4a')

package()
{
	mkdir -p "${pkgdir}/usr/lib/${pkgname}"
	cp -r tools-${pkgver}/. "${pkgdir}/usr/lib/${pkgname}/"

	mkdir -p "${pkgdir}/usr/share/doc/freedict/tools"
	ln -s /usr/lib/${pkgname}/README.md \
		"${pkgdir}/usr/share/doc/freedict/tools/"
}
