# Maintainer: Boris Timofeev <mashin87@gmail.com>
pkgname=punes
pkgver=0.98
pkgrel=1
epoch=
pkgdesc="Nintendo Entertaiment System emulator"
arch=('i686' 'x86_64')
url="http://forums.nesdev.com/viewtopic.php?t=6928"
license=('GPL2')
groups=()
depends=('sdl' 'qt5-base' 'alsa-lib' 'hicolor-icon-theme' 'desktop-file-utils')
makedepends=('autoconf-archive')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=$pkgname.install
changelog=
source=("https://github.com/punesemu/puNES/archive/v$pkgver.tar.gz")
noextract=()

md5sums=('6d7ba6270f4d19c9422ae8b11ee76080')

build() {
  cd "$srcdir/puNES-$pkgver"
  ./autogen.sh
  ./configure --enable-qt5 --prefix=/usr
  make
}

package() {
  cd "$srcdir/puNES-$pkgver"
  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
