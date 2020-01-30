# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Grey Christoforo <first name at last name dot net>

_bcname=S4Vectors
_bcver=0.24.3
pkgname=r-s4vectors
pkgver=${_bcver//[:-]/.}
pkgrel=1
pkgdesc="Foundation of vector-like and list-like containers in Bioconductor"
url="https://bioconductor.org/packages/release/bioc/html/${_bcname}.html"
arch=(i686 x86_64)
license=('Artistic-2.0')
depends=('r>=3.3.0' 'r-biocgenerics>=0.31.1')
makedepends=('gcc')
optdepends=('r-iranges' 'r-genomicranges' 'r-summarizedexperiment' 'r-delayedarray' 'r-shortread' 'r-data.table' 'r-runit' 'r-biocstyle')
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_bcname}_${_bcver}.tar.gz")
sha1sums=('f8122844ef2569a1dad3ad10af59638d987b3b2a')

build(){
  cd "${srcdir}"

  R CMD INSTALL ${_bcname}_${_bcver}.tar.gz -l $srcdir
}

package() {
  cd "${srcdir}"

  install -dm0755 "$pkgdir/usr/lib/R/library"
  cp -a --no-preserve=ownership "$_bcname" "$pkgdir/usr/lib/R/library"
}

