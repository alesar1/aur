# Maintainer: angelsl <angelsl@in04.sg>
# Contributor: Simon Doppler (dopsi) <dop.simon@gmail.com>

pkgname=firefly-iii
pkgver=5.7.9
pkgrel=1
pkgdesc='PHP personal finances manager'
arch=('any')
url="https://github.com/${pkgname}/${pkgname}"
license=('custom')
depends=('php-intl')
makedepends=('composer')
source=("$pkgname-$pkgver.tar.gz::https://github.com/${pkgname}/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('51521bdfe1ac6ba8c1a2ade98c071791e8313a1dbdb227741948072e20640d13')

backup=(
    "etc/webapps/$pkgname/config.env"
    "etc/webapps/$pkgname/config.env.heroku")

package() {
    cd "$srcdir/$pkgname-$pkgver"
    COMPOSER_ALLOW_SUPERUSER=1 composer install --no-scripts --no-dev --ignore-platform-reqs

    install -d "$pkgdir/usr/share/webapps/$pkgname" "$pkgdir/usr/share/licenses/$pkgname" "$pkgdir/etc/webapps/$pkgname"
    cp -rv * "$pkgdir/usr/share/webapps/$pkgname"
    install -D "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname"

    cp -v .env.example "$pkgdir/etc/webapps/$pkgname/.env"
    cp -v .deploy/*/.env* "$pkgdir/etc/webapps/$pkgname"

    for i in '' '.heroku' ; do
        mv -v "$pkgdir/etc/webapps/$pkgname/.env$i" "$pkgdir/etc/webapps/$pkgname/config.env$i"
    done

    ln -s "/etc/webapps/$pkgname/config.env" "$pkgdir/usr/share/webapps/$pkgname/.env"
    rm -rf "$pkgdir/usr/share/webapps/$pkgname/bootstrap/cache"

    mkdir -p "$pkgdir/var/cache/$pkgname"
    chown http:http "$pkgdir/var/cache/$pkgname"
    ln -s "/var/cache/$pkgname" "$pkgdir/usr/share/webapps/$pkgname/bootstrap/cache"

    mkdir -p "$pkgdir/var/lib"
    mv "$pkgdir/usr/share/webapps/$pkgname/storage" "$pkgdir/var/lib/firefly-iii"
    chown -R http:http "$pkgdir/var/lib/firefly-iii"
    chmod 775 "$pkgdir/var/lib/firefly-iii"
    ln -s "/var/lib/firefly-iii" "$pkgdir/usr/share/webapps/$pkgname/storage"
}

# vim:ts=4:sw=4:expandtab
