# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mmg
pkgver=5.5.1
pkgrel=1
pkgdesc='Anisotropic tetrahedral remesher and moving mesh generator'
url="http://www.mmgtools.org/"
license=('GPL')
arch=('i686' 'x86_64')
depends=('scotch')
makedepends=('cmake')
provides=('mmg3d')
conflicts=('mmg3d')
replaces=('mmg3d')
source=("$pkgname-$pkgver.tar.gz::https://github.com/MmgTools/mmg/archive/v$pkgver.tar.gz")
sha256sums=('eeaad8669e894d0a048704a44de0e6bf54fe402431809b560bd2f634bd180cff')

build () {
  cd $pkgname-$pkgver

  cmake \
    -DCMAKE_INSTALL_PREFIX="$pkgdir"/usr \
    -DLIBMMG2D_SHARED=ON \
    -DLIBMMG3D_SHARED=ON \
    -DLIBMMGS_SHARED=ON \
    -DLIBMMG_SHARED=ON

  make
}

package() {
  cd $pkgname-$pkgver

  make install
}
