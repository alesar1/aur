# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Contributor: David Runge <dave@sleepmap.de>
# Contributor: speps <speps at aur dot archlinux dot org>
# Contributor: Dany Martineau <dany.luc.martineau@gmail.com>

pkgname=fox-devel
pkgver=1.7.79
pkgrel=1
pkgdesc="Free Objects for X: GUI Toolkit for C++, development version."
arch=(x86_64)
url="http://www.fox-toolkit.org/"
license=(LGPL 'custom')
depends=(glu libsm libtiff libxcursor libxft libxi libxrandr)
makedepends=(mesa)
source=("http://www.fox-toolkit.org/ftp/fox-${pkgver}.tar.gz"
        "https://cgit.freebsd.org/ports/plain/x11-toolkits/fox17/files/patch-lib_FXRex.cpp?id=893259c1ecd95a08ca1579901608257d4ebaf0b1")
sha512sums=('4a3dc0fb0f98fa036c0c91776af65ff1049a8047f47efedbf9864d2351d7590ed36a258e18f295f94c24169862cac7e075351a0b443495d46a535aee8dca6482'
            '94e769c6cefdab2b4585d1071d44f2a7b5cbec2525bbdececd74ff0dcb5359d9db1dabe9509a809f281913be5082c5b436fc9cc5e6b61b17f8e5b64ca81a28e4')

prepare() {
  cd "fox-${pkgver}"
  patch -p1 -i "${srcdir}/patch-lib_FXRex.cpp?id=893259c1ecd95a08ca1579901608257d4ebaf0b1" lib/FXRex.cpp
}

build() {
  cd "fox-${pkgver}"
  ./configure \
    --prefix=/usr \
    --enable-static=no \
    --enable-release \
    --with-xft=yes \
    --with-opengl=yes \
    --with-xim \
    --with-xshm \
    --with-shape \
    --with-xcursor \
    --with-xrender \
    --with-xrandr \
    --with-xfixes \
    --with-xinput
  make
}

package() {
  cd "fox-${pkgver}"
  make DESTDIR="${pkgdir}/" install

  # license
  install -vDm 644 LICENSE_ADDENDUM \
  "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # rename files to prevent conflicts with fox
  for _binary in `find "${pkgdir}"/usr/bin -type f`; do
    mv ${_binary} "${_binary}-devel"
  done;
  for _man in `find "${pkgdir}"/usr/share/man -type f`; do
    mv ${_man} "$(dirname ${_man})/$(basename ${_man})-devel.1"
  done;
}
