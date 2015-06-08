# Maintainer Oliver Goethel <deezy>
# Contributor: Michele Mocciola <mickele>
# Contributor: Brice Méalier <mealier_brice@yahoo.fr>
# Contributor: Philippe Miron <tuxication@gmail.com>
# Modified by: César Vecchio <cesar UNDERSTRIKE vecchio AT yahoo DOT com>
# Modified by: Martin Ortbauer <mortbauer@gmail.com>
     
pkgname=med
pkgver=3.0.8
pkgrel=2
pkgdesc="MED stands for Modelisation et Echanges de Donnees, i.e. Data Modelization and Exchanges - MED is code-aster exchange module linked to hdf5"
url="http://www.code-aster.org/outils/med/"
license=('LGPL')
depends=('hdf5')
makedepends=('gcc-fortran' 'coreutils')
optdepends=('tk' 'python2')
provides=()
conflicts=('med_fichier')
replaces=('med_fichier')
backup=()
arch=('i686' 'x86_64')
source=("http://files.salome-platform.org/Salome/other/${pkgname}-${pkgver}.tar.gz")
md5sums=('8adb41767474d262abca1ce031d08f47')
 
build() {
  if [ "$CARCH" = "x86_64" ]; then
    export FFLAGS="-fopenmp -fPIC -fdefault-double-8 -fdefault-integer-8 -fdefault-real-8 -ffixed-line-length-0 ${CFLAGS}"
    export FCFLAGS="-fopenmp -fPIC -fdefault-double-8 -fdefault-integer-8 -fdefault-real-8 -ffixed-line-length-0 ${CFLAGS}"
    export CPPFLAGS="-DHAVE_F77INT64 ${CPPFLAGS}"
    export F77=gfortran
    export FC=gfortran
  else # i686
    export FFLAGS="-fopenmp -fPIC -ffixed-line-length-0 ${CFLAGS}"
    export FCFLAGS="-fopenmp -fPIC -ffixed-line-length-0 ${CFLAGS}"
    export F77=gfortran
    export FC=gfortran
  fi
  
  export PYTHON="python2"

  cd ${srcdir}/${pkgname}-${pkgver} || return 1
 
  ./configure --with-f90=gfortran --prefix=/usr --datadir=/usr/share/med || return 1
  make || return 1
}
 
package() {
  cd ${srcdir}/${pkgname}-${pkgver} || return 1
 
  make DESTDIR=${pkgdir} install || return 1
  # now move the testprograms to share, we don't want all the stuff in the bindir
  cp -dpr --no-preserve=ownership ${pkgdir}/usr/bin/testc ${pkgdir}/usr/share/med/testc
  cp -dpr --no-preserve=ownership ${pkgdir}/usr/bin/testf ${pkgdir}/usr/share/med/
  cp -dpr --no-preserve=ownership ${pkgdir}/usr/bin/unittests ${pkgdir}/usr/share/med/
  cp -dpr --no-preserve=ownership ${pkgdir}/usr/bin/usescases ${pkgdir}/usr/share/med/
  rm -r ${pkgdir}/usr/bin/{usescases,unittests,testf,testc}
}

