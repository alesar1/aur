# Contributor: Kibouo <csonka.mihaly@hotmail.com>
# Contributor: Ward Segers <w@rdsegers.be>
# Contributor: Alex Branham <branham@utexas.edu>
_cranname=curl
_cranver=3.3
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-curl
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A Modern and Flexible Web Client for R"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('MIT')
depends=('r' )

optdepends=('curl' 'r-spelling' 'r-testthat' 'r-knitr' 'r-jsonlite' 'r-rmarkdown' 'r-magrittr' 'r-httpuv' 'r-webutils')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('5dc0ba314900d339583a73bec13979e7')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

