# Contributor: Jürgen Hötzel <juergen@archlinux.org>
# Contributor: John Proctor <jproctor@prium.net>
# Contributor: Kevin Piche <kevin@archlinux.org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=bigloo-devel
pkgver=4.4a
pkgrel=14
epoch=1
pkgdesc="Fast scheme compiler"
arch=('x86_64')
url="https://www-sop.inria.fr/mimosa/fp/Bigloo/"
license=('GPL' 'LGPL')
depends=('gmp' 'openssl' 'libunistring' 'libnsl' 'gc' 'libuv' 'libpulse' 'mpg123' 'avahi' 'sqlite')
makedepends=('java-environment' 'emacs' 'zip' 'sqlite' 'alsa-lib' 'flac' 'avahi' 'chrpath')
optdepends=('java-environment' 'emacs' 'zip' 'sqlite' 'alsa-lib' 'flac' 'avahi')
options=('!makeflags' 'staticlibs')
conflicts=('bigloo')
provides=("bigloo=$pkgver")
source=(ftp://ftp-sop.inria.fr/indes/fp/Bigloo/${pkgname%-devel}-latest.tar.gz bigloo-emacs.patch)
sha256sums=('7e98837d25b948ebb072c934438204d8336612e59d244c276f986fc94d2ec2fc'
            '80356c27b58a302775f75e848a89ab2d588796a548f4ce7a20df048e215deab0')
elisp_dir=/usr/share/emacs/site-lisp/bigloo

prepare() {
  patch -p0 -d "${srcdir}/${pkgname%-devel}-latest" -i "${srcdir}/bigloo-emacs.patch"
}

build() {
  cd ${pkgname%-devel}-latest
  ./configure --prefix=/usr \
    --docdir=/usr/share/doc/bigloo \
    --mandir=/usr/share/man \
    --infodir=/usr/share/info \
    --lispdir=${elisp_dir} \
    --coflags="$CFLAGS" \
    --cpicflags="-fPIC" \
    --customgc=no \
    --customgmp=no \
    --customlibuv=no \
    --customunistring=no \
    --jvm=no \
    --native-default-backend \
    --enable-avahi \
    --enable-flac \
    --enable-sqlite \
    --enable-ssl \
    --disable-gstreamer
  sed -i '80d' Makefile.config
  EXTRALIBS="-ldl -lresolv -lunistring -lpcre -lgmp -lm -lc" make build compile-bee
}

check() {
  cd ${pkgname%-devel}-latest
  make test
}

package() {
  cd ${pkgname%-devel}-latest

  make DESTDIR="${pkgdir}" install install-bee
  make -C manuals DESTDIR="${pkgdir}" install-bee

  rm "${pkgdir}"/usr/bin/{bglafile,bigloo}.sh

  # Remove references to the build root
  sed -e "s|^BOOTDIR=.*|BOOTDIR=/usr|g" \
      -e "s|^BOOTBINDIR=.*|BOOTBINDIR=/usr/bin|g" \
      -e "s|^BOOTLIBDIR=.*|BOOTLIBDIR=/usr/lib/bigloo/${pkgver}|g" \
      -e "s|^BGLBUILDBINDIR=.*|BGLBUILDBINDIR=/usr/bin|g" \
      -e "s|^BGLBUILDLIBDIR=.*|BGLBUILDLIBDIR=/usr/lib/bigloo/${pkgver}|g" \
      -e "s|^\(BIGLOO=.*\)\.sh|\1|" \
      -e "s|^\(BGL.*=.*\)\.sh|\1|" \
      -i  ${pkgdir}/usr/lib/bigloo/$pkgver/Makefile.config
}
