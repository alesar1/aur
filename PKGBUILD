# Maintainer: Miguel Revilla <yo@miguelrevilla.com>
# Contributor: Joshua Stiefer <facedelajunk@gmail.com>
# Contributor: Alexander Fehr <pizzapunk gmail com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=wxsvg
pkgver=1.5.8
pkgrel=2
pkgdesc="C++ library to create, manipulate and render SVG files"
arch=('i686' 'x86_64')
url="http://wxsvg.sourceforge.net/"
license=('custom:wxWindows')
depends=('wxgtk' 'ffmpeg' 'ffmpeg-compat' 'webkitgtk2')
options=('!libtool')
source=("http://downloads.sourceforge.net/project/wxsvg/wxsvg/${pkgver}/wxsvg-${pkgver}.tar.bz2"
		"wxsvg-1.5.8-wxSVGMatrix.patch")
md5sums=('a1df94fd485a16d5c71ee8ba22dde160'
         '2840378a1977739b2365df2c38e46b1f')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p1 < ../wxsvg-1.5.8-wxSVGMatrix.patch
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr --with-wx-config=/usr/bin/wx-config
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/wxsvg/COPYING"
}
