# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=randRotation
_pkgver=1.10.0
pkgname=r-${_pkgname,,}
pkgver=1.10.0
pkgrel=1
pkgdesc='Random Rotation Methods for High Dimensional Data with Batch Structure'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-rdpack
)
optdepends=(
  r-biocparallel
  r-biocstyle
  r-knitr
  r-limma
  r-lme4
  r-nlme
  r-rmarkdown
  r-sva
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('9b2beb435b876c7c6fb4c16ee21534c127cae8a44175c62e415cb11f87373cea')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
