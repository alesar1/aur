# $Id$
# Maintainer: Sergej Pupykin <arch+pub@sergej.pp.ru>
# Maintainer: Ido Rosen <ido@kernel.org>
# Contributor: Ross Whitfield <whitfieldre@ornl.gov>
# Contributor: Mateusz Paluszkiewcz <aifam96 at gmail dot com>
# Contributor: Christopher Reimer <vdr4arch at creimer dot net>

pkgname=mingw-w64-poco
pkgver=1.9.0
_pkgver=${pkgver/_/}
pkgrel=1
pkgdesc="C++ class libraries for network-centric, portable applications, complete edition with debug libraries (mingw-w64)"
arch=('any')
url="http://www.pocoproject.org/"
license=('custom:boost')
depends=('mingw-w64-libmariadbclient' 'mingw-w64-openssl' 'mingw-w64-unixodbc')
makedepends=('mingw-w64-cmake')
source=("https://pocoproject.org/releases/poco-${_pkgver%p?}/poco-${_pkgver}-all.tar.bz2")
sha256sums=('b6e33898588e74337efec4e8d8b9b277bb653b08318a79215f9aa4a3ff1ea9fd')
options=(!strip staticlibs !buildflags)

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/poco-${_pkgver}-all"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DCMAKE_INSTALL_PREFIX=/usr/${_arch} \
      -DCMAKE_BUILD_TYPE=Release \
      -DENABLE_PAGECOMPILER=FALSE \
      -DENABLE_PAGECOMPILER_FILE2PAGE=FALSE \
      ..
    make
    popd
  done
}

package() {
  cd "${srcdir}/poco-${_pkgver}-all"
  install -Dm644 'LICENSE' "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
  for _arch in ${_architectures}; do
    cd "${srcdir}/poco-${_pkgver}-all/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
