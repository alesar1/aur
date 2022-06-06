# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=monaLisa
_pkgver=1.2.0
pkgname=r-${_pkgname,,}
pkgver=1.2.0
pkgrel=1
pkgdesc='Binned Motif Enrichment Analysis and Visualization'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-biocparallel
  r-biostrings
  r-bsgenome
  r-circlize
  r-complexheatmap
  r-genomeinfodb
  r-genomicranges
  r-glmnet
  r-iranges
  r-s4vectors
  r-stabs
  r-summarizedexperiment
  r-tfbstools
  r-vioplot
  r-xvector
)
optdepends=(
  r-biocstyle
  r-bsgenome.mmusculus.ucsc.mm10
  r-gridextra
  r-jaspar2020
  r-knitr
  r-rmarkdown
  r-testthat
  r-txdb.mmusculus.ucsc.mm10.knowngene
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a657bc0af5f5ab6c72b760f43a1967e827d2514b85d97f508be733527c9e1867')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
