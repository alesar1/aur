# Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Reventlov <contact@volcanis.me>
# Contributor: kpcyrd <git@rxv.cc>
# Your system will break if you install this. For breaking purposes only

pkgname=libressl
pkgver=2.9.1
pkgrel=1
pkgdesc='FREE version of the SSL/TLS protocol forked from OpenSSL - EXPRIMENTAL ONLY'
url='http://www.libressl.org/'
arch=('x86_64')
license=('custom:OpenSSL')
depends=('glibc')
optdepends=('ca-certificates')
backup=('etc/ssl/openssl.cnf')
provides=('openssl')
conflicts=('openssl')
source=(https://ftp.openbsd.org/pub/OpenBSD/LibreSSL/${pkgname}-${pkgver}.tar.gz{,.asc}
        libressl-dummy-rand-egd.patch)
sha512sums=('7051911e566bb093c48a70da72c9981b870e3bf49a167ba6c934eece873084cc41221fbe3cd0c8baba268d0484070df7164e4b937854e716337540a87c214354'
            'SKIP'
            '73ca8a924a23f874287503453d939ecffa40f05760cd539b4773f3f28687ee1f2fa463ca3f2cad4ac5f57a49f3b6a918c015c8829112c61cb3ea7b798c0d110b')
validpgpkeys=('A1EB079B8D3EB92B4EBD3139663AF51BD5E4D8D5') # Brent Cook <bcook@openbsd.org>

prepare() {
  cd ${pkgname}-${pkgver}
  # Dummy RAND_egd() function - Can help to compile some stuff
  # https://blog.hboeck.de/archives/851-LibreSSL-on-Gentoo.html
  patch -p1 < "${srcdir}/libressl-dummy-rand-egd.patch"
  # fix manpage symlink locations
  sed -ri 's|(ln -sf )(.+) (.+)|\1\2.gz \3.gz|g' man/Makefile.in
}

build() {
  cd ${pkgname}-${pkgver}
  ./configure --prefix=/usr --with-openssldir=/etc/ssl
  make
}

check() {
  cd ${pkgname}-${pkgver}
  make check
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
  install -Dm 644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  rm "${pkgdir}/etc/ssl/cert.pem"
  ln -s /usr/lib/libssl.so "${pkgdir}/usr/lib/libssl.so.1.0.0"
  ln -s /usr/lib/libssl.so "${pkgdir}/usr/lib/libssl.so.1.1"
  ln -s /usr/lib/libcrypto.so "${pkgdir}/usr/lib/libcrypto.so.1.0.0"
  ln -s /usr/lib/libcrypto.so "${pkgdir}/usr/lib/libcrypto.so.1.1"
}

# vim: ts=2 sw=2 et:
