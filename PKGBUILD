# Maintainer: wagnerflo <florian@wagner-flo.net>
_cranname=ggplot2
_cranver=2.2.0
pkgname=r-cran-$_cranname
pkgver=${_cranver}
pkgrel=1
pkgdesc="Create Elegant Data Visualisations Using the Grammar of Graphics"
url="http://cran.r-project.org/web/packages/${_cranname}/index.html"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('r' 'r-cran-digest' 'r-cran-gtable>=0.1.1' 'r-cran-plyr>=1.7.1'
             'r-cran-reshape2' 'r-cran-scales>=0.4.1' 'r-cran-tibble'
             'r-cran-lazyeval')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('af42e7ac71e9bf566f03ef0ce7b2d56c')

package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}
