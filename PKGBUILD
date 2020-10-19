# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Alex Branham <branham@utexas.edu>

_cranname=recipes
_cranver=0.1.14
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Preprocessing Tools to Create Design Matrices"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL2)
depends=('r>=3.1' r-dplyr r-generics r-glue r-gower r-ipred r-lubridate r-magrittr 'r-purrr>=0.2.3' 'r-rlang>=0.4.0' r-tibble 'r-tidyr>=1.0.0' 'r-tidyselect>=0.2.5' r-timedate r-withr)
optdepends=(r-covr r-ddalpha r-dimred r-fastica r-ggplot2 r-igraph r-kernlab r-knitr r-modeldata r-rann r-rcpproll r-rmarkdown r-rpart r-rsample r-rspectra r-testthat r-xml2)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('9f55acbb41d964d912938b9c1616e5c5c1d6c4023278e82a2bb48623153aa647')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
