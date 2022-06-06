# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=spacetime
_pkgver=1.2-6
pkgname=r-${_pkgname,,}
pkgver=1.2.6
pkgrel=4
pkgdesc='Classes and Methods for Spatio-Temporal Data'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-intervals
  r-sp
  r-xts
  r-zoo
)
optdepends=(
  r-adehabitatlt
  r-cshapes
  r-foreign
  r-googlevis
  r-gstat
  r-isocodes
  r-knitr
  r-mapdata
  r-maps
  r-maptools
  r-markdown
  r-plm
  r-raster
  r-rcolorbrewer
  r-rgdal
  r-rgeos
  r-rpostgresql
  r-sf
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('8fd46606ed9589ffce19368d40004890f96e8fe77f13b546e6a2f8b9ced0dd81')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
