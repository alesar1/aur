# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=sitadela
_pkgver=1.4.0
pkgname=r-${_pkgname,,}
pkgver=1.4.0
pkgrel=1
pkgdesc='An R package for the easy provision of simple but complete tab-delimited genomic annotation from a variety of sources and organisms'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('Artistic2.0')
depends=(
  r
  r-biobase
  r-biocgenerics
  r-biomart
  r-biostrings
  r-genomeinfodb
  r-genomicfeatures
  r-genomicranges
  r-iranges
  r-rsamtools
  r-rsqlite
  r-rtracklayer
  r-s4vectors
)
optdepends=(
  r-bsgenome
  r-knitr
  r-rmarkdown
  r-rmysql
  r-runit
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('db3980588cc7983bf230c1c5a8afd3010f6ddf8235e5fc2b7b778d6d5d175e98')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
