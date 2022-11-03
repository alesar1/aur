# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=TileDBArray
_pkgver=1.8.0
pkgname=r-${_pkgname,,}
pkgver=1.8.0
pkgrel=1
pkgdesc='Using TileDB as a DelayedArray Backend'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-delayedarray
  r-rcpp
  r-s4vectors
  r-tiledb
)
optdepends=(
  r-biocparallel
  r-biocstyle
  r-knitr
  r-matrix
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('25e4e83b6c5adfa817cc3f34ddefe5a248e1834f491ddda6c96de9752012ae76')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
