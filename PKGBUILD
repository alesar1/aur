# Maintainer: maz-1 < ohmygod19993 at gmail dot com >

pkgname=pcsx2-plugin-usbqemu-wheel
_pkgsrcname=USBqemu-wheel
pkgver=0.6.0_4
pkgrel=1
pkgdesc='A USB plugin modified to support steering wheels in pcsx2.'
arch=('i686' 'x86_64')
url='https://github.com/jackun/USBqemu-wheel'
license=('Unlicense')
depends=('pcsx2')
makedepends=('cmake' 'git')
makedepends_x86_64=('gcc-multilib')
source=("https://github.com/jackun/USBqemu-wheel/archive/${pkgver//_/-}.tar.gz")
sha256sums=('547fb74a4310ab8d3796f078dc9e1bdf74c58a59c2f11c26d0b06d6f77dbcf69')

build() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver//_/-}"
  rm -rf build/
  mkdir build && cd build/

  cmake ..
  make
}

package() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver//_/-}"
  cd build/

  if [ $CARCH = "i686" ]; then
    install -Dm644 libUSBqemu-wheel-${pkgver%_*}.so -t "$pkgdir/usr/lib/pcsx2/"
  else
    install -Dm644 libUSBqemu-wheel-${pkgver%_*}.so -t "$pkgdir/usr/lib32/pcsx2/"
  fi

  install -Dm644 ../LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}
