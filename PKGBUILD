# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=STRINGdb
_pkgver=2.8.4
pkgname=r-${_pkgname,,}
pkgver=2.8.4
pkgrel=1
pkgdesc='STRINGdb (Search Tool for the Retrieval of Interacting proteins database)'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-gplots
  r-hash
  r-igraph
  r-plotrix
  r-plyr
  r-png
  r-rcolorbrewer
  r-rcurl
  r-sqldf
)
optdepends=(
  r-biocgenerics
  r-runit
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('e90ce12a57bc8f3de656c3cc2cff850de317465fee91acf1fd2701b30102c6ca')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
