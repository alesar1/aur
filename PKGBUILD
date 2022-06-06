# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=sjmisc
_pkgver=2.8.9
pkgname=r-${_pkgname,,}
pkgver=2.8.9
pkgrel=4
pkgdesc='Data and Variable Transformation Functions'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-dplyr
  r-insight
  r-magrittr
  r-purrr
  r-rlang
  r-sjlabelled
  r-tidyselect
)
optdepends=(
  r-ggplot2
  r-graphics
  r-haven
  r-knitr
  r-mice
  r-nnet
  r-rmarkdown
  r-sjplot
  r-sjstats
  r-stringdist
  r-testthat
  r-tidyr
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('78b05741ce9e1cc783fda97a0f18caff689822fdd4bdf733dc20f7c94ac2f3bf')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
