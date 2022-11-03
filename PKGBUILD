# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=miQC
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Flexible, probabilistic metrics for quality control of scRNA-seq data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('BSD')
depends=(
  r
  r-flexmix
  r-ggplot2
  r-singlecellexperiment
)
optdepends=(
  r-biocstyle
  r-biomart
  r-knitr
  r-rmarkdown
  r-scater
  r-scrnaseq
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('dff67faae5accb84d9ecc6e697f56262c354f2ce70c6cb2acdb666572a8ec4bb')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
