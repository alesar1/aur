# Mantainer: Franco Tortoriello

pkgname=dosbox-x-git
pkgver=16317.504b33a49
pkgrel=2
pkgdesc="x86 emulator with builtin DOS, with patches with more features"
arch=(i686 x86_64)
url="http://dosbox.sourceforge.net"
license=(GPL)
depends=(fluidsynth libxkbfile libpng libxrandr mesa ffmpeg4.4 physfs)
makedepends=(git glu libpcap libslirp)
optdepends=('openglide-git: Third-party 3dfx Glide API support'
 'libpcap: Allows DosBox-X to connect to a network and to the internet'
 'libslirp: Allows DosBox-X to connect to the internet rootless solution')
optdepends=()
install='dosbox-x.install'
source=(dosbox-x::git://github.com/joncampbell123/dosbox-x.git)

pkgver() {
  cd "$SRCDEST/dosbox-x"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "$srcdir/dosbox-x"
  sed -i -e 's/-j3/-j$(nproc)/g' build
  sed -i 's|"$LIBS -lavcodec -lavformat -lavutil -lswscale "`pkg-config libavcodec --libs`|`pkg-config libavcodec libavformat libavutil libswscale libswresample --libs`"$LIBS"|' configure.ac
  PKG_CONFIG_PATH="/usr/lib/ffmpeg4.4/pkgconfig" ./build
}

package() {
  cd "$srcdir/dosbox-x"
  make DESTDIR="$pkgdir" install
}

md5sums=('SKIP')

