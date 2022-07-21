# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=here
_pkgver=1.0.1
pkgname=r-${_pkgname,,}
pkgver=1.0.1
pkgrel=4
pkgdesc='A Simpler Way to Find Your Files'
arch=('any')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
  r-rprojroot
)
optdepends=(
  r-conflicted
  r-covr
  r-fs
  r-knitr
  r-palmerpenguins
  r-plyr
  r-readr
  r-rlang
  r-rmarkdown
  r-testthat
  r-uuid
  r-withr
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('08ed908033420d3d665c87248b3a14d1b6e2b37844bf736be620578c20ca346b')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
