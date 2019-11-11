# $Id$
# Maintainer: Graziano Giuliani <graziano.giuliani@gmail.com>
# Contributor: Graziano Giuliani <graziano.giuliani@gmail.com>

_dwnnum=492
pkgname=yaxt
pkgver=0.6.2
pkgrel=1
pkgdesc="Yet Another eXchange Tool"
arch=("i686" "x86_64")
url="https://www.dkrz.de/redmine/projects/yaxt"
depends=('openmpi')
options=('!libtool' '!makeflags')
license=('custom')
source=(https://www.dkrz.de/redmine/attachments/download/${_dwnnum}/${pkgname}-${pkgver}.tar.gz LICENSE)
md5sums=('de247e2389e5cc1a014b00d5baf3b77d'
         '035e9ac10ea37067d3f7b178abafa029')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  # Fix for building on laptop...
  sed -i configure -e 's/MPI_LAUNCH -n 4/MPI_LAUNCH -n 2/' \
                   -e 's/EXEEXT 4/EXEEXT 2/'
  ./configure --prefix=/usr CC=mpicc FC=mpif90 FCFLAGS="$FCFLAGS -cpp"
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install
  install -Dm644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
