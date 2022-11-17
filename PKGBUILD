# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=mixsqp
_pkgver=0.3-48
pkgname=r-${_pkgname,,}
pkgver=0.3.48
pkgrel=1
pkgdesc='Sequential Quadratic Programming for Fast Maximum-Likelihood Estimation of Mixture Proportions'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-irlba
  r-rcpp
  r-rcpparmadillo
)
optdepends=(
  r-knitr
  r-rebayes
  r-rmarkdown
  r-rmosek
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('8874d7c2ce1a43ffe55d2de450bc7bd4e252d7e621c40ebc8f1fc752c7789209')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
