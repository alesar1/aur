# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=robust
_pkgver=0.7-1
pkgname=r-${_pkgname,,}
pkgver=0.7.1
pkgrel=1
pkgdesc='Port of the S+ "Robust Library"'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-fit.models
  r-robustbase
  r-rrcov
)
makedepends=(
  gcc-fortran
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('efaac70c6399b2787938e23ea89039b4a6043e76601bd794ba0ddda1edee65df')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
