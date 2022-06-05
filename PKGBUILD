# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=aroma.affymetrix
_pkgver=3.2.0
pkgname=r-${_pkgname,,}
pkgver=3.2.0
pkgrel=4
pkgdesc='Analysis of Large Affymetrix Microarray Data Sets'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('LGPL')
depends=(
  r
  r-aroma.apd
  r-aroma.core
  r-future
  r-listenv
  r-matrixstats
  r-r.cache
  r-r.devices
  r-r.filesets
  r-r.methodss3
  r-r.oo
  r-r.utils
)
optdepends=(
  r-affxparser
  r-affy
  r-affymetrixdatatestfiles
  r-affyplm
  r-aroma.light
  r-biobase
  r-biocgenerics
  r-dbi
  r-dchipio
  r-gcrma
  r-gsmoothr
  r-limma
  r-oligo
  r-oligoclasses
  r-pdinfobuilder
  r-preprocesscore
  r-rcolorbrewer
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('d279cf13cf6ed8369cfdf6682ace12924379bad578003453449aa1ccec31b0a7')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
