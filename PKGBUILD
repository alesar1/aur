# Contributor: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Grey Christoforo <first name at last name dot net>

_bcname=dada2
_bcver=1.22.0
pkgname=r-${_bcname,,}
pkgver=${_bcver//[:-]/.}
pkgrel=1
pkgdesc="Accurate, high-resolution sample inference from amplicon sequencing data"
arch=(i686 x86_64)
url="https://bioconductor.org/packages/release/bioc/html/${_bcname}.html"
license=(LGPL2)
depends=('r>=3.4.0' 'r-rcpp>=0.12.0' 'r-biostrings>=2.42.1' 'r-ggplot2>=2.1.0' 'r-reshape2>=1.4.1' 'r-shortread>=1.32.0' 'r-rcppparallel>=4.3.0' 'r-iranges>=2.6.0' 'r-xvector>=0.16.0' 'r-biocgenerics>=0.22.0')
makedepends=(make)
optdepends=(r-biocstyle r-knitr r-rmarkdown)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_bcname}_${_bcver}.tar.gz")
sha256sums=('86528f7a71419b34dcd9e9e33cc34b0d0d45018854ad8150b81465ab707442d6')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_bcname}_${_bcver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_bcname}" "${pkgdir}/usr/lib/R/library"
}
