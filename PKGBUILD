# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=esetVis
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='Visualizations of expressionSet Bioconductor object'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biobase
  r-hexbin
  r-mlp
  r-mpm
  r-rtsne
)
optdepends=(
  r-all
  r-annotationdbi
  r-ggplot2
  r-ggrepel
  r-ggvis
  r-hgu95av2.db
  r-knitr
  r-pander
  r-rbokeh
  r-rmarkdown
  r-summarizedexperiment
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('5b1f2d55fda25bb24a9a69367326c00050575c07b8a030431a45a148536ad4ee')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
