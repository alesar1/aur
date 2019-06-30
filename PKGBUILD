_pkgname=kdoctools
pkgname=mingw-w64-$_pkgname
pkgver=5.45.0
pkgrel=1
arch=(any)
pkgdesc="Documentation generation from docbook (mingw-w64)"
license=("LGPL")
depends=(mingw-w64-karchive mingw-w64-docbook-wrapper docbook-xsl "docbook-xml>=4.5")
groups=(mingw-w64-kf5)
makedepends=(mingw-w64-extra-cmake-modules perl-uri mingw-w64-ki18n mingw-w64-qt5-tools extra-cmake-modules qt5-tools)
options=(staticlibs !strip !buildflags)
url="https://community.kde.org/Frameworks"
source=("http://download.kde.org/stable/frameworks/${pkgver%.*}/$_pkgname-${pkgver}.tar.xz"{,.sig})
sha256sums=('a5322f7d09aa643d60738f3b24bda2d3c129cc9aa37856acf5bedba3929d4b2c'
            'SKIP')
validpgpkeys=(53E6B47B45CEA3E0D5B7457758D0EE648A48B3BB) # David Faure <faure@kde.org>

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd $_pkgname-$pkgver

  # build native helper
  mkdir "native" && pushd "native"
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF \
    -DCMAKE_INSTALL_DATAROOTDIR=share \
    -DMEINPROC_NO_KARCHIVE=ON \
    ..
  make docbookl10nhelper meinproc5 checkXML5
  helperbin="$(pwd)/bin"
  popd
  
  for _arch in ${_architectures}; do
    unset LDFLAGS
    mkdir "build-${_arch}" && pushd "build-${_arch}"
    ${_arch}-cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
      -DBUILD_TESTING=OFF \
      -DCMAKE_INSTALL_DATAROOTDIR=share \
      -DDOCBOOKL10NHELPER_EXECUTABLE:PATH="${helperbin}/docbookl10nhelper" \
      -DMEINPROC5_EXECUTABLE:PATH="${helperbin}/meinproc5" \
      -DCHECKXML5_EXECUTABLE:PATH="${helperbin}/checkxml5" \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/${pkgname#mingw-w64-}-$pkgver/build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -rf "$pkgdir/usr/${_arch}/share"
  done
}
