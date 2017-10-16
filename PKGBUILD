# Maintainer: Aaron Bishop < erroneous at gmail >

pkgname=mariadb-connector-odbc
conflicts=('mariadb-connector-odbc-bin')
pkgver=3.0.2
pkgrel=1
pkgdesc="MariaDB Connector/ODBC is a standardized, LGPL licensed database driver using the industry standard ODBC API"
arch=('x86_64' 'i686')
url="https://mariadb.com/kb/en/mariadb/mariadb-connector-odbc/"
license=('LGPL')
depends=('unixodbc' 'openssl')
makedepends=('mariadb-connector-c>=3')
options=('staticlibs')
source=("https://downloads.mariadb.org/interstitial/connector-odbc-${pkgver}/${pkgname}-${pkgver}-ga-src.tar.gz"
        "fix_param_ignore.patch")

sha1sums=('b3df774d5ffc9ebed0bed0a0502595e7435ac7d6'
          '61c09e0493964cda1ede3fc9785c308ef90231e0')

install=mariadb-connector-odbc.install

prepare() {
    _src="$srcdir/$pkgname-$pkgver-ga-src"
    cd "$_src"
    patch -s -p1 < ../fix_param_ignore.patch
    cd ..
    rm -Rf build
    mkdir build
    cd build
    cmake ../$pkgname-$pkgver-ga-src \
      -DCMAKE_BUILD_TYPE=RELEASE \
      -DWITH_EXTERNAL_ZLIB=ON \
      -DWITH_SQLITE=OFF \
      -DWITH_OPENSSL=ON \
      -DWITH_MYSQLCOMPAT=ON \
      -DCMAKE_INSTALL_PREFIX=/usr
}

build() {
    cd build
    make
}

package() {
    cd build
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/usr/lib64" "${pkgdir}/usr/lib"
}
