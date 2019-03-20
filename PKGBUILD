# Contributor inemum (https://gitlab.com/inemum)
# Maintainer graysky <graysky AT archlinux DOT us>
# based on https://git.archlinux.org/svntogit/packages.git/tree/trunk/PKGBUILD?h=packages/sip

pkgname=('python-sip-pyqt4')
pkgver=4.19.15
pkgrel=1
arch=('x86_64')
url='http://www.riverbankcomputing.com/software/sip/intro'
license=('custom:"sip"')
makedepends=('python')
source=("https://www.riverbankcomputing.com/static/Downloads/sip/sip-$pkgver.tar.gz")
sha256sums=('2b5c0b2c0266b467b365c21376d50dde61a3236722ab87ff1e8dacec283eb610')

prepare() {
  mkdir -p build-pyqt4
}

build() {
  cd "$srcdir"/build-pyqt4
  python ../sip-$pkgver/configure.py CFLAGS="$CFLAGS" LFLAGS="$LDFLAGS" --sip-module PyQt4.sip --no-tools
  make
}

package_python-sip-pyqt4() {
  pkgdesc="Python 3.x SIP bindings for C and C++ libraries (PyQt4 version)"
  depends=('python')

  cd build-pyqt4
  make DESTDIR="$pkgdir" install

  install -Dm644 ../sip-$pkgver/LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
