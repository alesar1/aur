# Maintainer: Tim Cassels <cassels2025@gmail.com>

pkgname=flnet
pkgver=7.3.2
pkgrel=1
pkgdesc="voice net controller database / check-in application"
arch=("x86_64")
url="http://www.w1hkj.com/"
license=("gpl")
depends=()
optdepends=()
source=("https://downloads.sourceforge.net/project/fldigi/$pkgname/$pkgname-$pkgver.tar.gz")
md5sums=("2b1df942ae1272cdb64f4ffbf8eda13a")

package() {
	cd ..
	install -Dm644 $pkgname.desktop "${pkgdir}/usr/share/applications/$pkgname.desktop"
	install -Dm644 $pkgname.xpm "${pkgdir}/usr/share/icons/$pkgname.xpm"
	cd "${srcdir}/$pkgname-$pkgver"
	pwd
	./configure
	make
	mkdir -p "${pkgdir}/usr/bin"
	install -Dm755 src/$pkgname "${pkgdir}/usr/bin/$pkgname"
}
