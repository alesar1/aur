# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=colourpicker
_pkgver=1.2.0
pkgname=r-${_pkgname,,}
pkgver=1.2.0
pkgrel=1
pkgdesc='A Colour Picker Tool for Shiny and for Selecting Colours in Plots'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-ggplot2
  r-htmltools
  r-htmlwidgets
  r-jsonlite
  r-miniui
  r-shiny
  r-shinyjs
)
optdepends=(
  r-knitr
  r-rmarkdown
  r-rstudioapi
  r-shinydisconnect
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('bc2c80eee046219038baef9f8f213c9824d7fec7f893f6a1b881dd44b4a8638a')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
