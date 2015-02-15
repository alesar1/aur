# Maintainer:  Thomas Weißschuh <thomas t-8ch de>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Anton Bazhenov <anton.bazhenov at gmail>
# Contributor: shamrok <szamrok@gmail.com>

pkgname=kraft
pkgver=0.57
pkgrel=1
pkgdesc="A program suitable for all trades or crafts"
arch=('i686' 'x86_64')
url="http://www.volle-kraft-voraus.de/"
license=('GPL')
depends=('kdepimlibs' 'ctemplate' 'python2-reportlab' 'python2-pypdf')
makedepends=('cmake' 'automoc4' 'boost')
source=("http://downloads.sourceforge.net/project/${pkgname}/${pkgname}-${pkgver}.tar.xz")

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  sed -i 's/raise ValueError, "Not enough space"/raise ValueError("Not enough space")/' tools/erml2pdf.py

  rm -rf build
  mkdir -p build
  cd build
  cmake ".." \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"
  make "DESTDIR=${pkgdir}" install
}

sha256sums=('4e8ad3b0db57dd03b10db3d4df4a89a3bcdd95beecc23adec352b517fffff63c')
