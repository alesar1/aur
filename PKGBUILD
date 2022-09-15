# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=piano
_pkgver=2.12.1
pkgname=r-${_pkgname,,}
pkgver=2.12.1
pkgrel=1
pkgdesc='Platform for integrative analysis of omics data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-dt
  r-fgsea
  r-gplots
  r-htmlwidgets
  r-igraph
  r-marray
  r-relations
  r-scales
  r-shiny
  r-shinydashboard
  r-shinyjs
  r-visnetwork
)
optdepends=(
  r-affy
  r-affyplm
  r-annotationdbi
  r-biocstyle
  r-biomart
  r-gtools
  r-knitr
  r-limma
  r-plier
  r-plotrix
  r-rmarkdown
  r-rsbml
  r-snowfall
  r-yeast2.db
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('501c942bf3453f4ff575c77358c49d1ca802bdf208808d16eab31653dabcc757')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
