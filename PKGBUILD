# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=ps
_cranver=1.3.3
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="List, Query, Manipulate System Processes"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(BSD3)
depends=('r>=3.1')
makepedends=(gcc)
optdepends=(r-callr r-covr r-curl r-pingr r-processx r-r6 r-rlang r-testthat r-tibble)
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('388c366029b0e0292f9ee5c691ba8f26')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
