# Maintainer: Ashymad <czilukim@o2.pl>
pkgname=sfk
_version=1.9.1
_revision=0
pkgver=${_version}.${_revision}
pkgrel=1
pkgdesc="Swiss File Knife - A Command Line Tools Collection"
arch=('x86_64')
url="http://stahlworks.com/dev/swiss-file-knife.html"
license=('BSD')
depends=('gcc-libs')
makedepends=()
source=("https://sourceforge.net/projects/swissfileknife/files/1-swissfileknife/${pkgver}/sfk-${_version}.tar.gz")
sha256sums=('4b856d98de359de1f0ec7cb1eaaf8c4f75e7f8f22194db8530d6bf3b27fa0eda')

prepare() {
	cd "$pkgname-$_version"
	sed -i 's/typedef long long      int64_t;//g' ./sfkmatch.hpp
	sed -i 's/#define bool  unsigned char//g' ./sfkbase.hpp
}

build() {
	cd "$pkgname-$_version"
	./configure --prefix=/usr
	make
}

package() {
	cd "$pkgname-$_version"
	make DESTDIR="$pkgdir/" install
	install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
