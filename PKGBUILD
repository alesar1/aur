# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=graphite
_pkgver=1.44.0
pkgname=r-${_pkgname,,}
pkgver=1.44.0
pkgrel=1
pkgdesc='GRAPH Interaction from pathway Topological Environment'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('AGPL')
depends=(
  r
  r-annotationdbi
  r-checkmate
  r-graph
  r-httr
  r-rappdirs
  r-purrr
)
optdepends=(
  r-a4preproc
  r-all
  r-biocstyle
  r-clipper
  r-codetools
  r-hgu133plus2.db
  r-hgu95av2.db
  r-impute
  r-knitr
  r-org.hs.eg.db
  r-parallel
  r-r.rsp
  r-rcy3
  r-rmarkdown
  r-spia
  r-testthat
  r-topologygsa
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1ccca351d2f6e6c90e76b6a899b08b83a95241a67c1546f50e4f312bc252723e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
