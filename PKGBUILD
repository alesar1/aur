# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=PhenStat
_pkgver=2.34.0
pkgname=r-${_pkgname,,}
pkgver=2.34.0
pkgrel=1
pkgdesc='Statistical analysis of phenotypic data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('custom')
depends=(
  r
  r-car
  r-corrplot
  r-ggplot2
  r-graph
  r-knitr
  r-lme4
  r-logistf
  r-msgps
  r-nortest
  r-pingr
  r-reshape
  r-smoothwin
)
optdepends=(
  r-biocgenerics
  r-runit
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a92358a1be31885b3df95e23f84b21cf83e0931ba3d406705d2b0d15688852be')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
