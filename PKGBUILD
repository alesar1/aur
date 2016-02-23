# ---------------------------------------------------------------
# Maintainer: Øyvind 'Mr.Elendig' Heggstad <mrelendig at har-ikkje dot net>
# Original contributor: Travis Fickett <tfickett AT ufl DOT edu>
# Original Maintainer: Anders Lund <anders at alweb dot dk>
# ---------------------------------------------------------------
# Adopted temporarily by Bruno Rodriguez (brunorro) on 2013-06-20 
# - Just changed the pkgver, the source and the md5sums to make
#   it work. If you can make it better, adopt it !
# ---------------------------------------------------------------

pkgname=opencpn
pkgver=4.2.0
pkgrel=1
pkgdesc="Open Source Chart Plotting / Marine Navigation"
arch=('i686' 'x86_64')
license=("GPL2")
depends=('wxgtk' 'gpsd' 'portaudio' 'tinyxml' 'hicolor-icon-theme')
makedepends=('cmake')
url="http://opencpn.org"
install=opencpn.install
source=("https://github.com/OpenCPN/OpenCPN/archive/v4.2.0.tar.gz")
sha1sums=('cde4552bc0f539eebc8c03570dc637b349d00812')

build() {
  cd "OpenCPN-${pkgver}"
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "OpenCPN-${pkgver}"
  make DESTDIR="$pkgdir" install
}
