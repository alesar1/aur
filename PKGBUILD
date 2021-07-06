# Maintainer: Ckat <ckat@teknik.io>

pkgname=sneedacity-git
pkgver=3.0.2.r344.gd5a54f152
pkgrel=1
pkgdesc="Audacity fork without any telemetry (git-version)"
arch=(i686 x86_64)
url="https://github.com/Sneeds-Feed-and-Seed/sneedacity"
license=(GPL2 CCPL)
groups=(pro-audio)
depends=(alsa-lib libx11 gtk3 expat libid3tag libogg libsndfile
         libvorbis lilv lv2 portsmf suil libmad twolame vamp-plugin-sdk libsoxr soundtouch)
makedepends=(git cmake clang sdl2 libsoup libnotify gstreamer gst-plugins-bad-libs
             ffmpeg jack nasm conan)
# can't find system lame portmidi
optdepends=('ffmpeg: additional import/export capabilities')
provides=(audacity sneedacity)
conflicts=(audacity sneedacity)
source=(
  "git+https://github.com/Sneeds-Feed-and-Seed/sneedacity.git"
  "sneedacity.patch"
)
sha256sums=('SKIP' 'c06c60a9ae17b9265840fcd619d2c7a5668f26a94cec80c8785c7997afd4bc96')

pkgver() {
  cd sneedacity
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -d'.' -f2-
}

prepare() {
  cd sneedacity
  patch --forward --strip=1 --input="${srcdir}/sneedacity.patch"
}

build() {
  mkdir sneedacity/build
  cd sneedacity/build
  CC=clang cmake \
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
  cd sneedacity/build
  make DESTDIR="${pkgdir}" install
}
