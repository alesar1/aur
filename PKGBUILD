# Maintainer: Alvaro F. García <alvarofernandogarcia@gmail.com>

_pkgname=libqmlbind
pkgname=$_pkgname-git
pkgver=9242442
pkgrel=1
pkgdesc="libqmlbind is a C library for creating QML bindings."
arch=('i686' 'x86_64')
url="https://github.com/seanchas116/libqmlbind"
license=('GPL')
depends=('qt5-base' 'qt5-declarative')
makedepends=('git')
conflicts=('libqmlbind')
options=('!emptydirs')
source=("$_pkgname::git+https://github.com/seanchas116/libqmlbind#branch=master")
sha256sums=('SKIP')

prepare() {
  cd "$srcdir/$_pkgname"
}

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --always | sed 's|-|.|g'
}

build() {
  cd "$srcdir/$_pkgname/qmlbind"
  qmake-qt5 -r INSTALL_PREFIX=/usr
  make
}

package()  {
  cd "$srcdir/$_pkgname/qmlbind"
  make INSTALL_ROOT="$pkgdir" install
}
