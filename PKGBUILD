# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MIRA
_pkgver=1.18.0
pkgname=r-${_pkgname,,}
pkgver=1.18.0
pkgrel=1
pkgdesc='Methylation-Based Inference of Regulatory Activity'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-bsseq
  r-data.table
  r-genomicranges
  r-ggplot2
  r-iranges
  r-s4vectors
)
optdepends=(
  r-annotationhub
  r-biocstyle
  r-knitr
  r-lola
  r-parallel
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a10bf6b4c801fea7ffda74dce0fd18d8fd60f968d669b06b87c8fb05939e9d9f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
