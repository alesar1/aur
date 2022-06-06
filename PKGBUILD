# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=VarCon
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc='VarCon: an R package for retrieving neighboring nucleotides of an SNV'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biostrings
  r-bsgenome
  r-genomicranges
  r-ggplot2
  r-iranges
  r-shiny
  r-shinycssloaders
  r-shinyfiles
)
optdepends=(
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1f12f73092c432600bfa0e8e568b6470f5f1bee4ff92a0c5ed73fa0a857e1b50')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
