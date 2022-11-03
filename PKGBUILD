# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=GenomicTuples
_pkgver=1.32.0
pkgname=r-${_pkgname,,}
pkgver=1.32.0
pkgrel=1
pkgdesc='Representation and Manipulation of Genomic Tuples'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocgenerics
  r-data.table
  r-genomeinfodb
  r-genomicranges
  r-iranges
  r-rcpp
  r-s4vectors
)
optdepends=(
  r-biocstyle
  r-covr
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('7311d3d3b508e8c86e1da56f0dcb02f3fbc0d39dcf228f247b8586b94bfd50f1')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
