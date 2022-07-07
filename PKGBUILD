# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=image-roll-bin
pkgver=2.0.1
pkgrel=1
pkgdesc="GTK image viewer with basic image manipulation tools"
arch=('x86_64')
url="https://github.com/weclaw1/image-roll"
license=('MIT')
depends=('gtk4')
provides=("image-roll")
conflicts=("image-roll")
source=("image-roll-$pkgver.deb::$url/releases/download/$pkgver/image-roll_${pkgver}_amd64.deb")
sha256sums=('2a677a7519c71a077b49bf1caf166c7017cd2d6b10fd61d925b7cc91fb33f93c')

prepare() {
	mkdir -p "$pkgname-$pkgver"
	bsdtar -xf data.tar.xz -C "$pkgname-$pkgver"
}

package() {
	cd "$pkgname-$pkgver"
	cp -a --no-preserve=ownership . "$pkgdir/"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s "/usr/share/doc/image-roll/copyright" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
