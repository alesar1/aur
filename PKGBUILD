# Maintainer: rafaelff <rafaelff@gnome.org>, WeirdBeard <obarrtimothy@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Themaister <maister@archlinux.us>

pkgname=pcsx2-git
pkgver=1.7.2514
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

install=dev9.install

options=(!lto)

depends=(
  libaio
  libjpeg-turbo
  libpcap
  libgl # For Steam Deck
  xorg-xrandr # For Steam Deck
  libxrender # For Steam Deck
  linux-api-headers # For Steam Deck
  libpulse
  portaudio
  libsamplerate
  sdl2
  soundtouch
  wxgtk3
  wayland
  rapidyaml-git
)
makedepends=(
  cmake
  git
  xorgproto
  ninja
  swig
  python
  vulkan-headers
)
provides=(pcsx2)
conflicts=(pcsx2)
source=(git+https://github.com/PCSX2/pcsx2.git
git+https://github.com/fmtlib/fmt.git
git+https://github.com/ocornut/imgui.git
git+https://github.com/rtissera/libchdr.git
git+https://github.com/google/googletest.git
git+https://github.com/mozilla/cubeb.git
git+https://github.com/KhronosGroup/glslang.git
git+https://github.com/libsdl-org/SDL.git
)
sha256sums=(SKIP)

options=(debug !strip)

pkgver()
{
  cd pcsx2
  git describe --tags | sed 's/^v//; s/-dev//; s/-/.r/; s/-g/./'
}

prepare()
{
  cd $srcdir/pcsx2/3rdparty
  git submodule init
  git config submodule.https://github.com/fmtlib/src/fmt.git.url fmt
  git config submodule.https://github.com/rtissera/libchdr.git.url libchdr
  git config submodule.https://github.com/google/googletest.git.url gtest
  git config submodule.https://github.com/mozilla/cubeb.git.url cubeb
  git config submodule.https://github.com/ocornut/imgui.git.url imgui
  git config submodule.https://github.com/KhronosGroup/glslang.git glslang
  git config submodule.https://github.com/libsdl-org/SDL.git SDL
  git submodule update
}

build()
{
  mkdir -p build
  cd build

  cmake ../pcsx2 \
    -DCMAKE_BUILD_TYPE=Debug \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DUSE_SYSTEM_YAML=TRUE \
    -DCMAKE_INTERPROCEDURAL_OPTIMIZATION=ON \
    -DWAYLAND_API=ON \
    -USE_VULKAN=ON \
    -GNinja \
    -DPACKAGE_MODE=ON \
    -DXDG_STD=TRUE \
    -DDISABLE_SETCAP=ON
  ninja -j$(nproc)
}

package()
{
    DESTDIR="${pkgdir}" cmake --install build
}

# vim: ts=2 sw=2 et:
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')
