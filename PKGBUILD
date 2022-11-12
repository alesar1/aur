# Maintainer: sukanka <su975853527@gmail.com>

_pkgname=LambertW
_pkgver=0.6.7-1
pkgname=r-${_pkgname,,}
pkgver=${_pkgver//[:-]/.}
pkgrel=1
pkgdesc='Probabilistic Models to Analyze and Gaussianize Heavy-Tailed, Skewed Data'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-ggplot2
  r-lamw
  r-rcolorbrewer
  r-rcpp
  r-reshape2
)
optdepends=(
  r-boot
  r-data.table
  r-knitr
  r-markdown
  r-moments
  r-nortest
  r-numderiv
  r-rsolnp
  r-testthat
  r-vars
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('64762edfa8cc84a2849626f4ff659972b153ab776e724d57a128ca9dadc0b931')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
