# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=TCGAutils
_pkgver=1.18.0
pkgname=r-${_pkgname,,}
pkgver=1.18.0
pkgrel=1
pkgdesc='TCGA utility functions for data management'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-annotationdbi
  r-biocgenerics
  r-genomeinfodb
  r-genomicdatacommons
  r-genomicfeatures
  r-genomicranges
  r-iranges
  r-multiassayexperiment
  r-raggedexperiment
  r-rvest
  r-s4vectors
  r-stringr
  r-summarizedexperiment
  r-xml2
)
optdepends=(
  r-annotationhub
  r-biocfilecache
  r-biocstyle
  r-complexheatmap
  r-curatedtcgadata
  r-devtools
  r-dplyr
  r-httr
  r-illuminahumanmethylation450kanno.ilmn12.hg19
  r-impute
  r-knitr
  r-magrittr
  r-mirbase.db
  r-org.hs.eg.db
  r-r.utils
  r-rcolorbrewer
  r-readr
  r-rmarkdown
  r-rtcgatoolbox
  r-rtracklayer
  r-testthat
  r-txdb.hsapiens.ucsc.hg18.knowngene
  r-txdb.hsapiens.ucsc.hg19.knowngene
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('bdce54a38bd48d4b1ce9ca222e7dce57bb7e9cf9441137723b6b4c556c55176e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
