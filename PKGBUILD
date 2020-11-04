# Maintainer: robertfoster

pkgname=ndpi
pkgver=3.4
pkgrel=1
pkgdesc="Open and Extensible GPLv3 Deep Packet Inspection Library"
arch=('i686' 'x86_64')
url="http://www.ntop.org/products/ndpi/"
license=('GPL3')
conflicts=('ndpi-svn')
options=()
source=("https://github.com/ntop/nDPI/archive/$pkgver.tar.gz")

build() {
	cd ${srcdir}/nDPI-$pkgver
	./autogen.sh
        ./configure --prefix=/usr --with-pic --includedir=/usr/include --libdir=/usr/lib
	make
}

package() {
	cd ${srcdir}/nDPI-$pkgver
	make DESTDIR="${pkgdir}" install
}

md5sums=('4a2978b0d527a220ab46344444a1934c')
