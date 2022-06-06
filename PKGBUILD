# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=REMP
_pkgver=1.20.1
pkgname=r-${_pkgname,,}
pkgver=1.20.1
pkgrel=3
pkgdesc='Repetitive Element Methylation Prediction'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-annotationhub
  r-biocgenerics
  r-biocparallel
  r-biostrings
  r-bsgenome
  r-caret
  r-doparallel
  r-foreach
  r-genomeinfodb
  r-genomicranges
  r-impute
  r-iranges
  r-iterators
  r-kernlab
  r-minfi
  r-org.hs.eg.db
  r-ranger
  r-readr
  r-rtracklayer
  r-s4vectors
  r-settings
  r-summarizedexperiment
)
optdepends=(
  r-bsgenome.hsapiens.ucsc.hg19
  r-bsgenome.hsapiens.ucsc.hg38
  r-illuminahumanmethylation450kanno.ilmn12.hg19
  r-illuminahumanmethylationepicanno.ilm10b2.hg19
  r-knitr
  r-minfidataepic
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('f291ddac2c2df84f0665328afda4b08788aa958f7fe2a87549d7572a17b8e604')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
