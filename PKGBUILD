# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=fracdiff
_pkgver=1.5-2
pkgname=r-${_pkgname,,}
pkgver=1.5.2
pkgrel=1
pkgdesc='Fractionally Differenced ARIMA aka ARFIMA(P,d,q) Models'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
)
optdepends=(
  r-forecast
  r-longmemo
  r-urca
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('ac5f881330287f5bc68b5cdce4fb74156a95356ffb875ee171538bc44200f437')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
