# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Derek Hemingson <b.derehemi@gmail.com>
# Contributor: Derek Hemingson <b.derehemi@gmail.com>

pkgname=caser
pkgver=1.0.2
pkgrel=1
epoch=
pkgdesc="Converts input strings to a standard naming convention."
arch=('x86_64')
url="https://github.com/Shadetheartist/caser"
license=('GPL')
groups=()
depends=('glibc')
makedepends=()
checkdepends=('check')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/Shadetheartist/caser/releases/download/${pkgver}/caser-${pkgver}.tar.gz")
noextract=()
sha256sums=('69503dfa75423ff96e98efc3ebcaf86bd592b73ec95f3e2e9d46ce23d18a5999')
validpgpkeys=()

build() {
	cd "caser-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "caser-$pkgver"
	./configure --prefix=/usr
	make check
}

package() {
	cd "caser-$pkgver"
	make DESTDIR="$pkgdir/" install
}
