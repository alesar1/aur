# Maintainer: rafaelff <rafaelff@gnome.org>, WeirdBeard <obarrtimothy@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Themaister <maister@archlinux.us>

pkgname=pcsx2-git
pkgver=1.7.0.r989.edf3b43e2
pkgrel=1
pkgdesc='A Sony PlayStation 2 emulator'
arch=(x86_64)
url=https://www.pcsx2.net
license=(
  GPL2
  GPL3
  LGPL2.1
  LGPL3
)

depends=(
  lib32-libaio
  lib32-libjpeg-turbo
  lib32-libpcap
  lib32-libpulse
  lib32-portaudio
  lib32-libsamplerate
  lib32-sdl2
  lib32-soundtouch
  lib32-wxgtk3
)
makedepends=(
  cmake
  git
  xorgproto
  ninja
)
provides=(pcsx2)
conflicts=(pcsx2)
source=(git+https://github.com/PCSX2/pcsx2.git
git+https://github.com/fmtlib/fmt.git
git+https://github.com/jbeder/yaml-cpp.git)
sha256sums=(SKIP)

pkgver() {
  cd pcsx2

  git describe --tags | sed 's/^v//; s/-dev//; s/-/.r/; s/-g/./'
}

build() {
  mkdir -p build

  cd $srcdir/pcsx2/3rdparty
  git submodule init
  git config submodule.https://github.com/fmtlib/src/fmt.git.url $srcdir/fmt
  git config submodule.https://github.com/jbeder/yaml-cpp.git.url $srcdir/yaml-cpp
  git submodule update
  
  cd ../..
  
  cd build

  cmake ../pcsx2 \
    -DCMAKE_TOOLCHAIN_FILE=cmake/linux-compiler-i386-multilib.cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_LIBRARY_PATH=/usr/lib32 \
    -DPLUGIN_DIR=/usr/lib32/pcsx2 \
    -DGAMEINDEX_DIR=/usr/share/pcsx2 \
    -GNinja \
    -DPACKAGE_MODE=ON \
    -DXDG_STD=TRUE
  ninja
}

package() {
    DESTDIR="${pkgdir}" cmake --install build
}

# vim: ts=2 sw=2 et:
sha256sums=('SKIP'
            'SKIP'
            'SKIP')
