# Maintainer: Nick Black <dankamongmen@gmail.com>

pkgname=notcurses
pkgver=1.7.0
pkgrel=1
pkgdesc="Blingful TUI/character graphics library"
url="https://nick-black.com/dankwiki/index.php/Notcurses"
license=('Apache')
arch=('x86_64')
# qrcodegen is currently shipped as a static archive on Arch, rather than a
# dynamic library. Should the .so be shipped in the future, promote qrcodegen
# from a makedepends to a true depends, and use that dynamic library.
depends=('ncurses' 'ffmpeg' 'libunistring')
makedepends=('cmake' 'pandoc' 'python-pypandoc' 'python-cffi' 'python-setuptools' 'doctest' 'qrcodegen')
source=("https://github.com/dankamongmen/notcurses/archive/v${pkgver}.tar.gz")

prepare() {
  mkdir -p "${pkgname}-${pkgver}/build"
  cd "${pkgname}-${pkgver}/build"
  cmake .. -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=RelWithDebInfo
}

build() {
  cd "${pkgname}-${pkgver}/build"
  make
}

check() {
  cd "${pkgname}-${pkgver}/build"
  make test
}

package() {
  cd "${pkgname}-${pkgver}/build"
  make install DESTDIR="$pkgdir"
  cd ../python
  env CFLAGS="-I$pkgdir/usr/include -L../build" python setup.py install --root="$pkgdir" --optimize=1
}

sha256sums=('67175d4279c280874e5115151881e84df3277ec89434c950e298a44d3802c1bc')
