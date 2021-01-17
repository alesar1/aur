# Maintainer: Nick Black <dankamongmen@gmail.com>

pkgname=notcurses
pkgver=2.1.5
pkgrel=1
pkgdesc="Blingful TUI/character graphics library"
url="https://nick-black.com/dankwiki/index.php/Notcurses"
license=('Apache')
arch=('x86_64')
# qrcodegen is currently shipped as a static archive on Arch, rather than a
# dynamic library. Should the .so be shipped in the future, promote qrcodegen
# from a makedepends to a true depends, and use that dynamic library.
depends=('ncurses' 'ffmpeg' 'libunistring')
makedepends=('cmake' 'pandoc' 'python-pypandoc' 'python-cffi' 'python-setuptools' 'doctest' 'qrcodegen' 'readline' 'ninja')
source=("https://github.com/dankamongmen/notcurses/archive/v${pkgver}.tar.gz")

prepare() {
  mkdir -p "${pkgname}-${pkgver}/build"
  cd "${pkgname}-${pkgver}/build"
  cmake .. -GNinja -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=RelWithDebInfo
}

build() {
  cd "${pkgname}-${pkgver}/build"
  ninja
}

check() {
  cd "${pkgname}-${pkgver}/build"
  ninja test
}

package() {
  cd "${pkgname}-${pkgver}/build"
  DESTDIR="$pkgdir" ninja install
  cd ../cffi
  env CFLAGS="-I$pkgdir/usr/include -L../build" python setup.py install --root="$pkgdir" --optimize=1
}

sha256sums=('22ebd54880031e810829c9bdfaa5668b8e3236151d2818224947fb30ed349615')
