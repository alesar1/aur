# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ODER
_pkgver=1.2.0
pkgname=r-${_pkgname,,}
pkgver=1.2.0
pkgrel=1
pkgdesc='Optimising the Definition of Expressed Regions'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biocfilecache
  r-biocgenerics
  r-dasper
  r-data.table
  r-derfinder
  r-dplyr
  r-genomeinfodb
  r-genomicranges
  r-ggplot2
  r-ggpubr
  r-ggrepel
  r-iranges
  r-magrittr
  r-megadepth
  r-plyr
  r-purrr
  r-rtracklayer
  r-s4vectors
  r-stringr
  r-tibble
)
optdepends=(
  r-biocstyle
  r-covr
  r-genomicfeatures
  r-knitr
  r-recount
  r-refmanager
  r-rmarkdown
  r-sessioninfo
  r-summarizedexperiment
  r-testthat
  r-xfun
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('1a086bf5d4acecac4e750832a1aabf7ce41708859f2250e2aa72693100a143ee')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
