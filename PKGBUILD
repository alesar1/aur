# Maintainer: Kemel Zaidan <kemelzaidan@gmail.com>
pkgname=rp-bookshelf
pkgver=r124.7a742e3
pkgrel=1
pkgdesc="Browser for Raspberry Pi Press publications in PDF format"
arch=('x86_64')
url="https://github.com/raspberrypi-ui/bookshelf"
license=('BSD')
depends=('glib2' 'gtk3>=3.24' 'libx11' 'intltool' 'libcurl-gnutls')
makedepends=('git')
provides=("rp-bookshelf")
conflicts=("rp-bookshelf" "rp-bookshelf-git")
source=('git+https://github.com/raspberrypi-ui/bookshelf.git')
sha256sums=('SKIP')

pkgver() {
  cd "bookshelf"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "bookshelf"
}

build() {
	cd "bookshelf"
	./autogen.sh
	./configure --prefix=/usr
	make
}

check() {
	cd "bookshelf"
	make -k check
}

package() {
	cd "bookshelf"
	make DESTDIR="$pkgdir/" install
}
