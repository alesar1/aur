# $Id$
# Maintainer: Eric Belanger <eric@archlinux.org>
# Contributor: Eric Belanger <eric@archlinux.org>

pkgname=directfb
pkgver=1.4.1
pkgrel=1
pkgdesc="A thin library that provides hardware graphics acceleration, input device handling and abstraction, integrated windowing system on top of the Linux Framebuffer Device"
arch=('i686' 'x86_64')
url="http://www.directfb.org"
license=('LGPL')
depends=('libjpeg>=7' 'libxext' 'sdl' 'sysfsutils' 'libpng' 'freetype2')
options=('!libtool')
source=(http://www.directfb.org/downloads/Core/DirectFB-${pkgver%.*}/DirectFB-${pkgver}.tar.gz)
md5sums=('e7df079ff44ec98187c24a00500e597a')
sha1sums=('98f3c46789fa599367037654ee35b71f453b68b3')

build() {
  cd "${srcdir}/DirectFB-${pkgver}"
  ./configure --prefix=/usr --sysconfdir=/etc --enable-static --enable-zlib \
              --enable-x11 --enable-sdl --disable-vnc --disable-osx \
              --enable-video4linux2 --enable-voodoo || return 1
  make || return 1
  make DESTDIR="${pkgdir}" install || return 1
} 
