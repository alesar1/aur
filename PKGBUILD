# Maintainer: HanFox <han@hanfox.co.uk>
# Based on the 'community/openttd' PKGBUILD by Vesa Kaihlavirta <vegai@iki.fi>, Alexander F. Rødseth <xyproto@archlinux.org>, and Laurent Carlier <lordheavym@gmail.com>

pkgname=openttd-jgrpp
pkgver=0.47.3
pkgrel=1
pkgdesc="Engine for running Transport Tycoon Deluxe with JGR's patch pack"
arch=(x86_64)
url='http://www.tt-forums.net/viewtopic.php?f=33&t=73469'
license=(GPL)
makedepends=(cmake)
depends=(fluidsynth fontconfig freetype2 hicolor-icon-theme lzo)
source=("https://github.com/JGRennison/OpenTTD-patches/archive/jgrpp-$pkgver.tar.gz")
sha256sums=('020619f6c713e4da2390a055b3ab5cee8ae868a4de1edf8024bb127a18cb3edc')

_dirname=OpenTTD-patches-jgrpp

build() {
  cmake \
    -B build \
    -D CMAKE_BUILD_TYPE=Release \
    -D BINARY_NAME="$pkgname" \
    -D CMAKE_INSTALL_BINDIR="bin" \
    -D CMAKE_INSTALL_DATADIR="/usr/share" \
    -D CMAKE_INSTALL_PREFIX="/usr" \
    -D PERSONAL_DIR=".$pkgname" \
    -S $_dirname-$pkgver

  make -C build
}

package() {
  make -C build install DESTDIR="$pkgdir"

  sed -i "s/^Name=OpenTTD$/Name=OpenTTD (JGR Patch Pack)/g" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
