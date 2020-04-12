# Maintainer: Otreblan <oteblain@gmail.com>

pkgname=elfio-git
pkgver=Release_3.3.r23.g155d986
pkgrel=1
pkgdesc="ELFIO is a small, header-only C++ library that provides a simple interface for reading and generating files in ELF binary format"
arch=('i686' 'x86_64')
url="https://github.com/serge1/ELFIO"
license=('MIT')
depends=('gcc-libs')
makedepends=('git')
provides=(${pkgname%-git})
conflicts=(${pkgname%-git})
options=()
source=("$pkgname::git+$url.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	( set -o pipefail
	git describe --long 2>/dev/null | sed 's/^v-//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cd "$pkgname"

	autoreconf --install
	./configure --prefix=/usr
	make
}

check() {
	cd "$pkgname"
	make -k check
}

package() {
	cd "$pkgname"
	make DESTDIR="$pkgdir" install
	install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
