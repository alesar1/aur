# Maintainer: Nick Black <dankamongmen@gmail.com>

pkgname=notcurses
pkgver=1.3.4
pkgrel=1
pkgdesc="Modern TUI library"
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
  cd python
  python setup.py install --root="$pkgdir" --optimize=1
}

sha256sums=('e39c7f04aa6303a080141b82b2d4320c57a7d53687cc0ad4ff9e3274e8ae139a')
