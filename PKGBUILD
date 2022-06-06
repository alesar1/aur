# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=filelock
_pkgver=1.0.2
pkgname=r-${_pkgname,,}
pkgver=1.0.2
pkgrel=5
pkgdesc='Portable File Locking'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('MIT')
depends=(
  r
)
optdepends=(
  r-callr
  r-covr
  r-testthat
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('ac2915950789b16c43a625a2b8dab6ba423588db4a7d0daa75b74518b82b1403')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
  install -Dm644 "${_pkgname}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
