# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=haven
_cranver=1.1.1
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-haven
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Import and Export SPSS, Stata and SAS Files"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('MIT')
depends=('r' 'r-forcats>=0.2.0' 'r-hms' 'r-rcpp>=0.11.4' 'r-readr>=0.1.0' 'r-tibble')

optdepends=('r-covr' 'r-knitr' 'r-rmarkdown' 'r-testthat')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('dc4bf0503c1cad72ff82b84591a4dcfc')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

