# system requirements: C++11
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DelayedRandomArray
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Delayed Arrays of Random Values'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-bh
  r-delayedarray
  r-dqrng
  r-rcpp
  gcc
)
optdepends=(
  r-biocstyle
  r-knitr
  r-matrix
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('230a8412943aad2b2788489a105a8a98213bdf930ec40a346ec45ce6fe53e695')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
