# Maintainer: frichtlm <frichtlm@gmail.com>
# Contribitor: wagnerflo <florian@wagner-flo.net>
_cranname=tibble
_cranver=1.3.4
pkgname=r-cran-$_cranname
pkgver=${_cranver}
pkgrel=1
pkgdesc="Tibble: An upgraded data frame class."
url="http://cran.r-project.org/web/packages/${_cranname}/index.html"
arch=('i686' 'x86_64')
license=('MIT')
depends=('r>=3.1.0' 'r-cran-rcpp>=0.12.3' 'r-cran-rlang')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('298e81546f999fb0968625698511b8d3') 

package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}
