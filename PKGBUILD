# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mmg3d
pkgver=5.4.3
pkgrel=1
pkgdesc='Anisotropic tetrahedral remesher and moving mesh generator'
url="http://www.mmgtools.org/"
license=('GPL')
arch=('i686' 'x86_64')
makedepends=('cmake')
source=("https://github.com/MmgTools/mmg/archive/v$pkgver.tar.gz")
sha256sums=('73fb63616d87094a1fbd0a721ded7e062c7768844e450df4fa34e50dd9924c41')

build () {
  cd "mmg-$pkgver"

  cmake \
    -DCMAKE_INSTALL_PREFIX="$pkgdir"/usr \
    -DLIBMMG2D_SHARED=ON \
    -DLIBMMG3D_SHARED=ON \
    -DLIBMMGS_SHARED=ON \
    -DLIBMMG_SHARED=ON

  make
}

package() {
  cd "mmg-$pkgver"

  make install
}
