# Maintainer: Artjom Löbsack <me@ceigh.com>
pkgname=git-hours
pkgver=1.1.4
pkgrel=1
epoch=
pkgdesc="Count the time spent on code via git"
arch=('x86_64')
url="https://github.com/ceigh/git-hours"
license=('GPL3')
groups=()
depends=('libgit2')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/ceigh/$pkgname/archive/$pkgver.tar.gz")
noextract=()
md5sums=("439faf492de3cc4a17b801779492db5d")
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
	make
}

package() {
	cd "$pkgname-$pkgver"
  mkdir -p -- $pkgdir/usr/{bin,local/man/man1}
	make PREFIX=$pkgdir/usr MAN_PREFIX=$pkgdir/usr/local/man install
}
