# Maintainer: Aleksey Filippov <sarum9in@gmail.com>

_pkgbase=grpc
pkgname=php-$_pkgbase
pkgver=0.11.0
_pkgver=$(echo $pkgver | tr . _)
pkgrel=1
pkgdesc="A high performance, open source, general RPC framework that puts mobile and HTTP/2 first."
arch=('i686' 'x86_64')
url='http://www.grpc.io/'
license=('BSD')
depends=('grpc' 'php')
makedepends=('re2c')
source=(https://github.com/$_pkgbase/$_pkgbase/archive/release-$_pkgver.tar.gz)
md5sums=('54de111e64821c4f8076cfabc2892e91')

build() {
  cd "$srcdir/$_pkgbase-release-$_pkgver/src/php/ext/$_pkgbase"
  phpize
  ./configure
  make $MFLAGS
}

_install_dir() (
  cd "$2"
  find . -type f -exec install "-Dm$1" '{}' "$pkgdir/$3/{}" ';'
  find . -type l -exec cp -a '{}' "$pkgdir/$3/{}" ';'
)

check() {
  cd "$srcdir/$_pkgbase-release-$_pkgver/src/php/ext/$_pkgbase"
  make test
}

package() {
  cd "$srcdir/$_pkgbase-release-$_pkgver/src/php/ext/$_pkgbase"
  make install "INSTALL_ROOT=$pkgdir"
  cd "$srcdir/$_pkgbase-release-$_pkgver/src/php"
}
