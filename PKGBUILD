# Maintainer: Dario Ostuni <another.code.996@gmail.com>

pkgname=lib32-tslib
_pkgname=tslib
pkgver=1.11
pkgrel=1
pkgdesc="Touchscreen Access Library (32-bit)"
arch=('x86_64')
url="https://github.com/kergoth/tslib"
license=('GPL2')
depends=('lib32-glibc')
makedepends=()
source=("https://github.com/kergoth/tslib/releases/download/$pkgver/$_pkgname-$pkgver.tar.xz")
sha256sums=('90d22b2f1b6dc9899d9491bc0480dfdcb2b55ff6e620ebb999d607aa5389af06')

build() {
  cd $_pkgname-$pkgver
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  ./autogen.sh
  ./configure --prefix=/usr --libdir=/usr/lib32 --sysconfdir=/etc
  make
}

package() {
  cd $_pkgname-$pkgver
  make DESTDIR="$pkgdir" install
  rm -rf "${pkgdir}"/usr/{include,share,bin}
  rm -rf "${pkgdir}"/etc
}
