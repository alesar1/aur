# Maintainer: Llewelyn Trahaearn <woefulderelict [at] gmail [dot] com>
# Contributor: Peter Lamby <peterlamby [at] web [dot] de>
# Contributor: Stéphane Gaudreault <stephane [at] archlinux [dot] org>
# Contributor: Thomas Dziedzic <gostrc [at] gmail [dot] com>
# Contributor: Denis Martinez <deuns.martinez [at] gmail [dot] com>

pkgname=lib32-intel-tbb
pkgver=2019.8
_tagname=${pkgver/./_U}
pkgrel=1
pkgdesc="High level abstract threading library (32-bit)"
arch=('x86_64')
url="https://threadingbuildingblocks.org"
license=('GPL')
depends=("${pkgname#lib32-}" 'lib32-gcc-libs')
makedepends=('gcc-multilib')
source=("${pkgname#lib32-}-${pkgver}.tar.gz::https://github.com/01org/tbb/archive/$_tagname.tar.gz")
sha256sums=('7b1fd8caea14be72ae4175896510bf99c809cd7031306a1917565e6de7382fba')

build() {
  cd "tbb-${_tagname}"
  export PKG_CONFIG_LIBDIR='/usr/lib32/pkgconfig'
  make arch=ia32
}

package() {
  cd "tbb-${_tagname}"
  install -d "${pkgdir}/usr/lib32"
  install -m755 build/linux_*/*.so* "${pkgdir}/usr/lib32"
}
