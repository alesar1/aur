# Maintainer: danieltetraquark
# Contributor: mawcomw  <mawcomw@gmail.com>

pkgname=limesurvey
pkgver=4.3.34+210119
pkgrel=2
pkgdesc="The most popular FOSS online survey tool on the web."
depends=('php7')
license=('GPL2')
arch=('any')
url="https://www.limesurvey.org"
source=(
https://download.limesurvey.org/latest-stable-release/limesurvey${pkgver}.zip
)
sha256sums=('429d76249666ea55dc1d685d5620f93744cbfc23ff47539567448462ad386a3b')

optdepends=('apache: a supported application server'
	    'nginx: a supported application server'
	    'mariadb: MariaDB database support'
	    'mysql: MySQL database support'
	    'postgresql: PostgreSQL database support'
            'php-imap: email bounce tracking system')
#            'php-ldap: import survey participants using ldap')

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
