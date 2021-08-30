# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=gmssl
pkgver=2.0
pkgrel=2
pkgdesc="Chinese national cryptographic algorithms and protocols"
arch=('i686' 'x86_64')
url="http://gmssl.org/"
license=('custom')
depends=('perl')
conflicts=('openssl')
options=('staticlibs')
source=("$pkgname-$pkgver-src.tar.gz::https://github.com/GmSSL/GmSSL/archive/gmssl-$pkgver.tar.gz"
        "ca-dir.patch::https://raw.githubusercontent.com/archlinux/svntogit-packages/packages/openssl/trunk/ca-dir.patch")
sha256sums=('3e3cf33bb81a30a9d5f896cd3b381bbfbf4d989f4fcb0872d0e6dfbe92a6e632'
            'SKIP')


prepare() {
  cd "GmSSL-$pkgname-$pkgver"

  patch -Np0 -i "$srcdir/ca-dir.patch"
}

build() {
  cd "GmSSL-$pkgname-$pkgver"

  ./config \
    --prefix="/usr" \
    --openssldir="/etc/ssl" \
    --libdir="lib"
  make
}

check() {
  cd "GmSSL-$pkgname-$pkgver"

  #make test
}

package() {
  cd "GmSSL-$pkgname-$pkgver"

  make \
    DESTDIR="$pkgdir" \
    MANSUFFIX="ssl" \
    install_sw \
    install_ssldirs \
    install_man_docs
  install -Dm644 "LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
