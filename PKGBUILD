# Maintainer: Sebastian Bøe <sebastianbooe@gmail.com>
pkgname=arachne-pnr-git
pkgrel=1
pkgver=r135.eb7876b
pkgdesc=" Place and route tool for FPGAs"
arch=('x86_64' 'i686')
url="https://github.com/cseed/arachne-pnr"
license=('GPL2')
depends=('icestorm-git')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/cseed/arachne-pnr.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  make ICEBOX=/usr/share/icebox
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make ICEBOX=/usr/share/icebox DESTDIR="$pkgdir/usr" install
}
