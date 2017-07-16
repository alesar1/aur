# This package is based on libva-intel-driver just with the hybrid codec flag
# Maintainer: DetMittens
# Contributor: Maxime Gauduin <alucryd@archlinux.org> Maintainer of libva-intel-driver-hybrid
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>

pkgname=libva-intel-driver-hybrid
pkgver=1.8.2
pkgrel=1
pkgdesc='VA-API implementation for Intel G45 and HD Graphics family with wrapper support for the hybrid codec driver'
arch=('i686' 'x86_64')
url='https://01.org/linuxmedia/vaapi'
license=('MIT')
depends=('libva')
replaces=('libva-driver-intel')
conflicts=('libva-intel-driver')
provides=('libva-intel-driver')
source=("https://github.com/01org/intel-vaapi-driver/releases/download/${pkgver}/intel-vaapi-driver-${pkgver}.tar.bz2")
sha256sums=('866cdf9974911e58b0d3a2cade29dbe7b5b68836e142cf092b99db68e366b702')

prepare() {
  cd intel-vaapi-driver-${pkgver}

  # Only relevant if intel-gpu-tools is installed,
  # since then the shaders will be recompiled
  sed -i '1s/python$/&2/' src/shaders/gpp.py
}

build() {
  cd intel-vaapi-driver-${pkgver}

  ./configure \
    --prefix='/usr' \
    --enable-hybrid-codec
  make
}

package() {
  cd intel-vaapi-driver-${pkgver}

  make DESTDIR="${pkgdir}" install

  install -Dm 644 COPYING -t "${pkgdir}"/usr/share/licenses/libva-intel-driver-hybrid
}

# vim: ts=2 sw=2 et:
