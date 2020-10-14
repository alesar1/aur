# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mmg
pkgver=5.5.0
pkgrel=2
pkgdesc='Anisotropic tetrahedral remesher and moving mesh generator'
url="http://www.mmgtools.org/"
license=('GPL')
arch=('i686' 'x86_64')
depends=('scotch')
makedepends=('cmake')
provides=('mmg3d')
conflicts=('mmg3d')
replaces=('mmg3d')
source=("$pkgname-$pkgver.tar.gz::https://github.com/MmgTools/mmg/archive/v$pkgver.tar.gz"  https://github.com/MmgTools/mmg/commit/cbd4418093c549fd7205208f44df13fbfe155fbb.patch)
sha256sums=('d9870b6978f0fc3b17410f7e9983768590f377cb3bd0fc9a8f359341ae4e586a'
            '7e5d4f7182fd9e768b8cab23af715e17c08af8634be5e70c32f28a2565547fb5')

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
