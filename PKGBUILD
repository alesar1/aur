# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=remotes
_cranver=2.4.0
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="R Package Installation from Remote Repositories, Including 'GitHub'"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL2 GPL3)
depends=('r>=3.0.0' subversion git)
optdepends=(r-brew r-callr r-curl r-covr r-git2r r-knitr r-mockery r-pkgbuild r-pingr r-rmarkdown r-rprojroot r-testthat r-webfakes r-withr)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('cde5c3e44f67eba5f9bb8ea72e04ed372649178cb036479e1387eac92b8c1411')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
