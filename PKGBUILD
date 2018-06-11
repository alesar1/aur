# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=zoo
_cranver=1.8-1
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-zoo
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="S3 Infrastructure for Regular and Irregular Time Series (Zs Ordered Observations)"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL')
depends=('r' )

optdepends=('r-coda' 'r-chron' 'r-daag' 'r-fts' 'r-ggplot2' 'r-mondate' 'r-scales' 'r-strucchange' 'r-timedate' 'r-timeseries' 'r-tis' 'r-tseries' 'r-xts')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('bf8789b3a448b5bed39e54e027ee7c6a')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

