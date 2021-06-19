# Maintainer: Mikael Eriksson <mikael_eriksson@miffe.org>
# Contributor: Pol Marcet Sardà <polmarcetsarda@gmail.com>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Christoph Zeiler <archNOSPAM_at_moonblade.dot.org>
# Contributor: Curtis Smith <kman922002@gmail.com>

pkgname=odamex
pkgver=0.9.3
pkgrel=1
pkgdesc='A free client/server multiplayer engine for the classic FPS Doom.'
arch=('i686' 'x86_64' 'aarch64')
url='http://odamex.net/'
license=('GPL')
depends=('sdl2_mixer' 'portmidi' 'wxgtk2' 'miniupnpc')
makedepends=('cmake')
optdepends=('timidity++: Required for music')
source=("http://downloads.sourceforge.net/odamex/odamex-src-${pkgver}.tar.bz2")
sha256sums=('17acecffca2b60b6c9fa6bf1a4b7cd8a1965e8b153f5d865cf9c58b3644cbc6e')

prepare() {
  cd $pkgname-src-$pkgver
}

build() {
  cd $pkgname-src-${pkgver}
  cmake -DCMAKE_BUILD_TYPE=Release                              \
        -DCMAKE_INSTALL_PREFIX=/usr                             \
        .
  make
}

package() {
  cd $pkgname-src-${pkgver}
  make DESTDIR=$pkgdir install
}

# vim:set ts=2 sw=2 et:
