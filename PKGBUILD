# Maintainer: Martchus < martchus at gmx dot net >
# Contributor: pingplug < aur at pingplug dot me >
# Contributor: Schala Zeal < schalaalexiazeal at gmail dot com >
# Contributor: ant32 < antreimer at gmail dot com >
# Contributor: Filip Brcic < brcha at gna dot org >

_pkgver=1.1.1m
_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

pkgname=mingw-w64-openssl-1.1
pkgver=${_pkgver/[a-z]/.${_pkgver//[0-9.]/}}
pkgrel=1
pkgdesc="The Open Source toolkit for Secure Sockets Layer and Transport Layer Security (mingw-w64)"
arch=('any')
url="https://www.openssl.org"
license=('BSD')
depends=('mingw-w64-zlib')
makedepends=('mingw-w64-gcc'
             'mingw-w64-environment'
             'perl')
conflicts=('mingw-w64-openssl<3')
options=('!strip' 'staticlibs' '!buildflags' '!lto')
source=("https://www.openssl.org/source/openssl-${_pkgver}.tar.gz"{,.asc})
sha256sums=('f89199be8b23ca45fc7cb9f1d8d3ee67312318286ad030f5316aca6462db6c96'
            'SKIP')
validpgpkeys=('7953AC1FBC3DC8B3B292393ED5E9E43F7DF9EE8C' # Richard Levitte <levitte@openssl.org>
              '8657ABB260F056B1E5190839D9C4D26D0E604491' # Matt Caswell <matt@openssl.org>
)

prepare() {
  cd openssl-${_pkgver}
}

build() {
  cd "${srcdir}/openssl-${_pkgver}"
  for _arch in ${_architectures}; do
    source mingw-env ${_arch}
    # conflict with --cross-compile-prefix
    unset CC
    unset CXX
    mkdir -p "${srcdir}/build-${_arch}" && cp -a "${srcdir}/openssl-${_pkgver}/"* "${srcdir}/build-${_arch}" && cd "${srcdir}/build-${_arch}"
    _mingw=mingw
    [ "${_arch}" = 'x86_64-w64-mingw32' ] && _mingw=mingw64
    ./Configure \
      --prefix=/usr/${_arch} \
      --cross-compile-prefix=${_arch}- \
      --libdir=lib/openssl-1.1 \
      -DOPENSSL_NO_CAPIENG \
      ${_mingw} \
      threads \
      shared \
      no-ssl3-method \
      zlib-dynamic \
      "${CFLAGS}"
    make
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/build-${_arch}"
    make -j1 DESTDIR="${pkgdir}" install_sw

    # Move some files around
    install -m755 -d "$pkgdir/usr/${_arch}/include/openssl-1.1"
    mv "$pkgdir/usr/${_arch}/include/openssl" "$pkgdir/usr/${_arch}/include/openssl-1.1/"
    mv "$pkgdir/usr/${_arch}/bin/openssl.exe" "$pkgdir/usr/${_arch}/bin/openssl-1.1.exe"
    rm "$pkgdir/usr/${_arch}/bin/c_rehash"
    install -m644 ms/applink.c "${pkgdir}/usr/${_arch}/include/openssl-1.1/"

    # Update includedir in .pc files
    sed -e 's|/include$|/include/openssl-1.1|' -i "$pkgdir"/usr/${_arch}/lib/openssl-1.1/pkgconfig/*.pc

    find "${pkgdir}/usr/${_arch}" -name '*.exe' -exec ${_arch}-strip {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "${pkgdir}/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
  done
}

# vim:set ts=2 sw=2 et:
