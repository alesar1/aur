# Maintainer: Raja Mukherji <rajamukherji@gmail.com>
pkgname=rabs
pkgver=1.5.1
pkgrel=4
epoch=
pkgdesc="Generic imperative build system"
arch=('x86_64' 'i686')
url=""
license=('MIT')
groups=()
depends=('gc' 'sqlite')
makedepends=()
checkdepends=()
optdepends=()
provides=('rabs')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+https://github.com/wrapl/$pkgname#tag=v$pkgver")
noextract=()
md5sums=(SKIP)
validpgpkeys=()

prepare() {
	cd "$pkgname"
	git submodule update --init --recursive
}

build() {
	cd "$pkgname"
	make
}

check() {
	cd "$pkgname"
}

package() {
	cd "$pkgname"
	make PREFIX="$pkgdir/usr" install
}
