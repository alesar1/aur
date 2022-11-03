# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DEFormats
_pkgver=1.26.0
pkgname=r-${_pkgname,,}
pkgver=1.26.0
pkgrel=1
pkgdesc='Differential gene expression data formats converter'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-checkmate
  r-data.table
  r-deseq2
  r-edger
  r-genomicranges
  r-s4vectors
  r-summarizedexperiment
)
optdepends=(
  r-biocstyle
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('4cc9d3368a86c41c0bef76e3541acbbfb98c37962ccf65ea47742a0326e392d5')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
