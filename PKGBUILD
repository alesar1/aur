# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=LIM
_pkgver=1.4.7
pkgname=r-${_pkgname,,}
pkgver=1.4.7
pkgrel=1
pkgdesc='Linear Inverse Model examples and solution methods.'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-diagram
  r-limsolve
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('5242020ab262ff0e9f1d8c7fdafc541ecebbe8d66da4a41b474fd90a9a7f2b35')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
