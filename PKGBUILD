# Maintainer: Nick Black <dankamongmen@gmail.com>

pkgname=notcurses
pkgver=1.6.6
pkgrel=2
pkgdesc="Blingful TUI/character graphics library"
url="https://nick-black.com/dankwiki/index.php/Notcurses"
license=('Apache')
arch=('x86_64')
# qrcodegen is currently shipped as a static archive on Arch, rather than a
# dynamic library. Should the .so be shipped in the future, promote qrcodegen
# from a makedepends to a true depends, and use that dynamic library.
depends=('ncurses' 'ffmpeg')
makedepends=('cmake' 'pandoc' 'python-cffi' 'python-setuptools' 'doctest' 'qrcodegen')
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

sha256sums=('921e965b98b104598861507d43fa345faf47143ce816483a80d1857804bee165')
