# Maintainer: sukanka <su975853527@gmail.com>

_pkgname=TOSTER
_pkgver=0.4.2
pkgname=r-${_pkgname,,}
pkgver=0.4.2
pkgrel=3
pkgdesc='Two One-Sided Tests (TOST) Equivalence Testing'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-cowplot
  r-distributional
  r-ggdist
  r-ggplot2
  r-jmvcore
  r-tidyr
)
optdepends=(
  r-afex
  r-broom
  r-car
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('f91ce0aa9070249edd2a57e5a7e95e4ad06ac3629082009982d25ddcdf15ad3c')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
