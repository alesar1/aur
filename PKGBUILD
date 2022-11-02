# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=topconfects
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='Top Confident Effect Sizes'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-assertthat
  r-ggplot2
)
optdepends=(
  r-annotationdbi
  r-ashr
  r-biocstyle
  r-deseq2
  r-dplyr
  r-edger
  r-knitr
  r-limma
  r-nbpseq
  r-org.at.tair.db
  r-readr
  r-reshape2
  r-rmarkdown
  r-statmod
  r-testthat
  r-tidyr
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('2e19954f6a78e8e246d57593d76a14993f65ebf5e2e577089a8a6da7f85c7701')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
