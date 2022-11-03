# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MsFeatures
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Functionality for Mass Spectrometry Features'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-mscoreutils
  r-protgenerics
  r-summarizedexperiment
)
optdepends=(
  r-biocstyle
  r-knitr
  r-pheatmap
  r-rmarkdown
  r-roxygen2
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('41060ed64d31f71d9c9b5f027648f16458d0000f4c7bb4dd53aaf130381122e0')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
