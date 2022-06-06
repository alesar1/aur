# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=epivizrData
_pkgver=1.24.0
pkgname=r-${_pkgname,,}
pkgver=1.24.0
pkgrel=1
pkgdesc='Data Management API for epiviz interactive visualization app'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-biobase
  r-ensembldb
  r-epivizrserver
  r-genomeinfodb
  r-genomicfeatures
  r-genomicranges
  r-iranges
  r-organismdbi
  r-s4vectors
  r-summarizedexperiment
)
optdepends=(
  r-annotationhub
  r-biocstyle
  r-bumphunter
  r-dbi
  r-ensdb.mmusculus.v79
  r-hgu133plus2.db
  r-knitr
  r-matrixstats
  r-mus.musculus
  r-rjson
  r-rmarkdown
  r-rmysql
  r-roxygen2
  r-rtracklayer
  r-testthat
  r-txdb.mmusculus.ucsc.mm10.knowngene
  r-utils
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('a0f10dedb2e81b10fdac89f546eab23bb5ef307809fd4c9dea59021747b73b3e')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
