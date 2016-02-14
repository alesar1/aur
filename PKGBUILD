# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=libraqm
pkgver=0.1.0
pkgrel=1
pkgdesc="A library that encapsulates the logic for complex text layout"
arch=('i686' 'x86_64')
url="https://github.com/HOST-Oman/libraqm"
license=('custom')
depends=('freetype2' 'harfbuzz' 'fribidi' 'glib2' 'gtk-doc')
provides=('libraqm.so')
conflicts=('libraqm-git')
source=("$pkgname"-"$pkgver".tar.gz::"https://github.com/HOST-Oman/libraqm/archive/v${pkgver}.tar.gz")
sha256sums=('5c3565aba16b5a49fcb6ebd8a15c9a4c54b0dce518ae120f82b8867db4e52020')

prepare() {
	cd "$pkgname"-"$pkgver"
	
	./autogen.sh
}

build() {
	cd "$pkgname"-"$pkgver"
	
	./configure \
	        --prefix=/usr \
	        --enable-static=no \
	        --enable-shared=yes \
	        --enable-fast-install=yes \
	        --enable-gtk-doc=yes \
	        --enable-gtk-doc-html=yes \
	        --enable-gtk-doc-pdf=no
	
	make
}

package() {
	cd "$pkgname"-"$pkgver"
	
	make DESTDIR="$pkgdir/" install
	
	install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
