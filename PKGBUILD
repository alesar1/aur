# Maintainer: drakkan <nicola.murino at gmail dot com>
pkgname=mingw-w64-unifdef
pkgver=2.11.23.1cca442
pkgrel=1
pkgdesc="Remove #ifdef'ed lines (mingw-w64)"
arch=('any')
url="http://dotat.at/prog/unifdef/"
license=('GPL')
makedepends=('mingw-w64-gcc')
depends=('mingw-w64-crt')
options=('!strip' '!buildflags' 'staticlibs')
source=("https://dotat.at/prog/unifdef/unifdef-$pkgver.tar.xz")
sha256sums=('a14bcc707cd6c145cca6a0f66a86afb7489c642a4ecc54d61137bb8c6aaf11e6')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  export CFLAGS="-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions --param=ssp-buffer-size=4"
  export CXXFLAGS=${CFLAGS}
	for _arch in ${_architectures}; do
    [[ -d "build-${_arch}" ]] && rm -rf "build-${_arch}"
    cp -rf "$srcdir/unifdef-${pkgver}" "${srcdir}/build-${_arch}"
    export CC=${_arch}-gcc

    pushd build-${_arch}	
    make -f win32/Makefile.mingw
    popd	
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/build-${_arch}"
    install -Dm755 unifdef.exe "${pkgdir}/usr/${_arch}/bin/unifdef.exe"
    ${_arch}-strip --strip-all "$pkgdir"/usr/${_arch}/bin/*.exe
  done
}

# vim: ts=2 sw=2 et:
