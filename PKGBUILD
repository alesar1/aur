# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=GENESIS
_pkgver=2.26.0
pkgname=r-${_pkgname,,}
pkgver=2.26.0
pkgrel=1
pkgdesc='GENetic EStimation and Inference in Structured samples (GENESIS): Statistical methods for analyzing genetic data from samples with population structure and/or relatedness'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-biocparallel
  r-data.table
  r-gdsfmt
  r-genomicranges
  r-gwastools
  r-igraph
  r-iranges
  r-reshape2
  r-s4vectors
  r-seqarray
  r-seqvartools
  r-snprelate
)
optdepends=(
  r-biocstyle
  r-compoissonreg
  r-compquadform
  r-dplyr
  r-ggally
  r-ggplot2
  r-gwasdata
  r-knitr
  r-poibin
  r-rcolorbrewer
  r-rmarkdown
  r-spatest
  r-survey
  r-testthat
  r-txdb.hsapiens.ucsc.hg19.knowngene
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('2c517d2e008cd2d4fbb5b19c7ed0e58b33b5fb3a8fa7aec108dd6f9aa4e9c3e2')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
