# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=geneXtendeR
_pkgver=1.22.0
pkgname=r-${_pkgname,,}
pkgver=1.22.0
pkgrel=1
pkgdesc='Optimized Functional Annotation Of ChIP-seq Data'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-annotationdbi
  r-biocstyle
  r-data.table
  r-dplyr
  r-go.db
  r-networkd3
  r-org.rn.eg.db
  r-rcolorbrewer
  r-rtracklayer
  r-snowballc
  r-tm
  r-wordcloud
)
optdepends=(
  r-knitr
  r-org.ag.eg.db
  r-org.bt.eg.db
  r-org.ce.eg.db
  r-org.cf.eg.db
  r-org.dm.eg.db
  r-org.dr.eg.db
  r-org.gg.eg.db
  r-org.hs.eg.db
  r-org.mm.eg.db
  r-org.pt.eg.db
  r-org.sc.sgd.db
  r-org.ss.eg.db
  r-org.xl.eg.db
  r-rmarkdown
  r-rtracklayer
  r-testthat
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('ca49681ebdd76f9371db25d52f28f75cd80289b478f5f7c2bb2e9c4cb37a7061')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
