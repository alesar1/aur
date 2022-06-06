# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=rnaEditr
_pkgver=1.6.0
pkgname=r-${_pkgname,,}
pkgver=1.6.0
pkgrel=1
pkgdesc='Statistical analysis of RNA editing sites and hyper-editing regions'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-bumphunter
  r-corrplot
  r-genomeinfodb
  r-genomicranges
  r-iranges
  r-logistf
  r-plyr
  r-s4vectors
)
optdepends=(
  r-knitr
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a8afc0050a269e0b08760f5ea6c0b7cd7c94ce94d3be1db0a67156583c5046cb')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
