# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Andya <hugo981@gmx.com>
# Contributor: Lazaros Koromilas <koromilaz@gmail.com>

pkgname=saxon-he
_major=9.7
_minor=0.8
pkgver=${_major}.${_minor}
_pkgver=${pkgver//./-}
pkgrel=2
pkgdesc="XSLT 2.0 / XPath 2.0 and 3.0 / XQuery 1.0 and 3.0 processor for Java - Home Edition"
url="http://saxon.sourceforge.net/"
license=('MPL')
arch=('any')
depends=('java-runtime-headless')
provides=('java-saxon')
conflicts=('java-saxon')
source=("http://sourceforge.net/projects/saxon/files/Saxon-HE/${_major}/SaxonHE${_pkgver}J.zip"
        saxon-xslt.sh
        saxon-xquery.sh)
md5sums=('6365c93548d2ca14dfdc26f83929143c'
         '4197e2b5278a02e0aa7d383d9dc4f11d'
         '1a37078990f913ce7c37eb3a1bd39283')

package() {
    cd "${srcdir}"
    install -Dm644 saxon9he.jar "${pkgdir}/usr/share/java/saxon/saxon9he.jar"
    install -Dm755 saxon-xslt.sh "${pkgdir}/usr/bin/saxon-xslt"
    install -Dm755 saxon-xquery.sh "${pkgdir}/usr/bin/saxon-xquery"
    # link with simpler name for compat with others
    ln -s saxon9he.jar "${pkgdir}/usr/share/java/saxon/saxon.jar"
    ln -s saxon-xslt "${pkgdir}/usr/bin/saxon"
}
