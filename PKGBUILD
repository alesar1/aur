# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=CAGEr
_pkgver=2.4.0
pkgname=r-${_pkgname,,}
pkgver=2.4.0
pkgrel=1
pkgdesc='Analysis of CAGE (Cap Analysis of Gene Expression) sequencing data for precise mapping of transcription start sites and promoterome mining'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-biocparallel
  r-bsgenome
  r-data.table
  r-delayedarray
  r-delayedmatrixstats
  r-formula.tools
  r-genomeinfodb
  r-genomicalignments
  r-genomicranges
  r-ggplot2
  r-gtools
  r-iranges
  r-memoise
  r-multiassayexperiment
  r-plyr
  r-reshape2
  r-rsamtools
  r-rtracklayer
  r-s4vectors
  r-som
  r-stringdist
  r-stringi
  r-summarizedexperiment
  r-vegan
  r-vgam
)
optdepends=(
  r-biocstyle
  r-bsgenome.drerio.ucsc.danrer7
  r-deseq2
  r-fantom3and4cage
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e026e29d8f86bf2ba934bb6bf22b290ea833365dd499ebc996d65e31a2928ad1')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
