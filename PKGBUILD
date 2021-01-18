# Maintainer: Boris Timofeev <mashin87@gmail.com>
# Maintainer: Fabio Cavallo (FHorse) <punes.development@gmail.com>
pkgname=punes
pkgver=0.107
pkgrel=1
epoch=
pkgdesc="Nintendo Entertaiment System emulator"
arch=('i686' 'x86_64')
url="https://github.com/punesemu/puNES"
license=('GPL2')
groups=()
depends=('alsa-lib' 'desktop-file-utils' 'ffmpeg' 'hicolor-icon-theme' 'nvidia-cg-toolkit' 'qt5-base' 'qt5-svg')
makedepends=('glu' 'qt5-tools')
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
md5sums=('ffff6f29af7a6d8c08a272ad29ed37e5')
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
