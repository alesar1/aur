# Maintainer: Butui Hu <hot123tea123@gmail.com>

_name=imagecodecs
pkgname=python-imagecodecs
pkgver=2020.12.24
pkgrel=1
pkgdesc='Image transformation, compression, and decompression codecs'
arch=('x86_64')
url='https://github.com/cgohlke/imagecodecs'
license=('BSD')
depends=(
  blosc
  brotli
  brunsli
  charls
  jxrlib
  lcms2
  libaec
  libdeflate
  libavif
  libjpeg
  libmng
  libpng
  libtiff
  libwebp
  openjpeg2
  python-imread
  python-numpy
  snappy
  zfp
  zopfli
)
makedepends=(python-setuptools cython)
source=("${_name}-${pkgver}.tar.gz::https://github.com/cgohlke/imagecodecs/archive/v${pkgver}.tar.gz")
sha256sums=('73c36ccf7f7f68472d9273c72e4c63e616e27afea0f6f9ff871a8ad9a3c70bcc')

build() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

# vim:ts=2:sw=2:et:
