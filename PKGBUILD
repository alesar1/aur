# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=metR
_cranver=0.4.0
pkgname=r-metr
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Tools for Easier Analysis of Meteorological Fields"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL3')
depends=('r' 'r-checkmate' 'r-curl' 'r-data.table' 'r-digest' 'r-dplyr' 'r-fields' 'r-formula' 'r-formula.tools' 'r-ggplot2>=3.0.0' 'r-gridextra' 'r-gtable' 'r-lubridate' 'r-maps' 'r-maptools' 'r-memoise' 'r-plyr' 'r-rcurl' 'r-scales' 'r-sp' 'r-stringr' 'r-purrr')
optdepends=('r-covr' 'r-irlba' 'r-knitr' 'r-ncdf4' 'r-pkgdown' 'r-reshape2' 'r-rmarkdown' 'r-testthat' 'r-udunits2' 'r-vdiffr' 'r-viridis')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('9b2f4b69fca2c1e18473574824878657')

build(){
    cd "${srcdir}"

    R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l $srcdir
}

package() {
    cd "${srcdir}"

    install -dm0755 "$pkgdir/usr/lib/R/library"
    cp -a --no-preserve=ownership "$_cranname" "$pkgdir/usr/lib/R/library"
}


