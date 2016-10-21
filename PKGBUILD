# Maintainer: Peter Mattern <pmattern at arcor dot de>

_pkgname=lxqt-build-tools
pkgname=$_pkgname-git
pkgver=0.1.0.2.g8aaaf02
pkgrel=1
pkgdesc='Tools to build LXQt and components maintained by the project.'
arch=('i686' 'x86_64')
url='https://github.com/lxde/lxqt-build-tools'
license=('BSD')
makedepends=('git' 'cmake')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/lxde/lxqt-build-tools.git")
sha256sums=("SKIP")

pkgver() {
  cd "$_pkgname"
  git describe --always | sed "s/-/./g"
}

build() {
  rm -Rf build ; mkdir build
  cd build
  cmake $srcdir/$_pkgname -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  install -D -m644 $srcdir/$_pkgname/BSD-3-Clause $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
