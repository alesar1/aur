# Maintainer: Alexander Kobel <a-kobel@a-kobel.de>

pkgname=mpsolve-git
pkgver=3.1.4.r334.ga204ea7
pkgrel=2
pkgdesc="Multiprecision rootfinder for complex roots of univariate polynomials"
url="http://numpi.dm.unipi.it/software/mpsolve"
arch=('i686' 'x86_64')
license=('GPL')
depends=('gmp' 'mpfr')
optdepends=('cython: Python bindings'
            'gtk3: Graphical debugger'
            'octave: Octave bindings'
            'qt4: Graphical interface xmpsolve')
makedepends=('automake' 'autoconf' 'git')
provides=('mpsolve')
conflicts=('mpsolve')
source=("git://github.com/robol/MPSolve.git")
sha256sums=('SKIP')

pkgver () {
  cd MPSolve
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build () {
  cd ${srcdir}/MPSolve
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package () {
  cd ${srcdir}/MPSolve
  make DESTDIR="${pkgdir}" install
  sed -e "s/$(echo "${pkgdir}" | sed -e 's/[\/&]/\\&/g')//g" -i ${pkgdir}/usr/share/octave/octave_packages
}
