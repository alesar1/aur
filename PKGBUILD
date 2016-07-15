# Maintainer: Brenton Horne <brentonhorne77 at gmail dot com>
# Contributor: archshift

pkgname=jucipp
pkgdesc='A lightweight cross-platform C++ IDE'
pkgver=1.2.1
pkgrel=1
arch=('i686' 'x86_64')
url="https://github.com/cppit/jucipp"
license=('MIT')
depends=('gtksourceviewmm' 'clang' 'aspell' 'lldb' 'boost-libs' 'libgit2' 'ctags')
makedepends=('git' 'cmake' 'pkg-config' 'boost')
source=("$pkgname::git+https://github.com/cppit/jucipp.git#tag=v${pkgver}"
  "git+https://github.com/cppit/libclangmm.git"
  "git+https://github.com/eidheim/tiny-process-library")
sha1sums=('SKIP' 'SKIP' 'SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  git describe --tags `git rev-list --tags --max-count=1` | sed 's/v//g'
}

prepare() {
  cd "$srcdir/$pkgname"

  git submodule init
  git config submodule.libclangmm.url "$srcdir/libclangmm"
  git config submodule.tiny-process-library.url "$srcdir/tiny-process-library"
  git submodule update

  mkdir -p build
}

build() {
  cd "$srcdir/$pkgname/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -Wno-dev ..
}

package() {
  cd "$srcdir/$pkgname/build"
  make DESTDIR="$pkgdir" install
  install -D -m644 ../LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
