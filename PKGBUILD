# Maintainer: Michael Straube <straubem@gmx.de>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Piotr Balcerowski <piotr@balcerowski.org>

pkgname=libcurl-openssl-1.0
pkgver=7.54.0
pkgrel=1
pkgdesc='An URL retrieval library (build against openssl-1.0)'
arch=('i686' 'x86_64')
url='https://curl.haxx.se'
license=('MIT')
depends=('curl' 'glibc' 'krb5' 'openssl-1.0' 'libpsl' 'zlib' 'libssh2.so')
options=('strip')
source=("https://curl.haxx.se/download/curl-${pkgver}.tar.gz"{,.asc})
validpgpkeys=('27EDEAF22F3ABCEB50DB9A125CC908FDB71E12C2') # Daniel Stenberg
sha256sums=('a84b635941c74e26cce69dd817489bec687eb1f230e7d1897fc5b5f108b59adf'
            'SKIP')

build() {
  cd curl-${pkgver}

  export PKG_CONFIG_PATH=/usr/lib/openssl-1.0/pkgconfig

  ./configure \
    --prefix='/usr' \
    --disable-ldap \
    --disable-ldaps \
    --disable-manual \
    --enable-ipv6 \
    --enable-threaded-resolver \
    --with-gssapi \
    --with-random='/dev/urandom' \
    --with-ca-bundle='/etc/ssl/certs/ca-certificates.crt'

  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make -C lib
}

package() {
  cd curl-${pkgver}

  make -C lib DESTDIR="${pkgdir}" install

  mv "${pkgdir}"/usr/lib/libcurl{,-openssl-1.0}.so.4.4.0
  rm "${pkgdir}"/usr/lib/libcurl.{a,so}*
  ln -s libcurl-openssl-1.0.so.4.4.0 "${pkgdir}"/usr/lib/libcurl-openssl-1.0.so

  install -dm 755 "${pkgdir}"/usr/share/licenses
  ln -s curl "${pkgdir}"/usr/share/licenses/${pkgname}
}
