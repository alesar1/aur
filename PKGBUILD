# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Maintainer: Ong Yong Xin <ongyongxin2020+github AT gmail DOT com>
# Contributor: Bernhard Landauer <oberon@manjaro.org>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=audacity-git
pkgver=3.0.4.r239.g6d3dd0c62
pkgrel=1
pkgdesc="A program that lets you manipulate digital audio waveforms"
arch=(i686 x86_64)
url="https://www.audacityteam.org/"
license=(GPL2 CCPL)
groups=(pro-audio)
depends=(alsa-lib libx11 gtk3 expat libid3tag libogg libsndfile
         libvorbis lilv lv2 portsmf suil libmad twolame vamp-plugin-sdk libsoxr soundtouch)
makedepends=(git cmake gcc sdl2 libsoup libnotify gstreamer gst-plugins-bad-libs
             ffmpeg jack nasm conan)
# can't find system lame portmidi
optdepends=('ffmpeg: additional import/export capabilities')
provides=(audacity)
conflicts=(audacity)
source=(
  "git+https://github.com/audacity/audacity.git"
)
sha256sums=('SKIP')

pkgver() {
  cd audacity
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -d'.' -f2-
}

build() {
  mkdir audacity/build
  cd audacity/build
  CC=gcc cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    audacity_use_ffmpeg:STRING=loaded \
    ..
  make .
}

package() {
  cd audacity/build
  make DESTDIR="${pkgdir}" install
}
