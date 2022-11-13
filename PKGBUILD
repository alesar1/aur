# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Prostar
_pkgver=1.30.1
pkgname=r-${_pkgname,,}
pkgver=1.30.1
pkgrel=1
pkgdesc='Provides a GUI for DAPAR'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-dapar
  r-dapardata
  r-data.table
  r-future
  r-ggplot2
  r-gplots
  r-highcharter
  r-htmlwidgets
  r-later
  r-promises
  r-rhandsontable
  r-shiny
  r-shinyace
  r-shinybs
  r-shinycssloaders
  r-shinyjqui
  r-shinyjs
  r-shinythemes
  r-tibble
  r-vioplot
  r-webshot
)
optdepends=(
  r-biocmanager
  r-biocstyle
  r-colourpicker
  r-dt
  r-gtools
  r-knitr
  r-r.utils
  r-rcolorbrewer
  r-sass
  r-shinytree
  r-shinywidgets
  r-testthat
  r-xml
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('712c43c98a303866c6da8942fa2b5543e45f71294bfab54943a3c821785cfe5f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
