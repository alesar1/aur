# Maintainer: Pekka Ristola <pekkarr [at] protonmail [dot] com>
# Contributor: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Clint Valentine <valentine.clint@gmail.com>
# Contributor: wagnerflo <florian@wagner-flo.net>

_cranname=lubridate
_cranver=1.9.0
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Make Dealing with Dates a Little Easier"
arch=(i686 x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL)
depends=(r-timechange r-generics)
checkdepends=(r-testthat)
optdepends=(
    r-covr
    r-knitr
    r-testthat
    r-vctrs
    r-rmarkdown
)
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('b936041f8a71894ef930cfff61b45833e0dd148b5b16697f4f541d25b31a903a')

prepare() {
  cd "${_cranname}"

  # skip test that requires a French locale
  sed -i '/"parsing months with dots works in French linux locale"/a skip("Requires a French locale")' \
      tests/testthat/test-parsers.R
}

build() {
  mkdir -p build
  R CMD INSTALL "${_cranname}" -l "${srcdir}/build"
}

check() {
  cd "${_cranname}/tests"
  R_LIBS="${srcdir}/build" NOT_CRAN=true Rscript --vanilla testthat.R
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "build/${_cranname}" "${pkgdir}/usr/lib/R/library"
}

