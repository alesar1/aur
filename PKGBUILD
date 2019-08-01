# Maintainer: Boris Timofeev <mashin87@gmail.com>
pkgname=punes
pkgver=0.105
pkgrel=1
epoch=
pkgdesc="Nintendo Entertaiment System emulator"
arch=('i686' 'x86_64')
url="https://github.com/punesemu/puNES"
license=('GPL2')
groups=()
depends=('qt5-svg' 'alsa-lib' 'hicolor-icon-theme' 'desktop-file-utils' 'nvidia-cg-toolkit')
makedepends=()
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
md5sums=('5c75d2071ac69a2f67d6c735b982e632')
noextract=()


build() {
  cd "$srcdir/puNES-$pkgver"
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/puNES-$pkgver"
  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
