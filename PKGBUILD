# Maintiner: Victor DENIS <victordenis01@gmail.com>
# Contributor: hotaru70o, ilearn32
pkgbase=sielo-browser
pkgname=sielo-browser
pkgver=1.8.12
pkgrel=1
pkgdesc="A simple, customizable and fast web browser"
arch=(x86_64)
url="https://feldrise.com/Sielo"
license=('custom:MIT')
depends=('openssl-1.0' 'qt5-base' 'qt5-webengine' 'qt5-webchannel' 'qt5-location' 'qt5-declarative')
replaces=('sielo-navigateur')
source=(https://www.feldrise.com/Sielo/Linux/$pkgname-$pkgver.tar.gz)
md5sums=('4b63aa674d75d615a67f5989b1b1f3b3')
package() {
	cd "$srcdir/$pkgname-$pkgver"
	mkdir build && cd build && cmake -DCMAKE_BUILD_TYPE=Release .. && make -j2
	cp -r ../usr $pkgdir/
	cp sielo-browser $pkgdir/usr/bin
	cp SNCompiler/sielo-compiler $pkgdir/usr/bin
	chmod +x $pkgdir/usr/bin/sielo-browser
	chmod +x $pkgdir/usr/bin/sielo-compiler
}
