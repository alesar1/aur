# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=DeepBlueR
_pkgver=1.22.0
pkgname=r-${_pkgname,,}
pkgver=1.22.0
pkgrel=1
pkgdesc='DeepBlueR'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-data.table
  r-diffr
  r-dplyr
  r-filehash
  r-foreach
  r-genomeinfodb
  r-genomicranges
  r-r.utils
  r-rcurl
  r-rjson
  r-rtracklayer
  r-settings
  r-stringr
  r-withr
  r-xml
)
optdepends=(
  r-ggplot2
  r-gplots
  r-gviz
  r-knitr
  r-lola
  r-matrixstats
  r-rcolorbrewer
  r-rmarkdown
  r-tidyr
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('18f30cad95b7cfeccd0d203eabb289eabae167fe04d39ba05e44a97fd353bda6')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
