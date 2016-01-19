# Maintainer: Andya <ap_9@outlook.com>
# Contributor: Lazaros Koromilas <koromilaz@gmail.com>

pkgname=saxon-he
pkgver=9.7.0.2
pkgrel=1
pkgdesc="XSLT 2.0 / XPath 2.0 and 3.0 / XQuery 1.0 and 3.0 processor for Java - Home Edition"
url="http://saxon.sourceforge.net/"
license=('MPL')
arch=('any')
depends=('java-runtime-headless')
provides=('java-saxon')
conflicts=('java-saxon')
source=("http://sourceforge.net/projects/saxon/files/Saxon-HE/9.6/SaxonHE9-6-0-8J.zip"
        saxon-xslt.sh
        saxon-xquery.sh)
md5sums=('a4aa61220056d8b8938253946b89b0f2'
         '4197e2b5278a02e0aa7d383d9dc4f11d'
         '1a37078990f913ce7c37eb3a1bd39283')

package() {
    cd $srcdir
    install -Dm644 saxon9he.jar $pkgdir/usr/share/java/saxon/saxon9he.jar
    install -Dm755 saxon-xslt.sh $pkgdir/usr/bin/saxon-xslt
    install -Dm755 saxon-xquery.sh $pkgdir/usr/bin/saxon-xquery
    # link with simpler name for compat with others
    ln -s saxon9he.jar $pkgdir/usr/share/java/saxon/saxon.jar
    ln -s saxon-xslt $pkgdir/usr/bin/saxon
}
