# Maintainer: danieltetraquark

pkgname=grocy
pkgver=3.0.1
pkgrel=4
pkgdesc="web-based self-hosted groceries & household management solution for your home"
depends=('php7' 'php7-sqlite' 'php7-gd')
makedepends=('composer' 'yarn')
license=('MIT')
arch=('any')
url="https://grocy.info/"
source=(
https://github.com/grocy/grocy/archive/v${pkgver}.zip
)
sha512sums=('6585fa973b1539822df57c390c17c7f400e8bd2dbc0629b0a29ecbaf21bf0cf37759b460c1700a349fce4a948403d6b995287acb33b15419016100c7797affa6')

backup=('etc/webapps/grocy/config.php')

build() {
    cd grocy-${pkgver}

    # composer need to have php-gd extension enabled, otherwise it will fail for a dependency of grocy.
    # note: you may need to adjust your php open_basedir setting, so that php can run!
    php7 -n -dextension=gd.so /usr/bin/composer install --no-interaction --no-dev --optimize-autoloader
    php7 /usr/bin/composer clear-cache

    yarn install --modules-folder public/node_modules --production
    yarn cache clean
}

package() {
    cd grocy-${pkgver}

    _instdir="$pkgdir"/usr/share/webapps/grocy
    mkdir -p "$_instdir" "$pkgdir"/etc/webapps/grocy "$pkgdir"/var/lib/webapps


    # install license
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    # copy files to install directory
    cp -ra . "$_instdir"/

    mv "$pkgdir"/usr/share/webapps/grocy/data "$pkgdir"/var/lib/webapps/grocy

#    mkdir "$pkgdir"/usr/share/webapps/grocy/data/
    ln -s /var/lib/webapps/grocy "$pkgdir"/usr/share/webapps/grocy/data

    ln -s /etc/webapps/grocy/config.php "$pkgdir"/var/lib/webapps/grocy/config.php

    mv config-dist.php "$pkgdir"/etc/webapps/grocy/config.php

    chown 33 "$pkgdir"/usr/share/webapps/grocy/data -R
}

