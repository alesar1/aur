# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ggforce
_pkgver=0.3.4
pkgname=r-${_pkgname,,}
pkgver=0.3.4
pkgrel=1
pkgdesc="Accelerating 'ggplot2'"
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-ggplot2
  r-gtable
  r-polyclip
  r-rcpp
  r-rcppeigen
  r-rlang
  r-scales
  r-tidyselect
  r-tweenr
  r-withr
)
optdepends=(
  r-concaveman
  r-covr
  r-deldir
  r-reshape2
  r-sessioninfo
  r-units
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('62c71b3540ab9bc1257088afab4fe02869368af1eeb06b062f13f45956db5053')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
