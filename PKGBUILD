# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=derfinderPlot
_pkgver=1.32.0
pkgname=r-${_pkgname,,}
pkgver=1.32.0
pkgrel=1
pkgdesc='Plotting functions for derfinder'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-derfinder
  r-genomeinfodb
  r-genomicfeatures
  r-genomicranges
  r-ggbio
  r-ggplot2
  r-iranges
  r-limma
  r-plyr
  r-rcolorbrewer
  r-reshape2
  r-s4vectors
  r-scales
)
optdepends=(
  r-biocstyle
  r-biovizbase
  r-bumphunter
  r-covr
  r-derfinderdata
  r-knitr
  r-org.hs.eg.db
  r-refmanager
  r-rmarkdown
  r-sessioninfo
  r-testthat
  r-txdb.hsapiens.ucsc.hg19.knowngene
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a231b3e0ec52f1849a147a5275ed5f88d4f9a010f625d10eac828ef7ef95aedd')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
