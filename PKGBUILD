# Maintainer: Alex Branham <branham@utexas.edu>
_cranname=knitr
_cranver=1.20
_pkgtar=${_cranname}_${_cranver}.tar.gz
pkgname=r-knitr
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A General-Purpose Package for Dynamic Report Generation in R"
arch=('any')
url="https://cran.r-project.org/package=${_cranname}"
license=('GPL')
depends=('r' 'r-evaluate>=0.10' 'r-highr' 'r-markdown' 'r-stringr>=0.6' 'r-yaml')

optdepends=('pandoc' 'r-testit' 'r-digest' 'r-rgl' 'r-rmarkdown' 'r-htmlwidgets' 'r-webshot' 'r-tikzdevice' 'r-tinytex' 'r-xfun' 'r-reticulate' 'r-juliacall' 'r-png' 'r-jpeg' 'r-xml2' 'r-httr' 'r-dbi' 'r-showtext' 'r-tibble')

source=("https://cran.r-project.org/src/contrib/${_pkgtar}")
md5sums=('fa91b1c0f2778c685ee8758e5b3c02b4')

build(){
    R CMD INSTALL ${_pkgtar} -l $srcdir
}
package() {
    install -d "$pkgdir/usr/lib/R/library"
    cp -r "$srcdir/$_cranname" "$pkgdir/usr/lib/R/library"
}

