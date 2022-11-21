# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=forecast
_pkgver=8.19
pkgname=r-${_pkgname,,}
pkgver=8.19
pkgrel=1
pkgdesc='Forecasting Functions for Time Series and Linear Models'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-colorspace
  r-fracdiff
  r-ggplot2
  r-generics
  r-lmtest
  r-magrittr
  r-rcpp
  r-rcpparmadillo
  r-timedate
  r-tseries
  r-urca
  r-zoo
)
optdepends=(
  r-forectheta
  r-knitr
  r-methods
  r-rmarkdown
  r-rticles
  r-seasonal
  r-testthat
  r-uroot
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('305e16dfb14892f9a99732836359b6b5c4e2100fa83f045d0ac369f81a6d75d0')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
