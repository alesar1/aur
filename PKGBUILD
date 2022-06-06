# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Peptides
_pkgver=2.4.4
pkgname=r-${_pkgname,,}
pkgver=2.4.4
pkgrel=4
pkgdesc='Calculate Indices and Theoretical Physicochemical Properties of Protein Sequences'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-rcpp
)
optdepends=(
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('fc870bd9184f23e25f9a8d20c24c2f5e32aa1333ceacab6b256765a0345bf7fa')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
