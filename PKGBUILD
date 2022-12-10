# # Maintainer: Cassandra Watergate (saltedcoffii) <cassandrajwatergate@gmail.com>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: dorphell <dorphell@gmx.net>

_pkgname=libunrar
pkgname=lib32-$_pkgname
pkgver=6.2.2
pkgrel=1
pkgdesc='Library and header file for applications that use libunrar (32-bit)'
arch=(x86_64)
depends=(lib32-gcc-libs)
url='https://www.rarlab.com/rar_add.htm'
license=(custom)
source=(https://www.rarlab.com/rar/unrarsrc-$pkgver.tar.gz)
sha256sums=('477d6ca7e246caec5412cc83b36c15a4ac837726a892df022919800129107cd5')

prepare() {
  sed -e '/CXXFLAGS=/d' -e '/LDFLAGS=/d' -i unrar/makefile # Use system build flags
  sed -e 's:$(DESTDIR)/lib:$(DESTDIR)/lib32:g' -i unrar/makefile # Use the 32-bit lib prefix
}

build() {
  mv unrar lib32-libunrar
  export LDFLAGS+=' -pthread'
  export CXXFLAGS+=' -m32' LDFLAGS+=' -m32'
  make -C lib32-libunrar lib
}

package() {
  cd lib32-libunrar
  install -Dm755 libunrar.{so,a} -t "$pkgdir"/usr/lib32/
  #install -Dm644 dll.hpp -t "$pkgdir"/usr/include/unrar/ # Header file already provided by libunrar
  # install license
  install -Dm644 license.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
