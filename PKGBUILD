# Maintainer: haha662 <haha662 at outlook dot com>

_cranname=bookdown
_cranver=0.19
pkgname=r-${_cranname,,}
pkgver=${_cranver//[:-]/.}
pkgrel=1
pkgdesc="Authoring Books and Technical Documents with R Markdown"
arch=("any")
url="https://cran.r-project.org/package=${_cranname}"
license=("GPL3")
depends=("r" "pandoc>=1.17.2" "r-htmltools>=0.3.6" "r-knitr>=1.22" "r-rmarkdown>=2.0" "r-xfun>=0.6" "r-tinytex>=0.12")
# makedepends=()
optdepends=("r-htmlwidgets" "r-rstudioapi" "r-miniui" "r-rsconnect>=0.4.3" "r-servr>=0.13" "r-shiny" "r-testit>=0.9" "r-tufte" "r-webshot" )
source=("https://cran.r-project.org/src/contrib/${_cranname}_${_cranver}.tar.gz")
sha256sums=("98eea2e64b91c0dd7c263e31d3d5823bad2666a8754cff07153226fe3d03f48c")

build() {
  cd "${srcdir}"

  R CMD INSTALL ${_cranname}_${_cranver}.tar.gz -l ${srcdir}
}

package() {
  cd "${srcdir}"

  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_cranname}" "${pkgdir}/usr/lib/R/library"
}
