# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=gotop-git
pkgver=1.5.0.r6.gd44be12
pkgrel=1
pkgdesc='A terminal based graphical activity monitor inspired by gtop and vtop'
arch=(x86_64)
url='https://github.com/cjbassi/gotop'
license=(AGPL)
makedepends=(go)
conflicts=(gotop-bin)
provides=(gotop-bin)
source=("${pkgname}::git+https://github.com/cjbassi/gotop")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$srcdir/$pkgname"

	install -m755 -d "$srcdir/go/src/github.com/cjbassi"
	cp -a "$srcdir/$pkgname" "$srcdir/go/src/github.com/cjbassi/gotop"
}

build() {
	cd "$srcdir/go/src/github.com/cjbassi/gotop"

	GOPATH="$srcdir/go" make dist/gotop
}

package() {
	cd "$srcdir/go/src/github.com/cjbassi/gotop"

	install -Dm755 dist/gotop $pkgdir/usr/bin/gotop
}
