# Maintainer: Markus Moser<marmoser@wu.ac.at>
pkgname=naviserver-postgres-connector
pkgver=4.99.19
pkgrel=1
pkgdesc="Naviserver postgres connector"
arch=('x86_64')
url="https://bitbucket.org/naviserver/naviserver/"
license=('MPL')
depends=('tcllib>=1.17' 'tcl>=8.5.18' 'postgresql>=9.4' 'naviserver>=4.99.19')
source=("http://download.sourceforge.net/sourceforge/naviserver/naviserver-${pkgver}-modules.tar.gz")
md5sums=("9ab6cc2055c0a5bff4dc05141654b04a")

build() {
    cd modules/nsdbpg
    #modules
    _pg_incl=/usr/include/postgresql
    _pg_lib=/usr/lib
    _pg_user=postgres
    make PGLIB=${_pg_lib} PGINCLUDE=${_pg_incl} NAVISERVER=/usr/lib/naviserver
}

package() {
    install -m 644 -D modules/nsdbpg/nsdbpg.so ${pkgdir}/usr/lib/naviserver/bin/nsdbpg.so
}

