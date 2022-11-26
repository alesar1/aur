# system requirements: OpenGL, GLU Library, XQuartz (on OSX), zlib(optional), libpng (>=1.2.9, optional), FreeType (optional),pandoc (>=1.14, needed for vignettes; if not present, markdownpackage will be used)
# Maintainer: Guoyi Zhang <guoyizhang at malacology dot net>
# Contributor: Robert Greener <me@r0bert.dev>
# Contributor: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com

_pkgname=rgl
_pkgver=0.110.2
pkgname=r-${_pkgname,,}
pkgver=0.110.2
pkgrel=5
pkgdesc='3D Visualization Using OpenGL'
arch=('x86_64')
url="https://cran.r-project.org/package=${_pkgname}"
license=('GPL')
depends=(
  r
  r-base64enc
  r-htmltools
  r-htmlwidgets
  r-jsonlite
  r-knitr
  r-magrittr
  r-mime
  r-r6
  mesa
  glu
  pandoc
)
optdepends=(
  freetype2
  libpng
  r-alphashape3d
  r-chromote
  r-crosstalk
  r-deldir
  r-downlit
  r-extrafont
  r-interp
  r-js
  r-lattice
  r-magick
  r-manipulatewidget
  r-markdown
  r-mass
  r-misc3d
  r-orientlib
  r-pkgdown
  r-plotrix
  r-rmarkdown
  r-shiny
  r-tcltk
  r-testthat
  r-tripack
  r-v8
  r-waldo
  r-webshot2
)
source=("https://cran.r-project.org/src/contrib/${_pkgname}_${_pkgver}.tar.gz")
sha256sums=('da1118c1990ae161a5787960fb22009601d2ee7d39ca9c97c31c70589bce346d')

build() {
  R CMD INSTALL ${_pkgname}_${_pkgver}.tar.gz -l "${srcdir}"
}

package() {
  install -dm0755 "${pkgdir}/usr/lib/R/library"
  cp -a --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/lib/R/library"
}
# vim:set ts=2 sw=2 et:
