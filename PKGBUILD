# system requirements: C++11
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=vroom
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Read and Write Rectangular Text Data Quickly'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-bit64
  r-cli
  r-cpp11
  r-crayon
  r-glue
  r-hms
  r-lifecycle
  r-progress
  r-rlang
  r-tibble
  r-tidyselect
  r-tzdb
  r-vctrs
  r-withr
)
optdepends=(
  r-archive
  r-bench
  r-covr
  r-curl
  r-dplyr
  r-forcats
  r-fs
  r-ggplot2
  r-knitr
  r-patchwork
  r-prettyunits
  r-purrr
  r-rmarkdown
  r-rstudioapi
  r-scales
  r-spelling
  r-testthat
  r-tidyr
  r-utils
  r-waldo
  r-xml2
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a718ccdf916442693af5392944774d8aec5ce48f417871f9de84dd1089d26ca6')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
