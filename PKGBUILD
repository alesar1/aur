# Contributor: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Grey Christoforo <first name at last name dot net>

_bcname=BiocGenerics
_bcver=0.32.0
pkgname=r-${_bcname,,}
pkgver=${_bcver//[:-]/.}
pkgrel=1
pkgdesc="S4 generic functions used in Bioconductor"
arch=(any)
url="https://bioconductor.org/packages/release/bioc/html/${_bcname}.html"
license=(Artistic-2.0)
depends=('r>=3.6.0')
optdepends=(r-biobase r-s4vectors r-iranges r-genomicranges r-delayedarray r-biostrings r-rsamtools r-annotationdbi r-oligoclasses r-oligo r-affayplm r-flowclust r-affy r-desq2 r-msnbase r-annotate r-runit)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_bcname}_${_bcver}.tar.gz")
sha256sums=('360399fc2431328a185c395a2dff68dcb0a771e0cbc6db15a953f92f08f1e8da')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_bcname}_${_bcver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_bcname}" "${pkgdir}/usr/lib/R/library"
}
