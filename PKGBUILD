# Maintainer: 
# Based on Aaron Paden <aaronbpaden@gmail.com> PKGBUILD for pcem
pkgname=pcem-git
_pkgname=pcem
pkgver=r1785.78d0618
pkgrel=1
pkgdesc="Emulator for various IBM PC computers and clones - development version"
url="http://pcem-emulator.co.uk/"
arch=('x86_64' 'i686')
license=('GPL2')
depends=('wxgtk2' 'openal' 'sdl2' 'alsa-lib')
makedepends=('git' 'automake')
conflicts=('pcem')
source=("git+https://github.com/sarah-walker-pcem/pcem.git")
sha256sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/pcem"
  aclocal
  ./configure --enable-release-build --enable-networking --prefix=/usr --enable-alsa
  make
}

package() {
  cd "${srcdir}/pcem"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

# vim:set ts=2 sw=2 et:

