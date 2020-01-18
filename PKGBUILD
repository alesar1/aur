# $Id$
# Maintainer: Martchus <martchus@gmx.net>

_pkg_arch=armv7a-eabi
_android_arch=armeabi-v7a
_android_platform_arch=arch-arm
_pkgname=openssl
_ver=1.1.1d

pkgname=android-$_pkg_arch-$_pkgname
# use a pacman compatible version scheme
pkgver=${_ver/[a-z]/.${_ver//[0-9.]/}}
pkgrel=2
pkgdesc="The Open Source toolkit for Secure Sockets Layer and Transport Layer Security (Android, $_pkg_arch)"
arch=('any')
url='https://www.openssl.org'
license=('custom:BSD')
options=('!strip' '!buildflags' 'staticlibs' '!emptydirs')
depends=('android-sdk' 'android-ndk')
makedepends=('android-environment' 'android-sdk-build-tools')
conflicts=("android-$_pkgname-$_android_arch")
replaces=("android-$_pkgname-$_android_arch")
source=("https://www.openssl.org/source/${_pkgname}-${_ver}.tar.gz"{,.asc})
sha256sums=('1e3a91bc1f9dfce01af26026f856e064eab4c8ee0a8f457b5ae30b40b8b711f2'
            'SKIP')
validpgpkeys=('8657ABB260F056B1E5190839D9C4D26D0E604491'
              '7953AC1FBC3DC8B3B292393ED5E9E43F7DF9EE8C')

build() {
  cd "$srcdir/$_pkgname-$_ver"
  source android-env ${_pkg_arch}
  export PATH="$ANDROID_TOOLCHAIN/bin:$PATH"

  # don't use -mandroid flag (Clang as provided by the NDK does not like it)
  sed -i -e 's/-mandroid//' Configurations/15-android.conf

  ./Configure \
    --prefix="${ANDROID_PREFIX}" \
    --openssldir="${ANDROID_PREFIX}" \
    -D__ANDROID_API__="${ANDROID_MINIMUM_PLATFORM}" \
    -Wl,--no-allow-shlib-undefined \
    -Wl,--no-undefined \
    no-stdio \
    no-ui \
    threads \
    shared \
    android-${_android_platform_arch##arch-}

  # get rid of debug printing so the library doesn't depend on stdio (no-stdio and no-ui are not entirely sufficient)
  sed -i -e 's/\#define TEST_ENG_OPENSSL_RC4_P_INIT//' crypto/engine/eng_openssl.c

  # build only libraries
  # note: Setting SHLIB_EXT in accordance with qtbase/src/network/ssl/qsslsocket_openssl_symbols.cpp to avoid loading
  #       system library.
  make depend
  make CALC_VERSIONS="SHLIB_COMPAT=; SHLIB_SOVER=" SHLIB_VERSION_NUMBER= SHLIB_EXT=_1_1.so build_libs
}

package() {
  cd "$srcdir/$_pkgname-$_ver"
  source android-env ${_pkg_arch}
  export PATH="$ANDROID_TOOLCHAIN:$PATH"

  # install header files, libraries and license
  for lib in libcrypto{.a,_1_1.so} libssl{.a,_1_1.so}; do
    install -D -m0644 $lib "$pkgdir/${ANDROID_PREFIX_LIB}/$lib"
  done
  for pc in libcrypto.pc libssl.pc openssl.pc; do
    install -D -m0644 $pc "$pkgdir/${ANDROID_PREFIX_LIB}/pkgconfig/$pc"
  done
  mkdir -p "$pkgdir/${ANDROID_PREFIX_INCLUDE}"
  cp -r include/openssl "$pkgdir/${ANDROID_PREFIX_INCLUDE}"
  install -D -m644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE

  # strip binaries
  find "$pkgdir" -name 'lib*.so' -type f -exec "$ANDROID_STRIP" --strip-unneeded {} \;
  find "$pkgdir" -name 'lib*.a' -type f -exec "$ANDROID_STRIP" -g {} \;
}
