# Maintainer: Alexander Schnaidt <alex.schnaidt at gmail dot com>
# Contributor: Linus Karlsson <arch at zozs dot se>
# Contributor: Peter Hultqvist <endnode dot se>
pkgname=ykpers
pkgver=1.17.1
pkgrel=1
pkgdesc="A small library for personalization of Yubico's USB key"
arch=('i686' 'x86_64' 'armv6h')
url="http://yubico.github.io/yubikey-personalization"
license=('custom:BSD')
depends=('libyubikey')
options=('!libtool')
source=(http://yubico.github.io/yubikey-personalization/releases/$pkgname-$pkgver.tar.gz)
sha256sums=('556baec2bbc94bae01293e64dc3873d68f880119ea5c3772737e4f3dc44f69c4')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	./configure --prefix=/usr --with-udevrulesdir=/usr/lib/udev/rules.d
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install

	install -D -m0644 $srcdir/$pkgname-$pkgver/COPYING $pkgdir/usr/share/licenses/$pkgname/COPYING
}

