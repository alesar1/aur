# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=duc-git
pkgver=1.3.3.42.g8a19c54
pkgrel=2
pkgdesc="collection of tools for inspecting and visualizing disk usage (git version)"
arch=('i686' 'x86_64')
url="http://duc.zevv.nl/"
license=('GPL2')
depends=('cairo' 'pango' 'sqlite' 'ncurses')
makedepends=('git')
provides=('duc')
conflicts=('duc')
options=('!makeflags')
source=("git+https://github.com/zevv/duc.git")
md5sums=('SKIP')
_gitname="duc"

pkgver() {
  cd "$srcdir"/"$_gitname"
  git describe --tags | sed 's|-|.|g'
}

build() {
  cd "$srcdir"/"$_gitname"
  aclocal && autoconf && automake -a -f
  ./configure --prefix=/usr --with-db-backend=sqlite3 --disable-ui
  make
}

package() {
  cd "$srcdir/$_gitname"
  make DESTDIR="$pkgdir/" install
}
