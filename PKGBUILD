# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgname=libksysguard
pkgname=libksysguard-light
pkgver=5.15.1
pkgrel=1
pkgdesc='Libraries for ksysguard without the big dependency on qt5-webengine'
arch=(x86_64)
url='https://www.kde.org/workspaces/plasmadesktop/'
license=(LGPL)
depends=(libxres kio)
makedepends=(extra-cmake-modules kdoctools plasma-framework)
groups=(plasma)
conflicts=(libksysguard)
replaces=(libksysguard)
provides=(libksysguard)
source=("https://download.kde.org/stable/plasma/$pkgver/$_pkgname-$pkgver.tar.xz"{,.sig})
sha256sums=('7affcb4d6b583a6e863439a8d2af3993a3e0277b4e2996e753386182bd018156'
            'SKIP')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E'  # Jonathan Riddell <jr@jriddell.org>
              '0AAC775BB6437A8D9AF7A3ACFE0784117FBCE11D'  # Bhushan Shah <bshah@kde.org>
              'D07BD8662C56CB291B316EB2F5675605C74E02CF'  # David Edmundson <davidedmundson@kde.org>
              '1FA881591C26B276D7A5518EEAAF29B42A678C20') # Marco Martin <notmart@gmail.com>

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../$_pkgname-$pkgver \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
