# Maintainer: Guillaume Michaud <michaudg@gmail.com>

pkgname=xow
pkgver=0.4
pkgrel=2
pkgdesc='Linux driver for the Xbox One wireless dongle'
arch=('x86_64')
url='https://github.com/medusalix/xow'
license=('GPL2')
depends=('libusb')
conflicts=('xow-git')
install=$pkgname.install
source=("https://github.com/medusalix/xow/archive/v${pkgver}.tar.gz")
md5sums=('f291b4818b19e97c2fc0bab543bf07cc')

build() {
	cd "$pkgname-$pkgver"
	make BUILD=RELEASE
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR=$pkgdir/usr PREFIX="" install
}
