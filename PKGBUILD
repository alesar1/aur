# Maintainer: Aaron Bishop < erroneous at gmail >

pkgname=sqlpp11-connector-odbc
pkgver=0.03
pkgrel=1
pkgdesc="ODBC wrapper for sqlpp11"
arch=('x86_64' 'i686')
url="https://github.com/Erroneous1/sqlpp11-connector-odbc"
license=('CUSTOM')
depends=('gcc-libs')
makedepends=('cmake' 'git' 'unixodbc' 'sqlpp11>=0.42')
optdepends=('sqlpp11: For building programs using sqlpp11-connector-odbc')
source=("${url}/archive/v${pkgver}.tar.gz"
        "0.42.patch")
sha256sums=('c7117a5765dee89d9603fefe9b57adaea550e15791f0012979b41173c41ff46b'
            'ac55b1c63c99aafa44a415a99697be4af117e48137cdfd17939b7705015f7dea')

prepare() {
    rm -Rf build
    mkdir build
    patch -Rp0 < 0.42.patch
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr -DDATE_INCLUDE_DIR=/usr/include/sqlpp11 ../${pkgname}-${pkgver}
}

build() {
    cd build
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir/" install
    mkdir -p "$pkgdir"/usr/share/licenses/${pkgname}
    install -Dm644 ../${pkgname}-${pkgver}/LICENSE "$pkgdir"/usr/share/licenses/${pkgname}/LICENSE
}
