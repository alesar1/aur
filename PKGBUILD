# Maintainer: René Wagner <rwagner at rw-net dot de>
pkgname=art-rawconverter
pkgver=1.3
pkgrel=1
pkgdesc="Raw Converter forked from RawTherapee including blackfoxx-theme"
arch=('i686' 'x86_64')
url="https://bitbucket.org/agriggio/art/wiki/Home"
license=('GPL3')
depends=('gperftools' 'lensfun' 'exiv2' 'fftw' 'gtk3' 'glibmm' 'gtkmm3' 'lcms2' 'libcanberra' 'libiptcdata' 'desktop-file-utils') 
makedepends=('pkgconf' 'cmake' 'git' 'gcc' 'hicolor-icon-theme' 'fakeroot')
conflicts=('art-rawconverter-git')
source=("${pkgname}_${pkgver}::git+https://bitbucket.org/agriggio/art.git#tag=${pkgver}" "bft_20.zip::https://discuss.pixls.us/uploads/short-url/fG7iCaIWBWBem30O67V15EfO521.zip" "cmakelists.patch")
sha256sums=('SKIP' '7381c57e48b1437bec6b775029370f99f6fc14eced53678972e9f0b7e02a4346' 'ae3646842985338b700b68987879c3eb8d4483c895e58134bf512fe3df33c39b')

build() {
  cp "$srcdir/blackfoxx-GTK3-20_.css" "$srcdir/${pkgname}_${pkgver}/rtdata/themes"

  mkdir -p "$srcdir/${pkgname}_${pkgver}_build"
  cd "$srcdir/${pkgname}_${pkgver}_build"

  cmake "../${pkgname}_${pkgver}" \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DPROC_TARGET_NUMBER="2" \
    -DWITH_LTO="ON"

  NPROC=$(getconf _NPROCESSORS_ONLN)
  make -j${NPROC} 
}

prepare() {
  cd "$srcdir/${pkgname}_${pkgver}"
  patch --forward --strip=1 --input="${srcdir}/cmakelists.patch"
}

package() {
  cd "$srcdir/${pkgname}_${pkgver}_build"
  make DESTDIR="$pkgdir/" install
}
