# Maintainter: SlavMetal <7tc@protonmail.com>

pkgname=ascii-patrol-git
_pkgname=ascii-patrol
_pkgname2=asciipat
pkgver=r16.0f19d87
pkgrel=1
pkgdesc="Ascii Patrol is an ASCII game project which was mainly inspired by 'Moon Patrol'."
arch=('any')
url="https://github.com/msokalski/ascii-patrol"
license=('GPL')
depends=('libpulse' 'libx11')
makedepends=('git')
optdepends=('curl: get hi-scores from ascii-patrol.com')
provides=("${_pkgname2}")
conflicts=("${_pkgname}")
source=(git+https://github.com/msokalski/ascii-patrol.git)
md5sums=('SKIP')

prepare() {
	cd "$srcdir"/"$_pkgname"
	chmod +x build.sh
}

pkgver() {
	cd "$srcdir"/"$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir"/"$_pkgname"
	./build.sh
}

package() {
	cd "$srcdir"/"$_pkgname"
	mkdir -p "$pkgdir"/usr/bin
	install -Dm755 "$_pkgname2" "$pkgdir"/usr/bin
}

