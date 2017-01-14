# $Id: PKGBUILD 281733 2016-11-21 12:23:16Z lcarlier $
# Maintainer: Jan de Groot <jgc@archlinux.org>

pkgname=xf86-video-tdfx
pkgver=1.4.6
pkgrel=1
pkgdesc="X.org tdfx video driver"
arch=(i686 x86_64)
url="https://xorg.freedesktop.org/"
license=('custom')
depends=('glibc')
makedepends=('xorg-server-devel' 'X-ABI-VIDEODRV_VERSION=23')
conflicts=('xorg-server<1.19' 'X-ABI-VIDEODRV_VERSION<23' 'X-ABI-VIDEODRV_VERSION>=24')
optdepends=('tdfx-dri: DRI1 support from community repo')
groups=('xorg-drivers')
source=(${url}/releases/individual/driver/${pkgname}-${pkgver}.tar.bz2{,.sig}
        git-fixes.patch)
sha256sums=('3a8a88867c40ad61f1c9a09ffd7ac64102fa821685855d50ce66c7603dcc6d37'
            'SKIP'
            'f0db3082cf55196492b34083005a9a57b6b532ef2d9cc6403f1b05e1a5424de0')
validpgpkeys=('3BB639E56F861FA2E86505690FDD682D974CA72A') # Matt Turner <mattst88@gmail.com>

prepare() {
  cd ${pkgname}-${pkgver}
  patch -Np1 -i ${srcdir}/git-fixes.patch
}

build() {
  cd ${pkgname}-${pkgver}
  ./configure --prefix=/usr
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install

  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/"
}
