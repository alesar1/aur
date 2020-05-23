# Maintainer: haha662 <haha662 at outlook dot com>

_cranname=blogdown
_cranver=0.19
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Create Blogs and Websites with R Markdown"
arch=("any")
url="https://cran.r-project.org/package=${_cranname}"
license=("GPL3")
depends=("r" "hugo" "pandoc" "r-rmarkdown>=1.16" "r-bookdown>=0.14" "r-knitr>=1.25" "r-htmltools" "r-yaml>=2.1.19" "r-httpuv>=1.4.0" "r-xfun>=0.10" "r-servr>=0.15" )
# makedepends=()
optdepends=("r-testit" "r-shiny" "r-miniui" "r-stringr" "r-rstudioapi" "r-processx" "r-later" "r-whoami" )
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=("db806a42717384304b76b11e3aefa19060dc17767e33d71d33e985089bf36296")

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
