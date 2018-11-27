#Maintainer: Sebastian "Terodom" Muxel <terodom@protonmail.com>

pkgname=termnote-git
makedepends=("git" "cmake")
pkgrel=1
pkgver=1.1.0.r0.8c1b94f
pkgdesc="Terminal Notes Application"
arch=(x86_64)
url="https://github.com/Terodom/termNote"
license=(MIT)
provides=(termNote)
conflicts=(termNote)
source=("termnote::git+${url}.git")
md5sums=("SKIP")

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s" "$(git describe --tags --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-s" CMakeLists.txt
}

package() {
	cd "$srcdir/${pkgname%-git}"
	sudo make install
}
