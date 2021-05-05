# Mantainer: Franco Tortoriello

pkgname=dosbox-x-sdl2-git
pkgver=0.83.13.r21.gc69a361ff
pkgrel=1
epoch=1
pkgdesc="x86 emulator with builtin DOS, with patches with more features - sdl2 git version"
arch=(i686 x86_64)
url="http://dosbox.sourceforge.net"
license=(GPL)
depends=(fluidsynth libxkbfile libxrandr mesa ffmpeg sdl2_net physfs)
makedepends=(git glu)
optdepends=()
conflicts=(dosbox-x-sdl2 dosbox-x-git)
install='dosbox-x.install'
source=(dosbox-x::git://github.com/joncampbell123/dosbox-x.git)
sha256sums=('SKIP')

pkgver() {
  cd "$SRCDEST/dosbox-x"
  git describe --long --tags | sed 's/^dosbox-//;s/\([^-]*-g\)/r\1/;s/-/./g' | cut -c4-48
}

build() {
  cd "$srcdir/dosbox-x"
  export LDFLAGS="${LDFLAGS//,--as-needed}"
  ./autogen.sh
  ./configure --enable-core-inline --disable-debug --enable-avcodec --prefix=/usr --enable-sdl2
  make -j$(nproc)  
}

package() {
  cd "$srcdir/dosbox-x"
  make DESTDIR="$pkgdir" install
}

