# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix

pkgname=castxml
pkgdesc="C-family abstract syntax tree XML output tool."
pkgver=0.3.6
pkgrel=1
arch=(i686 x86_64)
url="https://github.com/CastXML/CastXML"
license=(Apache)
depends=(llvm clang)
makedepends=(git cmake python-sphinx)
source=("$pkgname-$pkgver.tar.gz::https://github.com/CastXML/CastXML/archive/v$pkgver.tar.gz")
sha256sums=('e51a26704864c89036a0a69d9f29c2a522a9fa09c1009e8b8169a26480bb2993')

prepare() {
  cd "CastXML-$pkgver"

  # Fix build issue as reported by Kniyl here https://github.com/CastXML/CastXML/issues/102
  sed -i "s|\${llvm_libs}|LLVM|g" src/CMakeLists.txt

  cmake . \
    -DCLANG_LINK_CLANG_DYLIB=1 \
    -DSPHINX_EXECUTABLE=/usr/bin/sphinx-build \
    -DSPHINX_HTML=1 \
    -DSPHINX_MAN=1 \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCastXML_INSTALL_DOC_DIR=share/doc/castxml \
    -DCastXML_INSTALL_MAN_DIR=share/man
}

build() {
  cd "CastXML-$pkgver"
  make
}

package(){
  cd "CastXML-$pkgver"
  make DESTDIR="$pkgdir" install
}
