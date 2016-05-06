# Maintainer: Philipp Schmitt (philipp<at>schmitt<dot>co)

pkgname=wallabag
pkgver=2.0.3
pkgrel=1
pkgdesc='Self hostable application for saving web pages'
arch=('any')
url='http://www.wallabag.org/'
license=('MIT')
depends=('php>=5.3.3' 'php-tidy' 'pcre' 'php-gd')
optdepends=('mariadb: For MySQL storage' 'php-sqlite: For sqlite storage' 'php-pgsql: For postgres storage')
install="$pkgname.install"
options=(!strip)
source=("https://github.com/wallabag/wallabag/archive/${pkgver}.tar.gz" "vendor.zip::http://wllbg.org/vendor")
sha256sums=('2252e0218917bc71db03db60a7b6940b4b8bdc8602732a458e906147e3c99a73'
            'bd3e843290de28f1c20fa19ed746ca221c9174cb7f0a9723618f21bddb883e12')

package() {
    cd "${pkgdir}"
    mkdir -p usr/share/webapps
    mv "${srcdir}/${pkgname}-${pkgver}" usr/share/webapps/${pkgname}
    mv "${srcdir}/vendor" usr/share/webapps/${pkgname}/vendor
    chown -R http:http "${pkgdir}/usr/share/webapps/wallabag"
}

