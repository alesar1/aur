# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=wavethresh
_pkgver=4.7.1
pkgname=r-${_pkgname,,}
pkgver=4.7.1
pkgrel=1
pkgdesc='Wavelets Statistics and Transforms'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('330cf1ea755f27de938e5e4012f08e5923680bab6e0800cb0cdc91cea895009d')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
