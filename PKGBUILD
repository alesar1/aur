# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=escape
_pkgver=1.8.0
pkgname=r-${_pkgname,,}
pkgver=1.8.0
pkgrel=1
pkgdesc='Easy single cell analysis platform for enrichment'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Apache')
depends=(
  r
  r-biocparallel
  r-broom
  r-data.table
  r-dplyr
  r-ggplot2
  r-ggridges
  r-gseabase
  r-gsva
  r-matrixgenerics
  r-msigdbr
  r-patchwork
  r-reshape2
  r-rlang
  r-singlecellexperiment
  r-stringr
  r-summarizedexperiment
  r-ucell
)
optdepends=(
  r-biocstyle
  r-dittoseq
  r-knitr
  r-markdown
  r-rmarkdown
  r-seurat
  r-seuratobject
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('4d80d2798f07885ae035dbb9d994c707ed3a94fbe6cef5f35da51a50cc4168f1')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
