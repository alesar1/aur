# system requirements: Python (>=3), numpy, pandas, h5py, scipy, argparse,sklearn, mofapy2
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MOFA2
_pkgver=1.8.0
pkgname=r-${_pkgname,,}
pkgver=1.8.0
pkgrel=1
pkgdesc='Multi-Omics Factor Analysis v2'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-basilisk
  r-corrplot
  r-cowplot
  r-delayedarray
  r-dplyr
  r-forcats
  r-ggplot2
  r-ggrepel
  r-hdf5array
  r-magrittr
  r-pheatmap
  r-rcolorbrewer
  r-reshape2
  r-reticulate
  r-rhdf5
  r-rtsne
  r-stringi
  r-tidyr
  r-uwot
)
optdepends=(
  r-biocstyle
  r-data.table
  r-foreach
  r-ggally
  r-ggpubr
  r-ggrastr
  r-knitr
  r-matrix
  r-multiassayexperiment
  r-mvtnorm
  r-psych
  r-rmarkdown
  r-seurat
  r-singlecellexperiment
  r-summarizedexperiment
  r-testthat
  r-tidyverse
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('009adf79638deac694ec6f1fa9d1d0146f209d4ada155879b526c419933d11c5')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
