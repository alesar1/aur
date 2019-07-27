# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=qt5-serialbus-git
pkgver=5.13.0_rc3.r60.g9f5b8ba
pkgrel=1
pkgdesc="Qt5 serial bus module"
arch=('i686' 'x86_64')
url="https://www.qt.io/"
license=('FDL' 'GPL' 'LGPL3')
depends=('qt5-serialport')
makedepends=('git')
provides=('qt5-serialbus')
conflicts=('qt5-serialbus')
source=("git+https://code.qt.io/qt/qtserialbus.git#branch=dev")
sha256sums=('SKIP')


prepare() {
  cd "$srcdir"

  mkdir -p "_build"
}

pkgver() {
  cd "qtserialbus"

  _tag=$(git tag -l --sort -v:refname | sed -n '1,1{s/v//p}')
  _rev=$(git rev-list --count v$_tag..HEAD)
  _hash=$(git rev-parse --short HEAD)
  printf "%s.r%s.g%s" "$_tag" "$_rev" "$_hash" | sed 's/-/_/g'
}

build() {
  cd "_build"

  qmake ../qtserialbus
  make
}

package() {
  cd "_build"

  make INSTALL_ROOT="$pkgdir" install

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;
}
