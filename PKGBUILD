# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=limma
_pkgver=3.52.1
pkgname=r-${_pkgname,,}
pkgver=3.52.1
pkgrel=1
pkgdesc='Linear Models for Microarray Data'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
)
optdepends=(
  r-affy
  r-annotationdbi
  r-biasedurn
  r-biobase
  r-ellipse
  r-go.db
  r-gplots
  r-illuminaio
  r-locfit
  r-mass
  r-org.hs.eg.db
  r-splines
  r-statmod
  r-vsn
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('5ea9182fb7da0e300effa14f85668a2a8bf5e5b8c464426d4879822dc51f74a4')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
