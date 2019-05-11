# Contributor: Ward Segers <w@rdsegers.be>
# Contributor: Alex Branham <branham@utexas.edu>
_cranname=rgl
_cranver=0.99.16
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-rgl
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="3D Visualization Using OpenGL"
arch=('x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL')
depends=('r' 'r-htmlwidgets' 'r-htmltools' 'r-knitr' 'r-jsonlite>=0.9.20' 'r-shiny' 'r-magrittr' 'r-crosstalk' 'r-manipulatewidget>=0.9.0')

optdepends=('pandoc' 'r-rmarkdown' 'r-deldir' 'r-orientlib' 'r-misc3d' 'r-rstudioapi' 'r-magick')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('85b15452c982b11c3e001121e68cbf88')
replaces=('r-cran-rgl')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

