# Maintainer: Salvador Pardiñas <darkfm@vera.com.uy>
pkgname=woeusb-git
pkgver=r486.57a510b
pkgrel=2
pkgdesc="A Linux program to create Windows USB stick installer from a real Windows DVD or an image"
arch=('x86_64')
url="https://github.com/slacka/WoeUSB"
license=('GPL3')
groups=()
depends=('wxgtk2' 'grub')
makedepends=('git')
provides=("woeusb")
conflicts=("")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/slacka/WoeUSB.git')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/WoeUSB"
# Git, no tags available
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/WoeUSB"
	autoreconf --force --install
}

build() {
	cd "$srcdir/WoeUSB"
	autoconf
	./configure
	make
}

package() {
	cd "$srcdir/WoeUSB"
	make DESTDIR="$pkgdir/" prefix="/usr/" install
}
