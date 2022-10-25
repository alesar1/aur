# system requirements: libprotobuf and protobuf-compiler
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=protolite
_pkgver=2.1.3
pkgname=r-${_pkgname,,}
pkgver=2.1.3
pkgrel=1
pkgdesc='Highly Optimized Protocol Buffer Serializers'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-jsonlite
  r-rcpp
  protobuf
)
optdepends=(
  r-curl
  r-rprotobuf
  r-sf
  r-spelling
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('901d517b6c2f837685784113aae08f7fe2dfd948099930fc8be9d8d2323425eb')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
