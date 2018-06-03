# Maintainer: Javier Torres <jtorres@carto.com>
pkgname=odbc_fdw
pkgver=0.3.0
pkgrel=1
pkgdesc="PostgreSQL extension that implements a Foreign Data Wrapper (FDW) for remote databases using ODBC"
arch=('x86_64')
url="https://github.com/CartoDB/odbc_fdw"
license=('BSD')
groups=()
depends=('postgresql' 'unixodbc')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=('https://github.com/CartoDB/odbc_fdw/archive/0.3.0.tar.gz')
noextract=()
sha256sums=('f2d05352de925c8874fcfde24e03a7b08d964047f587fdf7ed317bc386ccc5dd')

build() {
  cd "$srcdir/odbc_fdw-$pkgver"
  make
}

package() {
  cd "$srcdir/odbc_fdw-$pkgver"

  make install DESTDIR="$pkgdir"
  install -Dm0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
