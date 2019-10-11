# Maintainer: Kyle <kyle@gmx.ca>
pkgname=espeak-ng-git
_gitname=espeak-ng
pkgver=0.0 # determined from git origin
pkgrel=1
pkgdesc="Next generation open source speech synthesizer based on Espeak (git version)"
arch=('aarch64' 'armv6h' 'armv7h' 'i686' 'x86_64')
url="https://github.com/espeak-ng/espeak-ng"
license=('GPL3')
depends=(gcc-libs pcaudiolib)
optdepends=()
makedepends=('git' 'ruby-ronn')
provides=("espeak-ng=${pkgver}")
conflicts=(espeak espeak-test)
source=('git+https://github.com/espeak-ng/espeak-ng.git')
md5sums=('SKIP')

pkgver() {
  cd $_gitname
  # Use the tag of the last commit
  printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
  # Espeak-ng doesn't yet support multi-threaded builds. Overriding MAKEFLAGS fixes this here for now.
  MAKEFLAGS="-j 1"
  cd $_gitname
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd $_gitname
  make DESTDIR="$pkgdir/" install
  cd $pkgdir/usr/bin
  cd ../lib
    for f in libespeak-ng.so*; do
    ln -s "$f" $(echo $f|sed 's|-ng||')
  done
}

# vim:set ts=2 sw=2 et:
