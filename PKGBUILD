# Maintainer: rafaelff <rafaelff@gnome.org>, WeirdBeard <obarrtimothy@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Themaister <maister@archlinux.us>

pkgname=pcsx2-git
pkgver=1.7.2992
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

OPTIONS+=(debug !strip)

depends=(
  libaio
  libjpeg-turbo
  libpcap
  libzip
  libgl # For Steam Deck
  xorg-xrandr # For Steam Deck
  libxrender # For Steam Deck
  linux-api-headers # For Steam Deck
  libpulse
  portaudio
  libsamplerate
  sdl2
  qt6-base
  qt6-wayland
  qt6-tools
  qt6-svg
  soundtouch
  wayland
  rapidyaml
  zstd
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

provides=(pcsx2-qt)

conflicts=(pcsx2)

source=(
git+https://github.com/PCSX2/pcsx2.git
git+https://github.com/ocornut/imgui.git
git+https://github.com/rtissera/libchdr.git
git+https://github.com/google/googletest.git
git+https://github.com/mozilla/cubeb.git
git+https://github.com/KhronosGroup/glslang.git
git+https://github.com/KhronosGroup/Vulkan-Headers.git
git+https://github.com/fmtlib/fmt.git
)

sha256sums=(
SKIP
SKIP
SKIP
SKIP
SKIP
SKIP
SKIP
SKIP
)

prepare()
{
  cd $srcdir/pcsx2
  git checkout tags/v"${pkgver}"
  git submodule init
  git config submodule.3rdparty/libchdr/libchdr.url $srcdir/libchdr
  git config submodule.3rdparty/gtest.url $srcdir/googletest
  git config submodule.3rdparty/cubeb/cubeb.url $srcdir/cubeb
  git config submodule.3rdparty/imgui/imgui.url $srcdir/imgui
  git config submodule.3rdparty/glslang/glslang.url $srcdir/glslang
  git config submodule.3rdparty/vulkan-headers.url $srcdir/Vulkan-Headers
  git config submodule.3rdparty/fmt/fmt.url $srcdir/fmt
  git submodule update 3rdparty/libchdr/libchdr 3rdparty/gtest 3rdparty/cubeb/cubeb 3rdparty/imgui 3rdparty/glslang/glslang 3rdparty/vulkan-headers 3rdparty/fmt/fmt
}

pkgver()
{
  cd $srcdir/pcsx2
  git describe --tags | sed 's/^v//; s/-dev//; s/-/.r/; s/-g/./'
}

build()
{
  mkdir -p build
  cd build

  cmake ../pcsx2 \
    -DCMAKE_BUILD_TYPE=RelWithDebInfo \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INTERPROCEDURAL_OPTIMIZATION=ON \
    -DWAYLAND_API=ON \
    -DQT_BUILD=ON \
    -DXDG_STD=TRUE \
    -DUSE_VULKAN=ON \
    -GNinja \
    -DPACKAGE_MODE=ON \
    -DDISABLE_SETCAP=ON
  ninja -j$(nproc)
}

package()
{
    DESTDIR="${pkgdir}" cmake --install build
    mv "${pkgdir}"/usr/bin/pcsx2-qt "${pkgdir}"/usr/share/PCSX2
    ln -s /usr/share/PCSX2/pcsx2-qt "${pkgdir}"/usr/bin/pcsx2-qt
    sed -i 's/Exec=env GDK_BACKEND=x11 MESA_NO_ERROR=1 pcsx2/Exec=env QT_QPA_PLATFORM=xcb MESA_NO_ERROR=1 pcsx2-qt/g' "${pkgdir}"/usr/share/applications/PCSX2.desktop
}

# vim: ts=2 sw=2 et:

