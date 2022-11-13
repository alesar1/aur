# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MAGeCKFlute
_pkgver=2.2.0
pkgname=r-${_pkgname,,}
pkgver=2.2.0
pkgrel=1
pkgdesc='Integrative Analysis Pipeline for Pooled CRISPR Functional Genetic Screens'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-clusterprofiler
  r-depmap
  r-dose
  r-enrichplot
  r-ggplot2
  r-ggrepel
  r-gridextra
  r-msigdbr
  r-pathview
  r-reshape2
)
optdepends=(
  r-biocmanager
  r-biocstyle
  r-biomart
  r-dendextend
  r-graphics
  r-knitr
  r-pheatmap
  r-png
  r-scales
  r-sva
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e0e7cd2a0c0bf179a1c8b42fb56da519b839da72961890690e2a3e583583a8dc')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
