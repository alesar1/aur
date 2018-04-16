# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=pencil2d
pkgver=0.6.1.1
pkgrel=1
pkgdesc="An easy, intuitive tool to make 2D hand-drawn animations"
arch=('x86_64' 'i686')
url="https://pencil2d.org/"
license=('GPL2')
depends=('qt5-multimedia' 'qt5-svg' 'qt5-xmlpatterns' 'hicolor-icon-theme' 'ffmpeg')
source=("https://github.com/pencil2d/pencil/archive/v${pkgver}.tar.gz")
md5sums=('2decae6de690ad4a23b43d28228ae957')

build() {
  cd "${srcdir}/pencil-${pkgver}"

  qmake-qt5 PREFIX=/usr CONFIG+=release DEFINES+=QT_NO_DEBUG_OUTPUT DEFINES+=PENCIL2D_RELEASE
  make
}

package() {
  cd "${srcdir}/pencil-${pkgver}"

  make install INSTALL_ROOT="${pkgdir}"
}
