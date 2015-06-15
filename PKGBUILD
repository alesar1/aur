# Contributor: Sebastian Wolf <fatmike303 at googlemail dot com>
pkgname=advancemame
pkgver=1.2
pkgrel=2
pkgdesc="A port of the MAME emulator for video hardware like TVs, Arcade monitors, PC monitors and LCD screens"
arch=('i686' 'x86_64')
url="http://advancemame.sourceforge.net"
depends=('sdl' 'alsa-lib' 'expat' 'freetype2' 'slang')
#makedepends=('nasm')
license=('GPL')
source=(http://downloads.sourceforge.net/sourceforge/$pkgname/$pkgname-$pkgver.tar.gz)
md5sums=('ef0cfd38e7c8859bc03ada60f51295c6')

build() {
	cd $srcdir/$pkgname-$pkgver
	./configure --prefix=/usr || return 1
	make || return 1
}

package() {
	cd $srcdir/$pkgname-$pkgver
	make	bindir="${pkgdir}/usr/bin/" \
			datadir="${pkgdir}/usr/share/" \
			mandir="${pkgdir}/usr/share/man/" \
			pkgdocdir="${pkgdir}/usr/share/doc/${pkgname}/" \
			install
}

