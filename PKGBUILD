# system requirements: 1. C++11, 2. a graphic driver or a CPU SDK. 3. ICDloader For Windows user, an ICD loader is required atC:/windows/system32/OpenCL.dll (Usually it is installed by thegraphic driver). For Linux user (Except mac):ocl-icd-opencl-dev package is required. For Mac user, no actionis needed for the system has installed the dependency. 4. GNUmake
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>

_pkgname=gpuMagic
_pkgver=1.14.0
pkgname=r-${_pkgname,,}
pkgver=1.14.0
pkgrel=1
pkgdesc='An openCL compiler with the capacity to compile R functions and run the code on GPU'
arch=('x86_64')
url="https://bioconductor.org/packages/${_pkgname}"
license=('GPL')
depends=(
  r
  r-biocgenerics
  r-deriv
  r-desctools
  r-digest
  r-pryr
  r-rcpp
  r-stringr
  ocl-icd
)
optdepends=(
  r-biocstyle
  r-knitr
  r-rmarkdown
  r-testthat
)
makdepends=(
  make
)
source=("https://bioconductor.org/packages/release/bioc/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('3d61e01f12bd14f9f8fce0397555ffde8e954d2c2182ac59f6081f4dd9617a0a')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
