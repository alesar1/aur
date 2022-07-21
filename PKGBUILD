# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=R.cache
_pkgver=0.15.0
pkgname=r-${_pkgname,,}
pkgver=0.15.0
pkgrel=4
pkgdesc='Fast and Light-Weight Caching (Memoization) of Objects and Results to Speed Up Computations'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('LGPL')
depends=(
  r
  r-digest
  r-r.methodss3
  r-r.oo
  r-r.utils
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('adb4d3b08f7917e10fe6188c7b90a3318701a974c58eaa09943b929382bdf126')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
