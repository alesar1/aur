# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=GeneticsPed
_pkgver=1.60.1
pkgname=r-${_pkgname,,}
pkgver=1.60.1
pkgrel=1
pkgdesc='Pedigree and genetic relationship functions'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-gdata
  r-genetics
)
optdepends=(
  r-gtools
  r-runit
)
makedepends=(
  gcc-fortran
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('cacefa81ca0a3641ef9fb2e7f2cb8928b50e0136dc9569d05efc4dc70df158c1')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
