# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=distrEx
_pkgver=2.8.0
pkgname=r-${_pkgname,,}
pkgver=2.8.0
pkgrel=4
pkgdesc="Extensions of Package 'distr'"
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('LGPL')
depends=(
  r
  r-distr
  r-startupmsg
)
optdepends=(
  r-tcltk
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('b064cde7d63ce93ec9969c8c4463c1e327758b6f8ea7765217d77f9ba9d590bf')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
