# Maintainer: Peter Mattern <pmattern at arcor dot de>

_pkgname=rssguard
pkgname=$_pkgname-git
pkgver=3.5.9.8.gf12c395e
pkgrel=1
pkgdesc='Simple, lightweight and easy-to-use RSS/ATOM feed aggregator developed using Qt'
arch=('i686' 'x86_64')
url='https://github.com/martinrotter/rssguard'
license=('GPL3')
depends=('qt5-webengine')
optdepends=('oxygen-icons: fallback icon theme')
makedepends=('git' 'qt5-tools')
provides=("$_pkgname")
conflicts=("$_pkgname" rss-guard{,-git})
source=("git+https://github.com/martinrotter/rssguard.git")
sha256sums=("SKIP")

pkgver() {
  cd $_pkgname
  git describe --always | sed 's:-:.:g'
}

build() {
  rm -Rf build && mkdir build
  cd build
  qmake $srcdir/$_pkgname/ -r CONFIG+=debug PREFIX=/usr
  make
}

package() {
  cd build
  make INSTALL_ROOT=$pkgdir install
}
