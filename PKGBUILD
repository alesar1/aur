# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=gnutls-git
pkgver=3.6.4.r103.gc7de377eb
pkgrel=1
pkgdesc="A secure communications library implementing the SSL, TLS and DTLS protocols and technologies around them"
arch=('i686' 'x86_64')
url="https://www.gnutls.org/"
license=('LGPL')
depends=('glibc' 'libidn2' 'libtasn1' 'libunistring' 'nettle' 'p11-kit' 'readline' 'zlib')
makedepends=('git' 'autogen' 'gperf' 'rsync' 'wget')
provides=('gnutls')
conflicts=('gnutls')
source=("git+https://gitlab.com/gnutls/gnutls.git")
sha256sums=('SKIP')


pkgver() {
  cd "gnutls"

  git describe --long --tags | sed 's/^gnutls_//;s/\([^-]*-g\)/r\1/;s/[_-]/./g'
}

build() {
  cd "gnutls"

  make autoreconf
  ./configure --prefix="/usr" \
    --with-default-trust-store-pkcs11="pkcs11:model=p11-kit-trust;manufacturer=PKCS%2311%20Kit" \
    --disable-full-test-suite \
    --disable-guile
  make
}

package() {
  cd "gnutls"

  make DESTDIR="$pkgdir" install
}
