# Maintainer: Stephen R. Martin <stephensrmmartin at gmail dot com>
_cranname=RInside
_cranver=0.2.15
pkgname=r-cran-rinside
pkgver=${_cranver}
pkgrel=1
pkgdesc="Seamless R and C++ Integration"
url="http://cran.r-project.org/web/packages/${_cranname}/index.html"
arch=('i686' 'x86_64')
license=('GPL2' 'GPL3')
depends=('r' 'r-rcpp')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('3b8c13dc53c6958c1f82c0a25dd6c211')

package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}
