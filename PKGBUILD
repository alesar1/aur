# Maintainer: grufo <madmurphy333@gmail.com>

pkgname=libconfini
pkgver=0.9
pkgrel=2
pkgdesc='Yet another INI parser'
arch=('i686' 'x86_64')
url="https://madmurphy.github.io/libconfini/"
license=("GPL")
source=("https://github.com/madmurphy/${pkgname}/archive/${pkgver}-${pkgrel}.tar.gz")
md5sums=('b6ab97cfaed652aca02fe17590244df8')

prepare() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	./autogen.sh
	./configure --prefix=/usr

}

build() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	make

}

package() {

	cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
	make DESTDIR="${pkgdir}" install

}

