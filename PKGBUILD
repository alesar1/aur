# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=MKmisc
_pkgver=1.8
pkgname=r-${_pkgname,,}
pkgver=1.8
pkgrel=4
pkgdesc='Miscellaneous Functions from M. Kohl'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('LGPL')
depends=(
  r
  r-ggplot2
  r-limma
  r-rcolorbrewer
  r-robustbase
  r-scales
)
optdepends=(
  r-amelia
  r-doparallel
  r-exactranktests
  r-foreach
  r-gplots
  r-knitr
  r-parallel
  r-rmarkdown
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('f4b59779935343b5865558731c0cef2762e00b11ffba0eda2b813b07a4dd24b5')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
