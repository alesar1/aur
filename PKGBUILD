# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=pls
_cranver=2.6-0
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-pls
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Partial Least Squares and Principal Component Regression"
arch=('any')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL2')
depends=('r' )

optdepends=('r-rmpi')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('04e02e8e46d983c5ed53c1f952b329df')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

