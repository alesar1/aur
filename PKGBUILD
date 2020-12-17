# Maintainer:  Marcin (CTRL) Wieczorek <marcin@marcin.co>
# Contributor: Daniel Nagy <danielnagy at gmx de>
# Contributor: Mika Fischer <mika.fischer@zoopnet.de>

pkgname=soci
pkgver=4.0.1
pkgrel=3
pkgdesc="Database access library for C++"
arch=('i686' 'x86_64')
url="http://soci.sf.net"
license=('custom:boost')
depends=('gcc-libs')
makedepends=('cmake' 'postgresql-libs' 'sqlite3' 'unixodbc' 'boost')
optdepends=('oracle-instantclient-basic: support for oracle databases'
            'libmysqlclient: support for mysql databases'
            'postgresql-libs: support for postgresql databases'
            'sqlite3: support for sqlite databases'
            'unixodbc: support for ODBC databases'
            'libmysqlclient'
            'boost-libs')
source=("http://downloads.sourceforge.net/project/soci/soci/${pkgname}-${pkgver}/${pkgname}-${pkgver}.zip")
sha1sums=('183ceafdc1ed064731d3ebe82770a338a204e736')

build() {
    rm -rf "${srcdir}/${pkgname}-${pkgver}-build"
    mkdir -p "${srcdir}/${pkgname}-${pkgver}-build"
    cd "${srcdir}/${pkgname}-${pkgver}-build"
    cmake \
        -DSOCI_TESTS=OFF \
        -DCMAKE_INSTALL_PREFIX="/usr" \
        -DCMAKE_CXX_STANDARD=11       \
        "${srcdir}/${pkgname}-${pkgver}"
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}-build"
    make DESTDIR="${pkgdir}" install

    # For some reason -DLIBDIR=lib causes libsoci_empty.so to disappear
    if [ -e "${pkgdir}/usr/lib64" ]; then
        mv "${pkgdir}/usr/lib64" "${pkgdir}/usr/lib"
    fi
    install -Dm0644 "${srcdir}/${pkgname}-${pkgver}/LICENSE_1_0.txt" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
