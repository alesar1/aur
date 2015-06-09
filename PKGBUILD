# Maintainer: Otto Naderer <otto.naderer@openmailbox.org>
pkgname=irrdynamics
pkgver=9.276fd3e
pkgrel=1
pkgdesc="A light-weight Bullet Physics wrapper for the Irrlicht graphics 
engine"
arch=(i686 x86_64 armv7h armv6h)
url="https://github.com/ottona/irrdynamics"
license=('zlib')
groups=()
depends=(bullet irrlicht)
makedepends=('git')
source=("git://github.com/ottona/irrdynamics.git")
md5sums=("SKIP")

_gitname=irrdynamics

build() {
  cd "$srcdir/$_gitname"
  make config=release
}

package() {
  cd "$srcdir/$_gitname"
  mkdir -p "$pkgdir/usr/lib/"
  mkdir -p "$pkgdir/usr/include/irrDynamics"
  pwd
  install lib/* "$pkgdir/usr/lib/"
  install include/* "$pkgdir/usr/include/irrDynamics"
}

pkgver() {
  cd $_gitname
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

