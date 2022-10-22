# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Contributor: David Runge <dave@sleepmap.de>
# Contributor: speps <speps at aur dot archlinux dot org>
# Contributor: Dany Martineau <dany.luc.martineau@gmail.com>

pkgname=fox-devel
pkgver=1.7.80
pkgrel=1
pkgdesc="Free Objects for X: GUI Toolkit for C++, development version."
arch=(x86_64)
url="http://www.fox-toolkit.org/"
license=(LGPL 'custom')
depends=(glu libsm libtiff libxcursor libxft libxi libxrandr)
makedepends=(mesa)
source=("http://www.fox-toolkit.org/ftp/fox-${pkgver}.tar.gz")
sha512sums=('31b2702637db00bdaeee767bea83e894e2fcc686d9c7973d3986a35411df3ff9566e18207057bef239703a7036134ab6cad5c4e569f07f45f7b773f31e92902d')

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
