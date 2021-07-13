# Maintainer: anzi2001 <anzi2001 at gmail dot com> 
# Contributor: haha662 <haha662 at outlook dot com>
# Contributor: Kibouo <csonka.mihaly@hotmail.com>
# Contributor: Alex Branham <branham@utexas.edu>

_cranname=tinytex
_cranver=0.32
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Helper Functions to Install and Maintain 'TeX Live', and Compile 'LaTeX' Documents"
arch=("any")
url="https://cran.r-project.org/package=${_cranname}"
license=("MIT" "custom")
depends=("r" "r-xfun>=0.19")
# makedepends=()
optdepends=("r-textit" "r-rstudioapi")
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz" "https://cran.r-project.org/web/packages/tinytex/LICENSE")
sha256sums=('70fa28195ae6c8b8d43790205b49745c5a062aab78e64cec39bfbe5ed604c29f'
            'f58c2f5b0f10b231d9cea9bc4ea0d849cd4279a21d03257be8dc9fd9452fad37')

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
