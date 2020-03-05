# Maintainer: frichtlm <frichtlm@gmail.com>
# Contributor: wagnerflo <florian@wagner-flo.net>
_cranname=ggplot2
_cranver=3.3.0
pkgname=r-$_cranname
pkgver=${_cranver}
pkgrel=1
pkgdesc="Create Elegant Data Visualisations Using the Grammar of Graphics"
url="https://cran.r-project.org/package=ggplot2"
arch=('i686' 'x86_64')
license=('GPL-2')
depends=('r>=3.2' 'r-digest' 'r-glue' 'r-gtable>=0.1.1' 'r-isoband' 'r-rlang>=0.3.0' 'r-scales>=0.5.0' 'r-tibble' 'r-withr>=2.0.0')
optdepends=('r-covr' 'r-dplyr' 'r-ggplot2movies' 'r-hexbin' 'r-hmisc' 'r-knitr' 'r-lattice' 'r-mapproj' 'r-maps' 'r-maptools' 'r-multcomp' 'r-munsell' 'r-nlme' 'r-profvis' 'r-quantreg' 'r-rgeos' 'r-rmarkdown' 'r-rpart' 'r-sf' 'r-svglite' 'r-testthat' 'r-vdiffr')
source=("http://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
md5sums=('25941cbd03f34549c60c7e40780bef0')

package() {
    mkdir -p ${pkgdir}/usr/lib/R/library
    cd ${srcdir}
    R CMD INSTALL ${_cranname} -l ${pkgdir}/usr/lib/R/library
}
