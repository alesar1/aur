# Maintainer: Frederic Bezies <fredbezies at gmail dot com>

pkgname=dosbox-x-sdl2
pkgver=0.84.1
pkgrel=1
pkgdesc="x86 emulator with builtin DOS, with patches and more features"
arch=(i686 x86_64 aarch64)
url="http://dosbox-x.com"
license=(GPL)
depends=(fluidsynth libxkbfile libxrandr ffmpeg4.4 sdl2_net libslirp)
makedepends=(glu)
optdepends=()
conflicts=('dosbox-x-git' 'dosbox-x' 'dosbox-x-sdl2-git')
source=(https://github.com/joncampbell123/dosbox-x/archive/dosbox-x-v${pkgver}.tar.gz)
sha256sums=('d5ba5b3d87b0dc69d70f6c9701eec36772bbc3716e0b201b74ec73d4b3ff38cc')

build() {
  cd "$srcdir/dosbox-x-dosbox-x-v$pkgver"
  # Workaround ffmpeg5, thanks to Grapelli on the bug opened on dosbox-x github page
  sed -i 's|"$LIBS -lavcodec -lavformat -lavutil -lswscale "`pkg-config libavcodec --libs`|`pkg-config libavcodec libavformat libavutil libswscale libswresample --libs`"$LIBS"|' configure.ac
  ./autogen.sh
  export LDFLAGS="${LDFLAGS//,--as-needed}"
  chmod +x configure
  PKG_CONFIG_PATH="/usr/lib/ffmpeg4.4/pkgconfig" ./configure --enable-core-inline --disable-debug --enable-avcodec --prefix=/usr --enable-sdl2
  make -j$(nproc)
}

package() {
  cd "$srcdir/dosbox-x-dosbox-x-v$pkgver"
  make DESTDIR="$pkgdir" install
}
