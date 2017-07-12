# Maintainer: Jason Papakostas <vithos@gmail.com>
pkgname=xsel-git
pkgver=r66.aa7f57e
pkgrel=1
pkgdesc='a command-line program for getting and setting the contents of the X selection'
arch=(i686 x86_64)
url='http://www.vergenet.net/~conrad/software/xsel/'
license=('custom')
depends=('libx11')
makedepends=('libxt' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/kfish/xsel.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	# https://github.com/kfish/xsel/commit/9101e37fe0692809c9f37b6034ab2ce05a0f882d#commitcomment-19714089
	cp README{.md,}
}

build() {
	cd "$srcdir/${pkgname%-git}"
	./autogen.sh
	./configure --prefix=/usr
	make
}

check() {
	cd "$srcdir/${pkgname%-git}"
	make -k check
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir" install
	mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
	install -D -m0644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
