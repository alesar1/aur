# Maintainer: grufo <madmurphy333@gmail.com>

pkgname=libconfini
pkgver=1.3
pkgrel=5
pkgdesc='Yet another INI parser'
arch=('i686' 'x86_64')
url="https://madmurphy.github.io/libconfini/"
license=("GPL")
makedepends=('intltool')
source=("https://github.com/madmurphy/${pkgname}/archive/${pkgver}-${pkgrel}.tar.gz")
md5sums=('1dcbec019dbb4360eda869113a400301')

prepare() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	./autogen.sh
	./configure --prefix=/usr CFLAGS='-g -O3'

}

build() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	make

}

package() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	make DESTDIR="${pkgdir}" install
	chmod +x "${pkgdir}/usr/share/doc/${pkgname}/examples/compile_example_c.sh"
	chmod +x "${pkgdir}/usr/share/doc/${pkgname}/examples/compile_typed_ini_c.sh"

}

