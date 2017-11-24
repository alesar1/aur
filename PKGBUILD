# Contributor: Dmitry Pritykin maisvendoo@gmail.com

pkgname=qmaster
pkgver=0.1.0
pkgrel=1
pkgdecs="Modbus RTU master device emulator for PC"
arch=('x86_64')
url="https://github.com/masivendoo/qmaster.git"
license=('GPL')
depends=('qt5-base')
makedepends=('git' 'gendesk')

source=("git+https://github.com/maisvendoo/qmaster.git")

sha256sums=('SKIP')

build() {
	
	cd $srcdir
	mkdir build
	cd build
	qmake ../$pkgname
	make
}

prepare() {

	
	gendesk -n --pkgname=$pkgname --pkgdesc=$pkgname
}

package() {
	
	cd $srcdir/$pkgname
	install -Dm644 LICENSE $pkgdir/usr/share/license/$pkgname/LICENSE
	install -Dm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
	install -Dm644 resources/img/logo.png $pkgdir/usr/share/pixmaps/$pkgname.png
	
	cd ../bin
	install -Dm755 $pkgname $pkgdir/usr/bin/$pkgname 
}

