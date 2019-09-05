# Maintainer: wisp3rwind <17089248+wisp3rwind@users.noreply.github.com>

pkgname=beets-alternatives
pkgver=0.10.0
pkgrel=1
pkgdesc="Beets plugin to manage external files"
arch=('any')
url="https://github.com/geigerzaehler/${pkgname}"
license=('MIT')
depends=('python' 'beets>=1.4.7')
source=("${url}/archive/v${pkgver}.tar.gz")
md5sums=('fcd491ca4ee93695786d54cf5c42dee0')

package() {
    cd "$srcdir/${pkgname}-${pkgver}"
    rm 'beetsplug/__init__.py'
    python setup.py install --root="$pkgdir/" --optimize=1
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 README.md "$pkgdir/usr/share/doc/${pkgname}/README.md"
}

# vim: set et sw=4 ts=4 :
