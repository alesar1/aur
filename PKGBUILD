# Maintainer: Christoph Drexler <chrdr at gmx dot at>

pkgname=grisbi
pkgver=1.2.0
pkgrel=1
pkgdesc="Personal financial management program"
arch=('x86_64')
url="http://www.grisbi.org"
license=('GPL')
depends=('desktop-file-utils' 'gtk3' 'libgsf')
makedepends=('gettext' 'grep' 'imagemagick' 'intltool')
optdepends=('goffice0.8: for drawing charts' 'libofx: support for the OFX banking standard')
options=(!libtool)
install=grisbi.install
source=("http://downloads.sourceforge.net/${pkgname}/${pkgname}-${pkgver}.tar.bz2"
        "bugfix-1898.patch")
sha256sums=('0befa26390faa3bbb4820ebcdf11bfc4b1046108bd03ffa7c12e1647c2fa423f'
            'e6c14af8bc4fa77fb8f55bfdefa2f954462f6a7b218eeef663422e9acb6ab2cb')

prepare() {
	cd "${pkgname}-${pkgver}"
	patch -p1 < "${srcdir}/bugfix-1898.patch"
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
