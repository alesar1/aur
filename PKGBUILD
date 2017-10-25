# Maintainer: DATSD <DAStudio *dot* 71e6fd52 *at* gmail *dot* com>
# Maintainer: lilydjwg <lilydjwg@gmail.com>
# Contributor: Zhuoyun Wei <wzyboy@wzyboy.org>
# Based-on: aur/graphite-api-git by Justin Dray <justin@dray.be>

pkgname=graphite-api
pkgver=1.1.3
pkgrel=4
pkgdesc="Graphite-web, without the interface. Just the rendering HTTP API."
url="https://github.com/brutasse/graphite-api"
license=('Apache')
depends=('python-pytz' 'python-six' 'python-flask' 'python-structlog'
         'python-yaml' 'python-tzlocal' 'python-cairocffi' 'python-pyparsing'
         'gunicorn')
makedepends=('python-setuptools')
optdepends=('python-flask-cache: For caching'
            'python-raven: For sentry support')
backup=('etc/graphite-api.yaml')
arch=('any')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/brutasse/${pkgname}/archive/${pkgver}.tar.gz"
        "graphite-api.service"
        "graphite-api.socket")
sha256sums=('801bb3142046b614956a5c7cf27da502306d27faa60a314719855d9d30282d1e'
            '07db822a91bf5fd593905bbb45c8cad699ab23f2910136c38851406b005d124f'
            'e7bfcbca2b5924dd22466d09b40c0d04517d44eecfcbd6afe8cf36d362331275')

build() {
        cd "$srcdir/$pkgname-$pkgver"
        python setup.py build
}

package() {
        cd "$srcdir/$pkgname-$pkgver"
        python setup.py install --root="${pkgdir}/" --optimize=1
        mkdir -p "$pkgdir/var/lib/graphite"
        install -Dm0644 "$srcdir/graphite-api.service" "$pkgdir/usr/lib/systemd/system/graphite-api.service"
        install -Dm0644 "$srcdir/graphite-api.socket" "$pkgdir/usr/lib/systemd/system/graphite-api.socket"
        install -Dm0644 "$srcdir/$pkgname-$pkgver/fpm/conf/etc/graphite-api.yaml" "$pkgdir/etc/graphite-api.yaml"
        sed -i 's|/srv/|/var/lib/|g' "$pkgdir/etc/graphite-api.yaml"
}
