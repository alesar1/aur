# Contributor: Taylor Venable <taylor@metasyntax.net>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

_pkgname='bigloo'
pkgname="${_pkgname}-devel"
epoch=30
_pkgver=4.3b
_pkgsuffix=alpha12Oct17
pkgver=${_pkgver}_${_pkgsuffix}
pkgrel=1
pkgdesc="Fast scheme compiler"
arch=('i686' 'x86_64')
url="http://www-sop.inria.fr/mimosa/fp/Bigloo/"
license=('GPL' 'LGPL')
depends=('openssl' 'sqlite3' 'avahi' 'libunistring' 'gmp' 'libpulse' 'libuv' 'mpg123' 'flac')
makedepends=('zip' 'emacs')
optdepends=('emacs: for bee'
	    'java-environment: for compiling into jvm')
provides=('bigloo=$pkgver')
conflicts=('bigloo')
options=('!makeflags' 'libtool' 'staticlibs' '!strip')
source=("ftp://ftp-sop.inria.fr/indes/fp/Bigloo/${_pkgname}${_pkgver}-${_pkgsuffix}.tar.gz" "satisfy-ldconfig.sh")
sha256sums=('8cc5d0cf0839be2d8c455d42bee618c5f2f6ed198e981de4f751151c03b7c98b'
            'b45d2dc176f2b8c6496da9bfaad76d9398172dbef288984f6415824c1c93a4c2')

prepare() {
  cd "${srcdir}/${_pkgname}${_pkgver}"
  sed -ri 's/ ?-Wl,-rpath=[^"]+"/"/' configure
}

build() {
  cd "${srcdir}/${_pkgname}${_pkgver}"

  CFLAGS+=" -fPIC" ./configure --prefix=/usr \
    --disable-ssl \
    --enable-sqlite \
    --enable-alsa \
    --disable-gstreamer \
    --enable-libuv \
    --mandir=/usr/share/man \
    --infodir=/usr/share/info \
    --docdir=/usr/share/doc/bigloo \
    --strip=no
  make
  make compile-bee
}

check() {
  cd "${srcdir}/${_pkgname}${_pkgver}"
  make test
}

package() {
  cd "${srcdir}/${_pkgname}${_pkgver}"
  make DESTDIR="${pkgdir}" install install-bee
  make -C manuals DESTDIR="${pkgdir}" install-bee
  chmod 644 "${pkgdir}/usr/lib/${_pkgname}/${_pkgver}"/*.a
}
