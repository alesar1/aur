# Maintainer: Bruno Bollos Correa <bollos@outlook.com.br>
pkgname=libremines

pkgver=1.6.3
pkgrel=1
pkgdesc="A Free/Libre and Open Source Software Qt based Minesweeper game available for GNU/Linux and FreeBSD"
arch=('x86_64')
url="https://github.com/Bollos00/LibreMines"
license=('GPL3')
groups=()
depends=('qt5-base' 'hicolor-icon-theme' 'qt5-svg')
makedepends=('cmake')
provides=('libremines')
conflicts=('libremines')
source=("LibreMines-$pkgver.tar.gz::https://github.com/Bollos00/LibreMines/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('782dea572996966b00b644592a90e8b5ac2781c7891df24c8748ba722c4caadf')


build() {
	cd $srcdir/LibreMines-$pkgver
	mkdir builddir && cd builddir
	cmake -DCMAKE_INSTALL_PREFIX=/usr ..
	make
}

package() {
	cd $srcdir/LibreMines-$pkgver/builddir
	make DESTDIR="$pkgdir" install
}
