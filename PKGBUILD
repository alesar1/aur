# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=profileplyr
_pkgver=1.12.0
pkgname=r-${_pkgname,,}
pkgver=1.12.0
pkgrel=1
pkgdesc='Visualization and annotation of read signal over genomic ranges with profileplyr'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-biocparallel
  r-cairo
  r-chipseeker
  r-circlize
  r-complexheatmap
  r-dplyr
  r-enrichedheatmap
  r-genomeinfodb
  r-genomicfeatures
  r-genomicranges
  r-ggplot2
  r-iranges
  r-magrittr
  r-org.hs.eg.db
  r-org.mm.eg.db
  r-pheatmap
  r-r.utils
  r-rgreat
  r-rjson
  r-rlang
  r-rsamtools
  r-rtracklayer
  r-s4vectors
  r-soggi
  r-summarizedexperiment
  r-tidyr
  r-tiff
  r-txdb.hsapiens.ucsc.hg19.knowngene
  r-txdb.hsapiens.ucsc.hg38.knowngene
  r-txdb.mmusculus.ucsc.mm10.knowngene
  r-txdb.mmusculus.ucsc.mm9.knowngene
)
optdepends=(
  r-biocstyle
  r-knitr
  r-png
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('dcc2be4f42952eca281a0eac7270982d4db2334bdd7667bcf950886007ce9644')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
