# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=rootSolve
_cranver=1.8.2.1
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Nonlinear Root Finding, Equilibrium and Steady-State Analysis of Ordinary Differential Equations"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL2)
depends=('r>=2.01')
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('088d291339a4d8d9396cdb956889ac571fd9e834c6e3c3d51621a8c3f0eb9f32')

build() {
  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
