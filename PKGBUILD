# Maintainer: Frederic Bezies <fredbezies at gmail dot com>
# Contributor: Christoph Drexler <chrdr at gmx dot at>
# Contributor: me at oguzkaganeren dot com dot tr
pkgname=grisbi
pkgver=2.0.4
pkgrel=1
pkgdesc="Shared files for the finance management program Grisbi."
arch=('x86_64')
url="http://www.grisbi.org"
license=('GPL')
depends=('gtk3' 'libgsf')
optdepends=('libofx: for OFX support')
makedepends=('intltool' 'imagemagick')
provides=('grisbi')
conflicts=('grisbi-git')
replaces=('grisbi')
options=(!libtool)
source=("http://downloads.sourceforge.net/${pkgname}/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('e32906df5d077b5685694368e5f0a568cdd05850732844468a161fa9ac51d55a')

prepare() {
	cd "${pkgname}-${pkgver}"
	cd pixmaps
	convert -size 48x48 -background none grisbi.svg grisbi.png
}

build() {
	cd "${pkgname}-${pkgver}"
	./configure \
		--disable-frenchdoc \
		--prefix=/usr
	make
}

package() {
	cd "${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	install -Dm 0644 "${srcdir}/${pkgname}-${pkgver}/pixmaps/grisbi.png" \
		"${pkgdir}/usr/share/pixmaps/grisbi/grisbi.png"
}
