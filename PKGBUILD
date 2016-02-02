# Maintainer and Contributor: Vladimir Kamensky  <mastersoft24@yandex.ru>


pkgname=cloudcross
pkgver=1.0.1
pkgrel=2
pkgdesc="CloudCross is a improved Google Drive sync client."
arch=('i686' 'x86_64')
url="http://cloudcross.mastersoft24.ru"
license=('GPL')
categories=('network')
replaces=('grive2')
#conflicts=('grive2')


depends=( 'qt5-base')
makedepends=( 'qt5-base')
options=(!emptydirs)


source=("http://cloudcross.mastersoft24.ru/download/?v=$pkgver-rc3&r=pacman")


md5sums=("")


build() {

	cd "$srcdir/CloudCross-$pkgver-rc2"
	
	rm -rf build
	mkdir build
	cd build
	qmake .. 
	make   
}
 
package() {
	cd "$srcdir/CloudCross-$pkgver-rc2/build"
	
	mkdir -p "${pkgdir}/usr/bin"
	
	cp "$srcdir/CloudCross-$pkgver-rc2/build/ccross" "${pkgdir}/usr/bin"
	
	#ln -s "${pkgdir}/usr/bin/ccross" "${pkgdir}/usr/bin/CloudCross" 
	#ln -s "${pkgdir}/usr/bin/ccross" "${pkgdir}/usr/bin/grive2" 

}
