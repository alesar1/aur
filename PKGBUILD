# $Id$
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_pkgorigname=kwin
pkgname=kwin-presentwindows-close
pkgver=5.11.4
pkgrel=1
pkgdesc='An easy to use, but flexible, composited Window Manager'
arch=(i686 x86_64)
url='https://www.kde.org/workspaces/plasmadesktop/'
license=(LGPL)
depends=(kscreenlocker xcb-util-cursor hicolor-icon-theme plasma-framework kcmutils breeze kinit)
makedepends=(extra-cmake-modules qt5-tools kdoctools python)
optdepends=('qt5-virtualkeyboard: virtual keyboard support for kwin-wayland')
conflicts=(kwin)
provides=(kwin)
groups=(plasma)
source=("https://download.kde.org/stable/plasma/${pkgver}/${_pkgorigname}-${pkgver}.tar.xz"{,.sig}
        "presentwindows-close.patch")
sha256sums=('f989b2dbfd79d63e19e2bf1beb9e9088a3fb9a4a0d4a3ceac2b42201bd15d751'
            'SKIP'
            'a42e050f873632240595026b0f0f98ce4e109dd36a7768ba6b361d1b4854aefb')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E'  # Jonathan Riddell
              '348C8651206633FD983A8FC4DEACEA00075E1D76'  # KDE Neon
              'D07BD8662C56CB291B316EB2F5675605C74E02CF') # David Edmundson

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
