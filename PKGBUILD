# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=BadRegionFinder
_pkgver=1.26.0
pkgname=r-${_pkgname,,}
pkgver=1.26.0
pkgrel=1
pkgdesc='BadRegionFinder: an R/Bioconductor package for identifying regions with bad coverage'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-biomart
  r-genomicranges
  r-rsamtools
  r-s4vectors
  r-variantannotation
)
optdepends=(
  r-bsgenome.hsapiens.ucsc.hg19
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('55878f6fad1d9eee4205856c83ab5fed243e492199a9c8a342cc690e996c4f2f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
