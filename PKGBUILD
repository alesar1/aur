# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_cranname=cpp11
_cranver=0.2.6
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="A C++11 Interface for R's C Interface"
arch=(any)
url="https://cran.r-project.org/package=${_cranname}"
license=(MIT)
depends=(r)
optdepends=(r-bench r-brio r-callr r-cli r-covr r-decor r-desc r-ggplot2 r-glue r-knitr r-lobstr r-mockery r-progress r-rmarkdown r-scales r-testthat r-tibble r-vctrs r-withr)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('ff09b3fb254db73c34e2025754d2328c65d316e3872c0b7d4f74a3938e461185')

build() {
  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

