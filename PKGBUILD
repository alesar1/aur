# Maintainer: rho <rho.rhoit@gmail.com>

pkgname=parity-puzzle-git
pkgver=1.0
pkgrel=1
pkgdesc="Make all tiles equal"
arch=('any')
url="https://github.com/rhoit/batti"
license=('MIT')
depends=('bash' 'sed')
optdepends=('figlet')
makedepends=('git')
source=('git+https://github.com/rhoit/parity.git')
md5sums=('SKIP')
_gitname="parity"

prepare() {
  cd $_gitname
  git submodule init
  git submodule update
}

pkgver() {
  cd "$srcdir/$_gitname"
  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$_gitname"
  git describe --tags > .version
}

package() {
  cd $_gitname
  mkdir -p "$pkgdir/usr/local/bin"
  DESTDIR="$pkgdir" make install
}
