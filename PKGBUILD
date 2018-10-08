# Maintainer: Matt Frichtl <frichtlm@gmail.com>
_cranname=Rcpp
_cranver=0.12.19
pkgname=r-rcpp
pkgver=${_cranver}
pkgrel=1
pkgdesc="Seamless R and C++ Integration"
url="https://cran.r-project.org/package=Rcpp"
arch=('i686' 'x86_64')
license=('GPL-2' 'GPL-3')
depends=('r>=3.0.0')
optdepends=('r-runit' 'r-inline' 'r-rbenchmark' 'r-knitr' 'r-rmarkdown' 'r-pinp' 'r-pkgkitten')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('e72a00c132f29ec10135f98b29cfdf09')

package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}
