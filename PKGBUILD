# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=mia
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc='Microbiome analysis'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-ape
  r-biocgenerics
  r-biocparallel
  r-biostrings
  r-decipher
  r-decontam
  r-delayedarray
  r-delayedmatrixstats
  r-dirichletmultinomial
  r-dplyr
  r-iranges
  r-multiassayexperiment
  r-rlang
  r-s4vectors
  r-scater
  r-scuttle
  r-singlecellexperiment
  r-summarizedexperiment
  r-tibble
  r-tidyr
  r-treesummarizedexperiment
  r-vegan
)
optdepends=(
  r-ade4
  r-biocstyle
  r-biomformat
  r-dada2
  r-knitr
  r-microbiomedatasets
  r-patchwork
  r-phyloseq
  r-reldist
  r-rmarkdown
  r-stringr
  r-testthat
  r-yaml
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('b332f5bc9a2955fd4fff40b98c06696a816fcf15224c0799ea00afa40d4eea96')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
