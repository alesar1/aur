# Maintainer: Razer <razer[AT]neuf[DOT]fr>

pkgname=python-asgi-redis
_pypi_pkgname=asgi_redis
pkgver=1.4.2
pkgrel=1
pkgdesc="Redis-backed ASGI channel layer implementation"
arch=(any)
url=" http://github.com/django/asgi_redis/"
license=('BSD')
makedepends=('python-setuptools')
depends=('python' 'python-redis' 'python-msgpack' 'python-asgiref')
source=("https://pypi.io/packages/source/a/${_pypi_pkgname}/${_pypi_pkgname}-${pkgver}.tar.gz")
md5sums=('aaeec40048404e57c1f8422c6cb02556')

build() {
    cd "${srcdir}/asgi_redis-${pkgver}"
    python setup.py build || return 1
}

package() {
    cd "${srcdir}/asgi_redis-${pkgver}"
    python setup.py install --root=${pkgdir} --optimize=1 || return 1
}
