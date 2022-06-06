# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=shinycustomloader
_pkgver=0.9.0
pkgname=r-${_pkgname,,}
pkgver=0.9.0
pkgrel=4
pkgdesc='Custom Loader for Shiny Outputs'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-glue
  r-shiny
)
optdepends=(
  r-shinycssloaders
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('cee1f758eb30bc4cb76c3ac463482b31e2167150312e689c7ce0199177389dce')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
