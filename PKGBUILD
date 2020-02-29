# Maintainer: George Tokmaji <tokmajigeorge@gmail.com>
# Contributor: Benedict Etzel <developer@beheh.de>
# Contributor: Jonathan Steel <mail at jsteel dot org>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Wesley <rudirennsau at hotmail dot com>
# Contributor: Lukas Werling <lukas.werling@gmail.com>

pkgname=openclonk-git
pkgrel=1
pkgver=r11397.c13bc33d7
pkgdesc='Multiplayer-action-tactic-skill game'
arch=('i686' 'x86_64')
url='http://openclonk.org'
license=('custom')
depends=('glew' 'freealut' 'miniupnpc' 'libxrandr' 'sdl2' 'sdl_mixer>=1.2' 'desktop-file-utils' 'qt5-base' 'hicolor-icon-theme')
install=openclonk.install
makedepends=('cmake' 'boost' 'mesa' 'git')
provides=('openclonk')
conflicts=('clonk_rage' 'openclonk' 'openclonk-music')
source=("$pkgname::git+https://github.com/openclonk/openclonk#branch=master")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${pkgname}
  patch -p1 -i "$srcdir"/../directories.patch
}

build() {
  cd ${pkgname}

  [[ -d build ]] && rm -rf build
  mkdir build && cd build
  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DFREETYPE_INCLUDE_DIRS=/usr/include/freetype2

  make
}

package() {
  cd ${pkgname}/build
  make DESTDIR="$pkgdir" install
  cd ..
  
  # replace the music packet with unpacked music to allow adding music
  rm -rf "$pkgdir/usr/share/openclonk/Music.ocg"
  install -Dm644 planet/Music.ocg/* -t "$pkgdir/usr/share/openclonk/Music.ocg"

  # licenses
  install -dm755 "$pkgdir"/usr/share/licenses/$pkgname
  install -m644 licenses/*.txt "$pkgdir"/usr/share/licenses/$pkgname
}

