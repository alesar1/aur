# Maintainer: Robert Greener <me@r0bert.dev>
_cranname=TraMineRextras
_cranver=0.6.3
_updatedate=2022-06-08
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="TraMineR Extension"
arch=(x86_64)
url="https://cran.r-project.org/package=${_cranname}"
license=(GPL)
depends=("r>=3.5.0" "r-traminer>=2.2.1")
makedepends=()
optdepends=(
	r-gtools
	r-cluster
	r-rcolorbrewer
	r-colorspace
	r-survival
	r-doparallel
	r-foreach
)
source=("https://cran.microsoft.com/snapshot/${_updatedate}/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=('ac938bb48dcf0bec54ba5a7ac7150e7bfa781da8ceec7e81cb582548044c88d3')

build() {
  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"

  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}

