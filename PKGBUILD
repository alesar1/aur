# Maintainer: Alberto Sánchez Molero <alsamolero at gmail.com>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: TDY <tdy@gmx.com>

pkgname=moneymanagerex-git
_gitname=moneymanagerex
pkgver=1.4.0.alpha1.r0.0e72d84a
pkgrel=1
pkgdesc="An easy-to-use personal finance suite"
arch=('i686' 'x86_64')
url="http://www.moneymanagerex.org/"
license=('GPL')
depends=('wxgtk' 'webkitgtk2' 'hicolor-icon-theme') 
makedepends=('cmake' 'git' 'boost' 'gettext')
optdepends=('cups: for printing support')
replaces=('mmex')
provides=('moneymanagerex')
conflicts=('moneymanagerex')
source=(git+https://github.com/moneymanagerex/moneymanagerex.git)
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$_gitname"
	printf "%s" "$(git describe --long --tag | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
  cd "$srcdir/$_gitname"
  mkdir -p build
  git submodule update --init
}

build() {
  cd "$srcdir/$_gitname/build"
  cmake -DCMAKE_BUILD_TYPE=Release ..
  make
  make po
}

package() {
  cd "$srcdir/$_gitname/build"

  make DESTDIR="${pkgdir}" install
}
