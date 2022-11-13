# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=RNAmodR.ML
_pkgver=1.12.0
pkgname=r-${_pkgname,,}
pkgver=1.12.0
pkgrel=1
pkgdesc='Detecting patterns of post-transcriptional modifications using machine learning'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocgenerics
  r-genomicranges
  r-iranges
  r-ranger
  r-rnamodr
  r-s4vectors
)
optdepends=(
  r-biocstyle
  r-genomicfeatures
  r-keras
  r-knitr
  r-rmarkdown
  r-rnamodr.alkanilineseq
  r-rnamodr.data
  r-rsamtools
  r-rtracklayer
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('3e5267358c985cf92a87475a3280a4c5be434fbd7ebc717dbb8f989032d3d322')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
