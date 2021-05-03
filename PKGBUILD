# Maintainer: grufo <madmurphy333 AT gmail DOT com>

pkgname='nextgen'
pkgver='0.1.7'
pkgrel=1
pkgdesc="A small bash script that lets you easily set up a new extension project for GNOME's Nautilus file manager"
arch=('any')
url="https://gitlab.gnome.org/madmurphy/${pkgname}"
license=('GPL')
depends=('bash' 'libnautilus-extension')
conflicts=("${pkgname}-git")
source=("https://gitlab.gnome.org/madmurphy/${pkgname}/-/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('9d9aceb857985dc4792ae2d2644512c8b6c5e23d87709a04604864c2c55eb4ac')

prepare() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	autoreconf -i

}

build() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	./configure --prefix=/usr

}

package() {

	cd "${srcdir}/${pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install

}

