# Maintainer: dracorp aka Piotr Rogoza <piotr.r.public at gmail.com>

pkgname=ksnip
pkgver=1.7.3
pkgrel=1
pkgdesc='Screenshot tool inspired by Windows Snipping Tool and made with Qt for Linux'
arch=('i686' 'x86_64')
url='https://github.com/DamirPorobic/ksnip'
license=('GPL')
depends=(
  qt5-x11extras
  'kimageannotator>=0.3.1'
)
makedepends=(
  cmake
  extra-cmake-modules
  qt5-tools
  'kimageannotator>=0.3.1'
)
conflicts=(ksnip-git)
source=($pkgname-$pkgver.tar.gz::https://github.com/DamirPorobic/ksnip/archive/v${pkgver}.tar.gz)
sha256sums=('013494b4f35d98f2aeae60aca531efbfe9ac8690af7c140d71a2070ad68bf3da')

prepare(){
  cd "$srcdir/$pkgname-$pkgver"
  test -d build || mkdir build
}
build(){
  cd "$srcdir/$pkgname-$pkgver/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}
package(){
  cd "$srcdir/$pkgname-$pkgver/build"
  make DESTDIR="$pkgdir" install
  cd "$pkgdir"
}
