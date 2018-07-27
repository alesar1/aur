# Maintainer: Alex Branham <branham@utexas.edu>
_cranver=1.0.0
pkgname=r-pkgbuild
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc='Find Tools Needed to Build R Packages'
arch=('any')
url='https://cran.r-project.org/package=pkgbuild'
license=('GPL3')
depends=('r' 'r-callr>=2.0.0' 'r-crayon' 'r-desc' 'r-r6' 'r-rprojroot' 'r-withr>=2.1.2')
optdepends=('r-rcpp' 'r-testthat' 'r-covr')
source=("https://cran.r-project.org/src/contrib/pkgbuild_"$_cranver".tar.gz")
md5sums=('068b4f21f69a309a386bf6f1dacb3bf6')

build(){
    R CMD INSTALL pkgbuild_"$_cranver".tar.gz -l "$srcdir"
}
package() {
    install -dm0755 "$pkgdir"/usr/lib/R/library
    cp -a --no-preserve=ownership pkgbuild "$pkgdir"/usr/lib/R/library
}

