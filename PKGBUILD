pkgname=shellex
pkgdesc='zsh/urxvt based program launcher'
pkgver=0.1
pkgrel=1
arch=('i686' 'x86_64')
license=(BSD)
depends=(zsh rxvt-unicode)
source=("$pkgname-$pkgver.tar.gz::https://github.com/Merovius/shellex/archive/$pkgver.tar.gz")
sha512sums=('31546b13090af9c64c9c5879f9b9a2ac21c54934b8ddb83646e9154a8d5aaa9f32629ef386f11cab5db56d80f0bc8e416618b9b7abb8e863c089fb343343c173')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make install DESTDIR="$pkgdir"
	install -D -m 755 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/shellex/LICENSE"
}
