# Maintainer and Contributor: Vladimir Kamensky   <mastersoft24@yandex.ru>


pkgname=cloudcross
pkgver=v1.2.2
pkgrel=2
pkgdesc="CloudCross is a improved multi-cloud client with YAndex disk, Google Drive and Dropbox support."
arch=('i686' 'x86_64')
url="http://cloudcross.mastersoft24.ru"
license=('GPL')
categories=('network')
replaces=('grive2')
#conflicts=('grive2')


depends=( 'qt5-base')
makedepends=( 'qt5-base')
options=(!emptydirs)


source=("http://cloudcross.mastersoft24.ru/download/archive/?r=pacman")


md5sums=("ce3aa8ce169897549fb288a634d1c536")


build() {

	cd "$srcdir/cloudcross-$pkgver-$pkgrel"
	
	rm -rf build
	mkdir build
	cd build
	qmake .. 
	make   
}
 
package() {
	cd "$srcdir/cloudcross-$pkgver-$pkgrel/build"
	
	mkdir -p "${pkgdir}/usr/bin"
        mkdir -p "${pkgdir}/usr/share/man/man0"
	
	cp "$srcdir/cloudcross-$pkgver-$pkgrel/build/ccross" "${pkgdir}/usr/bin"
        cp "$srcdir/cloudcross-$pkgver-$pkgrel/doc/ccross.1" "${pkgdir}/usr/share/man/man0"
	
	#ln -s "${pkgdir}/usr/bin/ccross" "${pkgdir}/usr/bin/CloudCross" 
	#ln -s "${pkgdir}/usr/bin/ccross" "${pkgdir}/usr/bin/grive2" 

}
