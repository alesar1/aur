# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=ccmap
_pkgver=1.22.0
pkgname=r-${_pkgname,,}
pkgver=1.22.0
pkgrel=1
pkgdesc='Combination Connectivity Mapping'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('MIT')
depends=(
  r
  r-annotationdbi
  r-biocmanager
  r-ccdata
  r-data.table
  r-doparallel
  r-foreach
  r-lsa
  r-xgboost
)
optdepends=(
  r-crossmeta
  r-knitr
  r-lydata
  r-rmarkdown
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('c7cbf2e562b392ec795aebd9bd52313866cfd10add80af012399064bc1143c0f')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
