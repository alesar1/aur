# Maintainer: Bennett Piater <bennett at piater dot name>

pkgname=aursec-git
pkgver=v0.0.6b.r3.bff1e32
pkgrel=2
pkgdesc='Verify AUR package sources against hashes stored in a blockchain.'
arch=(any)
url="https://github.com/clawoflight/${pkgname%-git}"
license=('custom:MPL2')

provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")

depends=(firejail geth vim bc)
makedepends=(pandoc git)
checkdepends=(shellcheck)
#optdepends=()

#changelog="CHANGELOG"
source=("git+https://github.com/clawoflight/${pkgname%-git}.git")
sha256sums=('SKIP')
validpgpkeys=('871F10477DB3DDED5FC447B226C7E577EF967808')
install=aursec-git.install

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-git}/aursec"
	make
}

check() {
	cd "$srcdir/${pkgname%-git}/aursec"
	make -k check
}

package() {
	cd "$srcdir/${pkgname%-git}/aursec"
	make PREFIX="/usr" DESTDIR="$pkgdir/" install
}
