# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ReactomeContentService4R
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Interface for the Reactome Content Service'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Apache')
depends=(
  r
  r-data.table
  r-doparallel
  r-foreach
  r-httr
  r-jsonlite
  r-magick
)
optdepends=(
  r-knitr
  r-pdftools
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e33c03bfe1411e739913644da988cbdc35f96b22573280e442a958815a559f37')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
