# system requirements: JAGS >= 4.3.0 (https://mcmc-jags.sourceforge.io/)
# Maintainer: sukanka <su975853527@gmail.com>

_pkgname=runjags
_pkgver=2.2.1-7
pkgname=r-${_pkgname,,}
pkgver=2.2.1.7
pkgrel=5
pkgdesc='Interface Utilities, Model Templates, Parallel Computing Methods and Additional Distributions for MCMC Models in JAGS'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-coda
  jags
)
optdepends=(
  r-knitr
  r-markdown
  r-modeest
  r-rjags
  r-spelling
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e81fdb15e59cdceda125d6ae7cf0cde93361ba80b123d51afd1ecdc993f25016')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
