# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=SLGI
_pkgver=1.56.0
pkgname=r-${_pkgname,,}
pkgver=1.56.0
pkgrel=1
pkgdesc='Synthetic Lethal Genetic Interaction'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-annotationdbi
  r-biobase
  r-biocgenerics
  r-go.db
  r-scisi
)
optdepends=(
  r-go.db
  r-org.sc.sgd.db
)
makedepends=(
  git
)
source=("git+https://git.bioconductor.org/packages/${_pkgname}")
sha256sums=('SKIP')

build() {
  tar -zcvf ${_pkgname}_${_pkgver}.tar.gz  ${_pkgname}
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
