# Maintainer: Fabio 'Lolix' Loli <lolix@disroot.org> -> https://github.com/FabioLolix
# Maintainer: Maxim Mikityanskiy <maxtram95@gmail.com>

pkgname=mindforger
pkgver=1.49.2
pkgrel=1
pkgdesc="Thinking notebook and Markdown IDE. Search, browse, view and edit your Markdown files. Get as much as possible from knowledge in your remarks"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://www.mindforger.com/"
license=(GPL2)
depends=(qt5-webkit)
makedepends=(git cmake)
source=("git+https://github.com/dvorka/mindforger.git#tag=$pkgver"
        "git+https://github.com/dvorka/mindforger-repository.git"
        "mindforger-discount::git+https://github.com/dvorka/discount.git"
        "mindforger-MITIE::git+https://github.com/dvorka/MITIE.git"
        "mindforger-cmark::git+https://github.com/dvorka/cmark.git")
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
  cd "$pkgname"
  git submodule init
  git config 'submodule.doc/mindforger-repository.url' "${srcdir}/mindforger-repository"
  git config 'submodule.deps/discount.url' "${srcdir}/mindforger-discount"
  git config 'submodule.deps/mitie.url' "${srcdir}/mindforger-MITIE"
  git config 'submodule.deps/cmark-gfm.url' "${srcdir}/mindforger-cmark"
  git submodule update
}

build() {
  mkdir -p "$srcdir/$pkgname"/deps/cmark-gfm/build
  cd "$srcdir/$pkgname"/deps/cmark-gfm/build
  cmake -DCMARK_TESTS=OFF -DCMARK_SHARED=OFF ..
  cmake --build .

  cd "$srcdir/$pkgname"/deps/discount
  ./configure.sh
  make

  cd "$srcdir/$pkgname"
  qmake -r CONFIG+=mfnoccache mindforger.pro
  make
}

package() {
  cd "$srcdir/$pkgname"
  make INSTALL_ROOT="$pkgdir" install
  # Remove package-specific static lib $pkgdir/usr/lib/libdiscount.a
  rm -r "$pkgdir/usr/lib"
}
