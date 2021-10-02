# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: frichtlm <frichtlm@gmail.com>

_cranname=readr
_cranver=2.0.2
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Read Rectangular Text Data"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL2 GPL3)
depends=('r>=3.1' r-cli r-clipr r-crayon 'r-hms>=0.4.1' r-rlang r-r6 r-tibble 'r-vroom>=1.5.4' 'r-lifecycle>=0.2.0' r-cpp11 'r-tzdb>=0.1.1')
optdepends=(r-covr r-curl r-dplyr r-knitr r-rmarkdown r-spelling r-stringi r-testthat r-withr r-xml2)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('98b05ed751dda2bcf7a29d070ce3d3e8475e0138a3e3ec68941dc45218db7615')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
