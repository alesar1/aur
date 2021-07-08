# Mantainer: Franco Tortoriello

pkgname=dosbox-x-git
pkgver=14577.1570b85d8
pkgrel=1
pkgdesc="x86 emulator with builtin DOS, with patches with more features"
arch=(i686 x86_64)
url="http://dosbox.sourceforge.net"
license=(GPL)
depends=(fluidsynth libxkbfile libpng libxrandr mesa ffmpeg physfs)
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
  ./build
}

package() {
  cd "$srcdir/dosbox-x"
  make DESTDIR="$pkgdir" install
}

md5sums=('SKIP')

