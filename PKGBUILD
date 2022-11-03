# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=wiggleplotr
_pkgver=1.22.0
pkgname=r-${_pkgname,,}
pkgver=1.22.0
pkgrel=1
pkgdesc='Make read coverage plots from BigWig files'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Apache')
depends=(
  r
  r-assertthat
  r-cowplot
  r-dplyr
  r-genomeinfodb
  r-genomicranges
  r-ggplot2
  r-iranges
  r-purrr
  r-rtracklayer
  r-s4vectors
)
optdepends=(
  r-annotationdbi
  r-annotationfilter
  r-biomart
  r-ensdb.hsapiens.v86
  r-ensembldb
  r-genomicfeatures
  r-knitr
  r-org.hs.eg.db
  r-rmarkdown
  r-testthat
  r-txdb.hsapiens.ucsc.hg38.knowngene
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('83deaa1ed30ee5381bd911c68adc2839f6742e9fb4780f1a9f3c11417cd4e9fa')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
