# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
pkgname=soapysdr
pkgver=0.6.1
_gitver=soapy-sdr-$pkgver
pkgrel=1
pkgdesc="Vendor and platform neutral SDR support library"
arch=(any)
url="https://github.com/pothosware/SoapySDR"
license=('custom:Boost')
makedepends=('cmake')
optdependes=(
  'swig: bindings'
  'python: python bindings'
  'doxygen: documentation'
)
provides=('soapysdr')
conflicts=('soapysdr')
source=(
  "https://github.com/pothosware/SoapySDR/archive/$_gver.tar.gz"
  'git_revision.patch'
)
sha256sums=(
  '2ecf8e43518dfb24bd172923adf6ce25a6d3e39de3a8aadf26c890f60dd1e9f7'
  '93a2a6d031fb50156ed7de00658fe082ef802ad7900e5336f37b897588fe869c'
)

_srcdir=SoapySDR-$_gitver

prepare() {
  sed -i "s/SOURCE_FOLDER/$_srcdir/g" git_revision.patch
  patch -p0 < git_revision.patch
}

build() {
  mkdir -p "$srcdir"/$_srcdir/build
  cd "$srcdir"/$_srcdir/build

  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release

  make
}

package() {
  cd "$srcdir"/$_srcdir/build

  make DESTDIR="$pkgdir" install

  install -dm 644 "$pkgdir"/usr/share/licenses/$pkgname
  install -Dm 644 "$srcdir"/$_srcdir/LICENSE_1_0.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt
}
