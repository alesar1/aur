# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=recoup
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='An R package for the creation of complex genomic profile plots'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-biomart
  r-biostrings
  r-circlize
  r-complexheatmap
  r-genomeinfodb
  r-genomicalignments
  r-genomicfeatures
  r-genomicranges
  r-ggplot2
  r-httr
  r-iranges
  r-rsamtools
  r-rsqlite
  r-rtracklayer
  r-s4vectors
  r-stringr
)
optdepends=(
  r-biocmanager
  r-biocstyle
  r-bsgenome
  r-grid
  r-knitr
  r-rmarkdown
  r-rmysql
  r-runit
  r-zoo
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('7772a4602f972fff71047c3216a3a4d8eec68dca9e4a720b073da4f4b28334e3')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
