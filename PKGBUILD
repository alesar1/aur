# Maintainer: HanFox <han@hanfox.co.uk>
# Based on the 'community/openttd' PKGBUILD by: Vesa Kaihlavirta <vegai@iki.fi>

pkgname=openttd-jgrpp
pkgver=0.34.1
pkgrel=1
pkgdesc="OpenTTD with JGR's patch pack."
arch=('i686' 'x86_64')
url='http://www.tt-forums.net/viewtopic.php?f=33&t=73469'
license=('GPL')
depends=('libpng' 'sdl' 'icu' 'fontconfig' 'lzo' 'hicolor-icon-theme' 'desktop-file-utils' 'tar' 'fluidsynth')
source=("https://github.com/JGRennison/OpenTTD-patches/archive/jgrpp-${pkgver}.tar.gz")
sha256sums=('5b8f68ec819b1aafcce5828f5d6d85dcc6b5f00e3d13484bdda3c04f8f95a878')

_dirname=OpenTTD-patches-jgrpp

build() {
  cd ${_dirname}-${pkgver} 
  
 ./configure \
    --prefix-dir=/usr \
    --binary-name=${pkgname} \
    --binary-dir=bin \
    --data-dir=share/${pkgname} \
    --install-dir="${pkgdir}" \
    --doc-dir=share/doc/${pkgname} \
    --with-fluidsynth \
    --menu-name="OpenTTD (JGR Patch Pack)" \
    --personal-dir=.${pkgname}

  make
}

package() {
  cd ${_dirname}-${pkgver}
  
  mkdir -p ${pkgdir}/usr/share/${pkgname}/{data,game}

  make install
} 
