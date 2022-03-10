# Maintainer: Łukasz Pożarlik <lpozarlik@gmail.com>
# Contributor: Vincent Hourdin <vh|at|free-astro=DOT=vinvin.tf>

pkgname=siril
pkgver='1.0.0'
pkgrel=2
pkgdesc="An astronomical image processing software for Linux. (IRIS clone)"
arch=('x86_64')
license=('GPLv3')
depends=('gtk3' 'json-glib' 'fftw' 'cfitsio' 'gsl' 'libconfig' 'opencv' 'exiv2' 'gnuplot')
makedepends=('meson' 'cmake' 'ninja')   
url="https://www.siril.org/"
optdepends=('libpng: PNG import'
            'libjpeg: JPEG import and export'
            'libtiff: TIFF import and export'
            'libraw: DSLR RAW images import'
            'ffms2: films native support as image sequences and import'
            'libcurl-gnutls: check for updates'
            'gnuplot: photometry graphs creation')

source=("https://free-astro.org/download/siril-${pkgver}.tar.bz2")
sha256sums=('22fec7b88b94c40c4180e6637fef8a7cd8ea95ccaf23323e403bf2296ec274bc')

build() {
  cd "$srcdir"
  meson --buildtype release _build
  ninja -C _build
}


package() {  
  cd "$srcdir"
  meson install -C _build --destdir "$pkgdir"
  # Move man to /usr/share/ as default confilicts with filesystem package 
  mkdir -p "$pkgdir"/usr/share/ 
  mv "$pkgdir"/usr/local/share/man/ "$pkgdir"/usr/share/
}
