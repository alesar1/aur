# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=rgl
_cranver=0.100.30
pkgname=r-${_cranname}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="3D Visualization Using OpenGL"
arch=('i686' 'x86_64')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL3')
depends=('r' 'r-htmlwidgets' 'r-htmltools' 'r-knitr' 'r-jsonlite' 'r-shiny' 'r-magrittr' 'r-crosstalk' 'r-manipulatewidget' 'mesa' 'glu')
optdepends=('zlib' 'libpng' 'freetype2' 'pandoc')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('6eaccdfff3daf586ce0d0d991f2d3270')

build(){
    cd "${srcdir}"

    R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l $srcdir
}

package() {
    cd "${srcdir}"

    install -dm0755 "$pkgdir/usr/lib/R/library"
    cp -a --no-preserve=ownership "$_cranname" "$pkgdir/usr/lib/R/library"
}

