# system requirements: C++11
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=sctransform
_pkgver=0.3.5
pkgname=r-${_pkgname,,}
pkgver=0.3.5
pkgrel=1
pkgdesc='Variance Stabilizing Transformations for Single Cell UMI Data'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-future
  r-future.apply
  r-ggplot2
  r-gridextra
  r-matrixstats
  r-rcpp
  r-rcpparmadillo
  r-reshape2
  r-dplyr
  gcc
)
optdepends=(
  r-glmgampoi
  r-irlba
  r-knitr
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('c08e56df05d64ed04ee53eb9e1d4d321da8aff945e36d56db1d5ceb1cd7e6e0b')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
