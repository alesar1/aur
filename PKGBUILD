# Maintainer: Bruce Zhang
pkgname=lib32-vkd3d
_pkgname=vkd3d
pkgver=1.0
pkgrel=2
pkgdesc='Direct3D 12 to Vulkan translation library By WineHQ (lib32)'
arch=('x86_64')
url='https://www.winehq.org/news/2018052301'
license=('LGPL')
source=("https://dl.winehq.org/vkd3d/source/vkd3d-${pkgver}.tar.xz")
makedepends=('spirv-headers-git' 'vulkan-headers' 'lib32-xcb-util-keysyms')
depends=('libtool' 'glibc')
sha1sums=('aee28ae112d4d783ad8810d6accbf0282fe30139')
install=lib32-vkd3d.install

prepare() {
  cd "${srcdir}/vkd3d-${pkgver}"
  export CC='gcc -m32'
  export CXX='g++ -m32'

  export PKG_CONFIG_PATH=/usr/lib32/pkgconfig
  export LDFLAGS="-L/usr/lib32"

  ./configure --prefix=/usr --libdir=/usr/lib32
}

build() {
  cd "${srcdir}/vkd3d-${pkgver}"
  make
}

package() {
  cd "${srcdir}/vkd3d-${pkgver}"
  make DESTDIR="${pkgdir}" install
  cd ${pkgdir}
  rm -rf ./usr/include/vkd3d
}
