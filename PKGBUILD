# Maintainer: Tim Cassels <cassels2025@gmail.com>

pkgname=flwrap
pkgver=1.3.4
pkgrel=1
pkgdesc="file encapsulation / compression"
arch=("x86_64")
url="http://www.w1hkj.com/"
license=("gpl")
depends=()
optdepends=()
source=("https://downloads.sourceforge.net/project/fldigi/flwrap/$pkgname-$pkgver.tar.gz")
md5sums=("599709df9f410ad7cab02ae52424b9d8")

package() {
	cd "${srcdir}/$pkgname-$pkgver"
	pwd
	./configure
	make
	mkdir -p "${pkgdir}/usr/bin"
	install -Dm755 src/$pkgname "${pkgdir}/usr/bin/$pkgname"
}
