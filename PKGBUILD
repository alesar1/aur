# Maintainer: Will Vauclain <willvauclain.dev at gmail dot com>
pkgname=gebaar
pkgver=0.0.2
pkgrel=1
pkgdesc='A Super Simple WM Independent Touchpad Gesture Daemon for libinput.'
arch=('x86_64')
url="https://github.com/Coffee2CodeNL/gebaar-libinput"
license=('GPL3')
depends=('libinput')
makedepends=('cmake')

prepare() {
    cd $srcdir
    rm -rf gebaar-libinput
    git clone https://github.com/Coffee2CodeNL/gebaar-libinput
    cd gebaar-libinput
    git checkout v$pkgver
    git submodule update --init
}

build() {
  cd $srcdir/gebaar-libinput
  git checkout v$pkgver
  git submodule update --init
  mkdir build && cd build
  cmake -DCMAKE_INSTALL_PREFIX="/usr" ..
  make -j$(nproc)
}

package() {
  cd $srcdir/gebaar-libinput/build
  sudo make DESTDIR="$pkgdir" install/strip
  cd ..
  sudo install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  sudo install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}