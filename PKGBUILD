# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=diffUTR
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc="diffUTR: Streamlining differential exon and 3' UTR usage"
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-complexheatmap
  r-dexseq
  r-dplyr
  r-edger
  r-ensembldb
  r-genomeinfodb
  r-genomicranges
  r-ggplot2
  r-ggrepel
  r-iranges
  r-limma
  r-matrixstats
  r-rsubread
  r-rtracklayer
  r-s4vectors
  r-stringi
  r-summarizedexperiment
  r-viridislite
)
optdepends=(
  r-biocstyle
  r-knitr
  r-rmarkdown
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('c50e0a87c209ee469d247306c9071ae0920860b062a5768c07fcd534debc0b05')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
