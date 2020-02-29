# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=qt5-networkauth-git
pkgver=5.15.0_beta1.r1.g1afc993
pkgrel=1
pkgdesc="Qt5 network authentication module"
arch=('i686' 'x86_64')
url="https://www.qt.io/"
license=('FDL' 'GPL' 'custom')
depends=('qt5-base')
makedepends=('git')
provides=('qt5-networkauth')
conflicts=('qt5-networkauth')
source=("git+https://code.qt.io/qt/qtnetworkauth.git#branch=5.15")
sha256sums=('SKIP')


prepare() {
  cd "$srcdir"

  mkdir -p "_build"
}

pkgver() {
  cd "qtnetworkauth"

  _tag=$(git tag -l --sort -v:refname | sed -n '1,1{s/v//p}')
  _rev=$(git rev-list --count v$_tag..HEAD)
  _hash=$(git rev-parse --short HEAD)
  printf "%s.r%s.g%s" "$_tag" "$_rev" "$_hash" | sed 's/-/_/g'
}

build() {
  cd "_build"

  qmake ../qtnetworkauth
  make
}

package() {
  cd "_build"

  make INSTALL_ROOT="$pkgdir" install

  # Drop QMAKE_PRL_BUILD_DIR because reference the build dir
  find "$pkgdir/usr/lib" -type f -name '*.prl' \
    -exec sed -i -e '/^QMAKE_PRL_BUILD_DIR/d' {} \;

  cd "$srcdir/qtnetworkauth"
  install -Dm644 "LICENSE.GPL3-EXCEPT" -t "$pkgdir/usr/share/licenses/qt5-networkauth"
}
