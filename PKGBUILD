# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=SCAN.UPC
_pkgver=2.40.0
pkgname=r-${_pkgname,,}
pkgver=2.40.0
pkgrel=1
pkgdesc='Single-channel array normalization (SCAN) and Universal exPression Codes (UPC)'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-affy
  r-affyio
  r-biobase
  r-biostrings
  r-foreach
  r-geoquery
  r-iranges
  r-oligo
  r-sva
)
optdepends=(
  r-pd.hg.u95a
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('b7dba66973ef326a5b6eadc0c302af4b24863589422530291339b417ece42ec3')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
