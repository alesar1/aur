# Maintainer: Nick Black <dankamongmen@gmail.com>

pkgname=notcurses
pkgver=2.3.12
pkgrel=0
pkgdesc="Blingful TUI/character graphics library"
url="https://nick-black.com/dankwiki/index.php/Notcurses"
license=('Apache')
arch=('x86_64')
# qrcodegen is currently shipped as a static archive on Arch, rather than a
# dynamic library. Should the .so be shipped in the future, promote qrcodegen
# from a makedepends to a true depends, and use that dynamic library.
depends=('ncurses' 'ffmpeg' 'libunistring')
makedepends=('cmake' 'pandoc' 'python-pip' 'python-pypandoc' 'python-cffi' 'python-setuptools' 'doctest' 'qrcodegen' 'readline' 'ninja' 'zlib')
source=("https://github.com/dankamongmen/notcurses/archive/v${pkgver}.tar.gz")

prepare() {
  mkdir -p "${pkgname}-${pkgver}/build"
  cd "${pkgname}-${pkgver}/build"
  cmake .. -GNinja -DCMAKE_INSTALL_PREFIX="/usr" -DCMAKE_BUILD_TYPE=RelWithDebInfo -DUSE_QRCODEGEN=on
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

sha256sums=('ce042908fac11f7df1f9eaa610e46e9c615f53ab036b7c27ae2396292512407b')
