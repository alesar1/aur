# Maintainer: yk <yk at archlinuxcn dot org>

pkgname=shadowsocks-qt5
pkgver=2.4.0
pkgrel=1
pkgdesc="A fast, reliable and cross-platform GUI fronted for Shadowsocks."
arch=("i686" "x86_64")
url="http://github.com/librehat/$pkgname"
license=("GPL3")
depends=("qt5-base>=5.2" "botan-1.10" "qrencode" "libqtshadowsocks>=1.4.2" "zbar")
makedepends=("qtchooser" "git" "make")
provides=("$pkgname")
conflicts=("$pkgname")
install=$pkgname.install

source=("http://github.com/librehat/$pkgname/archive/v$pkgver.tar.gz"
        "shadowsocks-qt5.install"
)
sha1sums=('a6748d4dc2704c8dd0860f9d249562fe4c6e466e'
        'c54b62265d83554e71c98c69511937e1f01911c3'
)

build() {
	cd "$srcdir/$pkgname-$pkgver"
	qmake INSTALL_PREFIX=/usr
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make INSTALL_ROOT="$pkgdir" install
}
