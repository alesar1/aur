# Maintainer mattf <matheusfillipeag@gmail.com>

pkgname=curl-impersonate-chrome
pkgver=r59.979750a
_gitname=curl-impersonate
pkgrel=1
pkgdesc="A special compilation of curl that makes it impersonate Chrome"
url="https://github.com/lwthiker/curl-impersonate"
license=('MIT')
arch=('x86_64')
md5sums=('SKIP')
makedepends=(git gcc cmake go ninja unzip zlib autoconf automake libtool patch)
depends=(brotli nss)
provides=(curl-impersonate-chrome)

# WORKAROUND The default /etc/makepkg.conf shipped by arch comes with -Werror=format which can't be 
# overriden otherwise and wont let boringssl compile
options=("!buildflags")

BORING_SSL_COMMIT=3a667d10e94186fd503966f5638e134fe9fb4080
BORING_SSL_URL="https://github.com/google/boringssl/archive/${BORING_SSL_COMMIT}.zip"
BORING_SSL_DIR="boringssl-${BORING_SSL_COMMIT}"
NGHTTP2_VERSION=nghttp2-1.46.0
NGHTTP2_URL=https://github.com/nghttp2/nghttp2/releases/download/v1.46.0/nghttp2-1.46.0.tar.bz2
CURL_VERSION=curl-7.81.0
CURL_URL="https://curl.se/download/${CURL_VERSION}.tar.xz"

source=(
  "git+$url"
  "boringssl.zip::${BORING_SSL_URL}"
  "${NGHTTP2_VERSION}.tar.bz2::${NGHTTP2_URL}"
  "${CURL_VERSION}.tar.xz::${CURL_URL}"
)
md5sums=('SKIP'
         'afaf515861012f435653fab96cae2a5f'
         'de2aaa48ae0bf9713da3a9bfc3f1629f'
         '41954fa09f879fccb57d88be23fe8606')

browser_dir=${_gitname}/chrome


pkgver() {
  cd ${_gitname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

patch_boringssl () {
  cd ${srcdir}
  cp ${browser_dir}/patches/boringssl-*.patch ${BORING_SSL_DIR}
  cd ${BORING_SSL_DIR}
  for p in $(ls boringssl-*.patch); do patch -p1 < $p; done
}

build_boringssl () {
  cd ${srcdir}
  cd ${BORING_SSL_DIR}
  mkdir -p build 
  cd build
  cmake -DCMAKE_POSITION_INDEPENDENT_CODE=on -GNinja ..
  ninja
  cd ${srcdir}
  mkdir -p ${BORING_SSL_DIR}/build/lib
  ln -sf ../crypto/libcrypto.a ${BORING_SSL_DIR}/build/lib/libcrypto.a
  ln -sf ../ssl/libssl.a ${BORING_SSL_DIR}/build/lib/libssl.a
  cp -R ${BORING_SSL_DIR}/include ${BORING_SSL_DIR}/build
}

patch_nghttp2 () {
  cd ${srcdir}
  cp ${browser_dir}/patches/libnghttp2-*.patch ${NGHTTP2_VERSION}/
  cd ${NGHTTP2_VERSION}
  for p in $(ls libnghttp2-*.patch); do patch -p1 < $p; done
  autoreconf -i 
  automake 
  autoconf
}

build_nghttp2 () {
  cd ${srcdir}
  cd ${NGHTTP2_VERSION}
  ./configure --with-pic --prefix ${srcdir}/${NGHTTP2_VERSION}/build
  make
  make install
}

patch_curl () {
  cd ${srcdir}
  cp ${browser_dir}/patches/curl-*.patch ${CURL_VERSION}/
  cd ${CURL_VERSION}
  for p in $(ls curl-*.patch); do patch -p1 < $p; done
  autoreconf -fi
}

build_curl () {
  cd ${srcdir}
  cd ${CURL_VERSION}
  ./configure --with-openssl=${srcdir}/${BORING_SSL_DIR}/build --enable-static --disable-shared --with-nghttp2=${srcdir}/${NGHTTP2_VERSION}/build LIBS="-pthread" CFLAGS="-I${srcdir}/${BORING_SSL_DIR}/build -I${srcdir}/${NGHTTP2_VERSION}/build" USE_CURL_SSLKEYLOGFILE=true
  make
  mkdir -p out
  cp src/curl out/curl-impersonate
  cp ${srcdir}/${browser_dir}/curl_* out/
  strip out/curl-impersonate
  chmod +x out/*
}

build_libcurl () {
  cd ${srcdir}
  cd ${CURL_VERSION}
  ./configure --with-openssl=${srcdir}/${BORING_SSL_DIR}/build --with-nghttp2=${srcdir}/${NGHTTP2_VERSION}/build LIBS="-pthread" CFLAGS="-I${srcdir}/${BORING_SSL_DIR}/build -I${srcdir}/${NGHTTP2_VERSION}/build" LIBS="-pthread" USE_CURL_SSLKEYLOGFILE=true 
  make clean 
  make
  ver=$(readlink -f lib/.libs/libcurl.so | sed 's/.*so\.//')
  cp "lib/.libs/libcurl.so.$ver" "out/libcurl-impersonate.so.$ver"
  strip "out/libcurl-impersonate.so.$ver"
}

prepare () {
  patch_boringssl
  patch_nghttp2
  patch_curl
}

build () {
  build_boringssl
  build_nghttp2
  build_curl
  build_libcurl
}

package () {
  mkdir -p "${pkgdir}/usr/lib/"

  cd ${CURL_VERSION}
  ver=$(readlink -f lib/.libs/libcurl.so | sed 's/.*so\.//')
  major=$(echo -n $ver | cut -d'.' -f1)
  cd out/

  sed -i "s/\$dir\/curl-impersonate/${pkgname}/g" curl_*
  install -Dm755 curl-impersonate "${pkgdir}/usr/bin/${pkgname}"
  install -Dm755 curl_* "${pkgdir}/usr/bin/"
  install -Dm755 libcurl-impersonate.so.$ver "${pkgdir}/usr/lib/libcurl-impersonate-chrome.so.$ver"

  cd "${pkgdir}/usr/lib/"
  ln -s "libcurl-impersonate-chrome.so.$ver" "libcurl-impersonate-chrome.so.$major"
  ln -s "libcurl-impersonate-chrome.so.$ver" "libcurl-impersonate-chrome.so"
}
