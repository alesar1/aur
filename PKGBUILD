# Maintainer: Erik Bročko <erik.brocko@letemsvetemapplem.eu>

pkgname=csdr-jketterl-git
pkgver=0.17.1.r38.gc4a970b
pkgrel=4
pkgdesc="A simple DSP library and command-line tool for Software Defined Radio."
arch=('i686' 'x86_64')
url="https://github.com/jketterl/csdr"
license=('GPL3')
depends=('fftw')
makedepends=('git' 'cmake')
conflicts=('csdr')
provides=('csdr')
source=("$pkgname"::'git://github.com/jketterl/csdr.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	# use git tag or fall back to number of revisions
	( set -o pipefail
		git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
	cmake -B build -S "$srcdir/$pkgname" \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-Wno-dev

	make -C build
}

package() {
	make -C build DESTDIR="$pkgdir/" install
}
