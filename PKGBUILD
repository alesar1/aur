# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ggstance
_pkgver=0.3.5
pkgname=r-${_pkgname,,}
pkgver=0.3.5
pkgrel=4
pkgdesc="Horizontal 'ggplot2' Components"
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-ggplot2
  r-plyr
  r-rlang
  r-withr
)
optdepends=(
  r-covr
  r-hmisc
  r-testthat
  r-vdiffr
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('ed641857c49eb60f5baf2817fbd610caea62322a247f8b2c1aca3056eddee94b')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
