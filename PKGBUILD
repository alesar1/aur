# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Contributor: David Runge <dave@sleepmap.de>
# Contributor: speps <speps at aur dot archlinux dot org>
# Contributor: Dany Martineau <dany.luc.martineau@gmail.com>

pkgname=fox-devel
pkgver=1.7.73
pkgrel=1
pkgdesc="Free Objects for X: GUI Toolkit for C++, development version."
arch=('x86_64')
url="http://www.fox-toolkit.org/"
license=('LGPL' 'custom')
depends=('glu' 'libsm' 'libtiff' 'libxcursor' 'libxft' 'libxi' 'libxrandr')
makedepends=('mesa')
provides=("fox-devel=${pkgver}")
source=("http://www.fox-toolkit.org/ftp/fox-${pkgver}.tar.gz")
sha512sums=('b52d104366433af0a8855d54deb89480fddf636fcc0e40cfd17a8f159e75b2d2ed55281a2dd81049aa1d48f7594de7a007a1147a378117661ff9f0c032517bae')

build() {
  cd "fox-${pkgver}"
  ./configure   --prefix=/usr \
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
