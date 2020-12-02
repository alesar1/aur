# Maintainer: Aaron Paden <aaronbpaden@gmail.com>
# Contributor: Natalia Portillo <claunia@clania.com>
pkgname=pcem
pkgver=17
pkgrel=1
pkgdesc="Emulator for various IBM PC computers and clones."
url="http://pcem-emulator.co.uk/"
arch=('x86_64' 'i686')
license=('GPL2')
depends=('wxgtk2' 'openal' 'sdl2' 'alsa-lib')
source=("http://pcem-emulator.co.uk/files/PCemV${pkgver}Linux.tar.gz")

build() {
  cd "${srcdir}"
  autoreconf
  ./configure --enable-alsa --enable-release-build --enable-networking --prefix=/usr
  make
}

package() {
  cd "${srcdir}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

# vim:set ts=2 sw=2 et:
sha256sums=('5b24cb5ce886ed53232385f46594146ba3f7d7eecda90f82892b2dce1cb2f1a4')
