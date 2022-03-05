# Maintainer: Peter Mattern <pmattern at arcor dot de>

_pkgname=feathernotes
pkgname=$_pkgname-git
pkgver=0.10.0.10.gf0a367c
pkgrel=1
pkgdesc='Lightweight Qt hierarchical notes-manager for Linux.'
arch=('i686' 'x86_64')
url='https://github.com/tsujan/feathernotes'
license=('GPL3')
depends=('qt5-x11extras' 'qt5-svg' 'shared-mime-info' 'desktop-file-utils' 'hunspell')
makedepends=('git' 'cmake' 'qt5-tools')
optdepends=('qt5-translations: localized keyboard shortcuts')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+${url}.git")
sha256sums=("SKIP")

pkgver() {
  cd $_pkgname
  git describe --always | sed 's:^V::;s:-:.:g'
}

build() {
  rm -Rf build && mkdir build
  cd build
  cmake $srcdir/$_pkgname/
  make
}

package() {
  cd build
  make DESTDIR=$pkgdir install
}
