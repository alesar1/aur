# Maintainer: Lari Tikkanen <lartza@wippies.com>

pkgname=python-irc3
_pkgname=irc3
pkgver=1.1.6
pkgrel=1
pkgdesc="plugable irc client library based on asyncio"
arch=(any)
url="https://github.com/gawel/irc3"
license=('MIT')
depends=('python' 'python-venusian')
makedepends=('python-setuptools')
optdepends=('python-docopt: for the irc3 command')
source=("https://pypi.io/packages/source/i/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('7c6e43c939804355021d1c6c7c3be9c962df592bd1a3d39d3acdf7fcef62508d')

build() {
    cd $_pkgname-$pkgver
    python setup.py build
}

package() {
    cd $_pkgname-$pkgver
    python setup.py install --root=$pkgdir --optimize=1
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
