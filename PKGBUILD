# Maintainer: Luke Huckman (Darkpelz) <lukeh@outlook.my>
# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Maintainer: fossdd <fossdd@tutanota.com>
# Contributor: Ong Yong Xin <ongyongxin2020+github AT gmail DOT com>
# Contributor: Bernhard Landauer <oberon@manjaro.org>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=tenacity-git
pkgver=3.0.2.r595.g04609bba0
pkgrel=1
pkgdesc="An easy-to-use multi-track audio editor and recorder, forked from Audacity"
arch=(i686 x86_64)
url="https://github.com/tenacityteam/tenacity"
license=(GPL2 CCPL)
groups=(pro-audio)
depends=(gtk2 gtk3 qt5-base libid3tag lilv lv2 portsmf suil libmad twolame vamp-plugin-sdk libsoxr soundtouch)
makedepends=(git cmake clang sdl2 libsoup libnotify gstreamer gst-plugins-bad-libs
             ffmpeg jack nasm conan scdoc)
# can't find system lame portmidi
optdepends=('ffmpeg: additional import/export capabilities')
provides=(audacity)
conflicts=(audacity)
source=("git+https://git.sr.ht/~tenacity/tenacity"
        "tenacity.patch")
sha256sums=('SKIP' 'c06c60a9ae17b9265840fcd619d2c7a5668f26a94cec80c8785c7997afd4bc96')

pkgver() {
  cd tenacity
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -d'.' -f2-
}

prepare() {
  cd tenacity/images/icons
  for i in *; do # fix for png icons not following hicolor category folders
	cd $i
    mkdir -p apps
    test -f tenacity.png && mv tenacity.png apps
    cd ..
  done
  cd ../..
  patch --forward --strip=1 --input="${srcdir}/tenacity.patch"
  mkdir -p build
}

build() {
  cd tenacity/build
  CC=clang CXX=clang++ cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DwxBUILD_TOOLKIT:STRING=gtk3 \
    -Daudacity_use_wxwidgets=local \
    audacity_use_ffmpeg:STRING=loaded \
    ..
  cmake --build .
  make .
}

package() {
  cd tenacity/build
  make DESTDIR="${pkgdir}" install
}
