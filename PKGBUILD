# $Id$
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgorigname=kwin
pkgname=kwin-presentwindows-close
pkgver=5.13.2
pkgrel=1
pkgdesc='An easy to use, but flexible, composited Window Manager'
arch=(i686 x86_64)
url='https://www.kde.org/workspaces/plasmadesktop/'
license=(LGPL)
depends=(kscreenlocker xcb-util-cursor plasma-framework kcmutils breeze kinit)
makedepends=(extra-cmake-modules qt5-tools kdoctools python)
optdepends=('qt5-virtualkeyboard: virtual keyboard support for kwin-wayland')
conflicts=(kwin)
provides=(kwin)
groups=(plasma)
source=("https://download.kde.org/stable/plasma/${pkgver}/${_pkgorigname}-${pkgver}.tar.xz"{,.sig}
        "presentwindows-close.patch")
sha256sums=('ce44bbdcfbdc5a170f75593175f9fb85475bdd93d4c8656e2fe24cff0795d00d'
            'SKIP'
            'a42e050f873632240595026b0f0f98ce4e109dd36a7768ba6b361d1b4854aefb')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E'  # Jonathan Riddell
              '0AAC775BB6437A8D9AF7A3ACFE0784117FBCE11D'  # Bhushan Shah <bshah@kde.org>
              'D07BD8662C56CB291B316EB2F5675605C74E02CF'  # David Edmundson
              '1FA881591C26B276D7A5518EEAAF29B42A678C20') # Marco Martin <notmart@gmail.com>

prepare() {
  mkdir -p build

  cd $_pkgorigname-$pkgver
  # allow middle click close of windows
  patch -p1 -R < ../presentwindows-close.patch
}

build() {
  cd build
  cmake ../$_pkgorigname-$pkgver \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_INSTALL_LIBEXECDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
