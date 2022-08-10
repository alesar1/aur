# Maintainer: Rocket Aaron <i at rocka dot me>

pkgname=libime-jyutping
pkgver=1.0.4
pkgrel=1
pkgdesc="A library make use of libime to implement jyutping (粵拼) input method, also includes engine for fcitx 5."
arch=('i686' 'x86_64')
url="https://github.com/fcitx/libime-jyutping"
license=('GPL')
depends=('fcitx5-chinese-addons')
makedepends=('boost' 'extra-cmake-modules' 'ninja' 'python')
source=("https://download.fcitx-im.org/fcitx5/$pkgname/$pkgname-${pkgver}.tar.xz"{,.sig})
sha512sums=('e50b94ac791b1fe52b5dfd9fc01d5dbf4447927067ec516c7f8725b1f454c879dc46ec6158f8768573a7bf98c1da76e0715ce28d28d2fafdbc1783ee9dcaf24f'
            'SKIP')
validpgpkeys=('2CC8A0609AD2A479C65B6D5C8E8B898CBF2412F9') # Weng Xuetian <wengxt@gmail.com>

build() {
  cd $pkgname-$pkgver

  cmake -GNinja -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=/usr/lib .
  ninja
}

check() {
  cd $pkgname-$pkgver
  ninja test
}

package() {
  cd $pkgname-$pkgver
  DESTDIR="$pkgdir" ninja install
}
