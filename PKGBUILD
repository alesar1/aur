# Maintainer: Salvador Pardiñas <darkfm@vera.com.uy>
pkgname=woeusb-git
pkgver=3.2.1.r0.g1aaec5f
pkgrel=1
pkgdesc="A Linux program to create Windows USB stick installer from a real Windows DVD or an image"
arch=('x86_64')
url="https://github.com/slacka/WoeUSB"
license=('GPL3')
groups=()
depends=('wxgtk2' 'grub' 'wxgtk-common' 'dosfstools'
		'parted' 'wget' 'ntfs-3g')
optdepends=('gksu')
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
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
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
