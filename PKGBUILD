# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Xeva
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='Analysis of patient-derived xenograft (PDX) data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-bbmisc
  r-biobase
  r-complexheatmap
  r-doparallel
  r-downloader
  r-ggplot2
  r-pharmacogx
  r-rmisc
  r-scales
)
optdepends=(
  r-biocstyle
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('af4baf6827064f6ae4a4c84396dca8c25642a359cf0b75702a68c9d88084c3e3')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
