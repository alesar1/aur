# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ggmsa
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc="Plot Multiple Sequence Alignment using 'ggplot2'"
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-aplot
  r-biostrings
  r-dplyr
  r-ggalt
  r-ggforce
  r-ggplot2
  r-magrittr
  r-r4rna
  r-rcolorbrewer
  r-seqmagick
  r-tidyr
  r-statebins
  r-ggtree
)
optdepends=(
  r-ape
  r-biocstyle
  r-cowplot
  r-gggenes
  r-ggnewscale
  r-ggtreeextra
  r-kableextra
  r-knitr
  r-phangorn
  r-readxl
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('30b6f16a0a2b02da0699142516077e7caaf6cb1cc8e8d288ec039045db711d5f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
