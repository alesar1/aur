# Maintainer:  Anton Kudelin <kudelin at protonmail dot com>
# Contributor: Christian Pfeiffer <cpfeiffer at live de>
# Contributor: Michael Straube <straubem gmx de>
# Contributor: xantares <xantares09 at hotmail dot com>

pkgname=combblas
_PkgName=CombBLAS
pkgver=1.6.2+r4666
pkgrel=2
pkgdesc="A library offering a set of linear algebra primitives for graph analytics"
arch=('x86_64')
url="https://github.com/PASSIONLab/CombBLAS"
license=("BSD")
depends=('openmpi')
makedepends=('cmake' 'git')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_PkgName"
  printf "1.6.2+r%s" "$(git rev-list --count HEAD)"
}

prepare() {
  mkdir build
}

build() {
  cd build

  # Some tests are computationally heavy MPI stuff, so avoid them
  cmake ../$_PkgName \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  # Remove OS X leftover files
  find "$pkgdir" -name "*.DS_Store" -delete
  find "$pkgdir" -name "._*" -delete

  install -Dm644 "$srcdir/$_PkgName/LICENSE" \
    -t "$pkgdir/usr/share/licenses/$pkgname"

  # Add extra headers
  install -Dm644 "$srcdir/$_PkgName"/Applications/*.h \
    -t "$pkgdir/usr/include/CombBLAS/Applications"
  install -Dm644 "$srcdir/$_PkgName"/Applications/BipartiteMatchings/*.h \
    -t "$pkgdir/usr/include/CombBLAS/Applications/BipartiteMatchings"
}
