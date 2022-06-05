# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=Basic4Cseq
_pkgver=1.32.0
pkgname=r-${_pkgname,,}
pkgver=1.32.0
pkgrel=1
pkgdesc='Basic4Cseq: an R/Bioconductor package for analyzing 4C-seq data'
arch=('any')
url="https://bioconductor.org/packages/${_pkgname}"
license=('LGPL')
depends=(
  r
  r-biostrings
  r-bsgenome.ecoli.ncbi.20080805
  r-catools
  r-genomicalignments
  r-genomicranges
  r-rcircos
)
optdepends=(
  r-bsgenome.hsapiens.ucsc.hg19
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('b7f7ee1d449453260d83e8710c73f07b8565f47e8ea3eb7d5d76cdfa6693fb92')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
