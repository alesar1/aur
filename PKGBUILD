# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Jeffrey E. Bedard <jefbed@gmail.com>
pkgname=jbwm
pkgver=1.35
pkgrel=1
epoch=
pkgdesc="Simple X window manager"
arch=('x86_64' 'x86')
url="https://github.com/jefbed/jbwm"
license=('MIT')
groups=()
depends=('libxau' 'libx11')
makedepends=()
checkdepends=()
optdepends=()
options=()
install=
changelog=
source=( "https://github.com/jefbed/jbwm/archive/$pkgver.tar.gz" )
noextract=()
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
	make
}

# Unimplemented

package() {
	cd "$pkgname-$pkgver"
	mkdir -p $pkgdir/usr/bin
	make DESTDIR="$pkgdir" install
}
md5sums=('b69a6b01a59420f120373e2f5b0e0a67')
