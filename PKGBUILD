# Maintainer: Aaron Bishop < erroneous at gmail >

pkgname=mariadb-connector-odbc
conflicts=('mariadb-connector-odbc-bin')
pkgver=3.1.5
_c_pkgver=3.1.5
pkgrel=1
pkgdesc="A standardized, LGPL licensed ODBC database driver for MariaDB"
arch=('x86_64' 'i686')
url="https://mariadb.com/kb/en/mariadb/mariadb-connector-odbc/"
license=('LGPL')
depends=('unixodbc>=2.3' 'openssl' 'zlib')
makedepends=('git' 'cmake')
options=('staticlibs')
source=("https://downloads.mariadb.org/interstitial/connector-odbc-${pkgver}/${pkgname}-${pkgver}-ga-src.tar.gz"
        "https://downloads.mariadb.org/interstitial/connector-c-${_c_pkgver}/mariadb-connector-c-${_c_pkgver}-src.tar.gz")

sha256sums=('c5a96fa166c8e7c93ceb86eeef2b4f726e076329f7686e36f7044e7b23b44ea9'
            'a9de5fedd1a7805c86e23be49b9ceb79a86b090ad560d51495d7ba5952a9d9d5')

install=mariadb-connector-odbc.install

prepare() {
    cd $pkgname-$pkgver-ga-src
    [ -d libmariadb ] || ln -s ../mariadb-connector-c-${_c_pkgver}-src libmariadb
    cd ..
    rm -Rf build
    mkdir build
}

build() {
    cd build
    cmake \
        -DCMAKE_BUILD_TYPE=RELEASE \
        -DWITH_EXTERNAL_ZLIB=ON \
        -DWITH_OPENSSL=ON \
        -DWITH_SSL=OPENSSL \
        -DINSTALL_LIB_SUFFIX=lib \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DMARIADB_UNIX_ADDR=/run/mysqld/mysqld.sock \
        ../$pkgname-$pkgver-ga-src
    make
}

package() {
    cd build
    DESTDIR="$pkgdir" cmake -DCOMPONENT=ODBCLibs -P cmake_install.cmake
}
