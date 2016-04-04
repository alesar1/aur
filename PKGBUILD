# Maintainer: Colin Duquesnoy <colin.duquesnoy@gmail.com>
pkgname=mellowplayer
pkgver=2.0.0
pkgrel=1
pkgdesc="Open source and cross-platform desktop application that runs web-based music streaming 
         services in its own window and provides integration with your desktop."
url='https://github.com/ColinDuquesnoy/MellowPlayer'
license=('GPL')
arch=('i686' 'x86_64')
depends=('qt5-base' 'qt5-webengine' 'snorenotify')
makedepends=('qt5-tools')
optdepends=('chromium-pepper-flash-standalone: needed for Deezer and Spotify')
source=("https://github.com/ColinDuquesnoy/MellowPlayer/archive/${pkgver}.tar.gz")
md5sums=('9ec3bd07a9dbf188c139ddedd97717f7')
install="mellowplayer.install"

build() {
  cd $srcdir/MellowPlayer-${pkgver}

  qmake-qt5
  make 
}

package() {
  cd $srcdir/MellowPlayer-${pkgver}

  make INSTALL_ROOT=${pkgdir} install
}
