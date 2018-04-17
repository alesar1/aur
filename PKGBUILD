# Maintainer: Jan Max Meyer <codepilot@phorward.info>
pkgname=phorward
pkgver=0.22.0
pkgrel=1
epoch=
pkgdesc="Versatile C library for parsing, lexing, regular expressions and more."
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://phorward.info"
license=('BSD')
makedepends=()
checkdepends=()
optdepends=('txt2tags: Documentation generator')
#changelog=CHANGELOG
source=("https://phorward.info/download/phorward/$pkgname-$pkgver.tar.gz")
md5sums=('71f6b634aee491f6a574de42c223a84b')

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "$pkgname-$pkgver"
	make -k check
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}

