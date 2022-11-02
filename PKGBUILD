# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=dcanr
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='Differential co-expression/association network analysis'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-circlize
  r-dorng
  r-foreach
  r-igraph
  r-plyr
  r-rcolorbrewer
  r-reshape2
  r-stringr
)
optdepends=(
  r-biobase
  r-biocstyle
  r-cosine
  r-doparallel
  r-dosnow
  r-ebarrays
  r-ebcoexpress
  r-edger
  r-genenet
  r-knitr
  r-mclust
  r-minqa
  r-parallel
  r-rmarkdown
  r-summarizedexperiment
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('fe76034820e6cdd0bb303e7d56aede8f02f2e56d3dea1487ec1bddb11554c66f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
