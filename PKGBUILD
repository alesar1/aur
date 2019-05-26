# Maintainer: robertfoster

pkgname=ndpi
pkgver=2.8
pkgrel=1
pkgdesc="Open and Extensible GPLv3 Deep Packet Inspection Library"
arch=('i686' 'x86_64')
url="http://www.ntop.org/products/ndpi/"
license=('GPL3')
conflicts=('ndpi-svn')
options=('staticlibs' '!strip')
source=("https://github.com/ntop/nDPI/archive/$pkgver.tar.gz")

build() {
	cd ${srcdir}/nDPI-$pkgver
	# Remove hardcoded path
	sed -i "s|\/usr\/local|\/usr\/|g" src/lib/Makefile.in example/Makefile.in
	sed -i "s|libdata|lib|g" Makefile.am
	./autogen.sh
	./configure --prefix=/usr --with-pic --includedir=/usr/include --libdir=/usr/lib
	make
}

package() {
	cd ${srcdir}/nDPI-$pkgver
	make DESTDIR="${pkgdir}" install
	ln -sr "/usr/include/$pkgname" "$pkgdir/usr/include/lib$pkgname"
}

md5sums=('99721d8ecb9b8e487047a7777df86403')
