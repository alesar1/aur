pkgname=('med' 'med-docs')
pkgver=4.0.0
pkgrel=3
pkgdesc="MED stands for Modelisation et Echanges de Donnees, i.e. Data Modelization and Exchanges - MED is code-aster exchange module linked to hdf5"
url="https://www.salome-platform.org/downloads"
license=('LGPL')
depends=('hdf5' 'tk')
makedepends=('gcc-fortran' 'python' 'swig' 'openmpi' 'cmake')
optdepends=()
arch=('x86_64')
source=("http://files.salome-platform.org/Salome/other/${pkgname}-${pkgver}.tar.gz")
sha256sums=('a474e90b5882ce69c5e9f66f6359c53b8b73eb448c5f631fa96e8cd2c14df004')

build() {
  cd ${pkgname}-${pkgver}
  cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr .
  make
}

package_med() {
  cd ${pkgbase}-${pkgver}
  make DESTDIR=${pkgdir} install

  rm -rf $pkgdir/usr/share/doc
}

package_med-docs() {
  arch=('any')
  depends=()

  cd ${pkgbase}-${pkgver}
  make DESTDIR=${pkgdir} install

  rm -rf $pkgdir/usr/share/cmake
  rm -rf $pkgdir/usr/lib
  rm -rf $pkgdir/usr/include
  rm -rf $pkgdir/usr/bin
}
