# Maintainer: Bruno Nova <brunomb.nova@gmail.com>
pkgname=nautilus-admin
pkgver=0.2.2
pkgrel=1
pkgdesc="Extension for Nautilus to do administrative operations"
arch=('any')
url="https://github.com/brunonova/$pkgname"
license=('GPL3')
depends=('nautilus' 'python-nautilus' 'polkit' 'gconf')
makedepends=('cmake>=2.6' 'gettext')
optdepends=('gedit: to use the "Edit as Administrator" action'
            'gnome-terminal: to use the "Run as Administrator" action')
install="$pkgname.install"
source=("https://github.com/brunonova/$pkgname/releases/download/v$pkgver/${pkgname}_$pkgver.tar.xz")
md5sums=('f5bc99533aa75f3d5ee3b7ca8a7cd9df')

build() {
	cd "$srcdir"
	cmake . -DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd "$srcdir"
	make DESTDIR="$pkgdir" install
	install -Dm644 "README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
	install -Dm644 "NEWS" "$pkgdir/usr/share/doc/$pkgname/NEWS"
	install -Dm644 "AUTHORS" "$pkgdir/usr/share/doc/$pkgname/AUTHORS"
}
