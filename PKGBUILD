# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=DEoptimR
_cranver=1.0-8
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-deoptimr
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Differential Evolution Optimization in Pure R"
arch=('any')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL')
depends=('r' )



source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('c85836a504fbe4166e3c8eba0efe705d')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

