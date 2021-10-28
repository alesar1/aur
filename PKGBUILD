# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=mmg
pkgver=5.5.2
pkgrel=3
pkgdesc='Anisotropic tetrahedral remesher and moving mesh generator'
url="http://www.mmgtools.org/"
license=('GPL')
arch=('i686' 'x86_64')
depends=('scotch' 'vtk')
makedepends=('cmake' 'netcdf' 'proj' 'qt5-base' 'glew' 'python' 'libogg' 'libtheora')
provides=('mmg3d')
conflicts=('mmg3d')
replaces=('mmg3d')
source=("$pkgname-$pkgver.tar.gz::https://github.com/MmgTools/mmg/archive/v$pkgver.tar.gz"
	cmake.patch)
sha256sums=('58e3b866101e6f0686758e16bcf9fb5fb06c85184533fc5054ef1c8adfd4be73'
            '9716e5a64f577fdb08c25bc5d1eb73ff7bf32607e04719d78b247e4136bbcf15')

prepare () {
  cd "$pkgname-$pkgver"
  patch -Np1 < "$srcdir"/cmake.patch
}

build () {
  cd $pkgname-$pkgver

  cmake \
    -DCMAKE_INSTALL_PREFIX="$pkgdir"/usr \
    -DBUILD_SHARED_LIBS=ON \
    -DUSE_ELAS=OFF

  make
}

package() {
  cd $pkgname-$pkgver
  make install
}
