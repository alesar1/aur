# Maintainer: danieltetraquark
# Contributor: mawcomw  <mawcomw@gmail.com>

pkgname=limesurvey
pkgver=4.4.14+210322
pkgrel=1
pkgdesc="The most popular FOSS online survey tool on the web."
depends=('php7')
license=('GPL2')
arch=('any')
url="https://www.limesurvey.org"
source=(
https://download.limesurvey.org/latest-stable-release/limesurvey${pkgver}.zip
)
sha256sums=('c756e53169d9108473dca17a0b0e8cb19ae7960923288ec3ef7b52f9d457481d')

optdepends=('apache: a supported application server'
	    'nginx: a supported application server'
	    'mariadb: MariaDB database support'
	    'mysql: MySQL database support'
	    'postgresql: PostgreSQL database support'
            'php7-imap: email bounce tracking system')
#            'php7-ldap: import survey participants using ldap')

backup=('etc/webapps/limesurvey/config.php')

package() {
    _instdir="$pkgdir"/usr/share/webapps
    mkdir -p "$_instdir" "$pkgdir"/etc/webapps/limesurvey


    #install license
    install -Dm644 "${srcdir}/${pkgname}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    cd "$_instdir"
    cp -ra "$srcdir"/limesurvey/ .

    ln -s /etc/webapps/limesurvey/config.php "$pkgdir"/usr/share/webapps/limesurvey/application/config/config.php

    chown -R http:http "$_instdir"/limesurvey/application/config
    chown -R http:http "$_instdir"/limesurvey/upload
    chown -R http:http "$_instdir"/limesurvey/tmp

    chown -R http:http "$pkgdir"/etc/webapps/limesurvey

#    chown -R http:http "$_instdir"/limesurvey/

# TODO: apache, nginx example config

    echo "configure your webserver and phpbackend. Files are at /usr/share/webapps/limesurvey. In the browser, go to /index.php?r=installer."
}
