# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>
pkgname=python-mbedtls
pkgver=2.5.1
pkgrel=1
pkgdesc="A free cryptographic library for Python that uses mbed TLS for back end."
arch=(any)
url="https://pypi.org/project/${pkgname}/"
license=('MIT')
makedepends=(python-build python-installer python-wheel cython)
depends=(mbedtls python python-certifi python-typing-extensions)
source=(https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz)
sha256sums=('691778538f3d8019765908847d15106aa8d3e02cca0a696f28513ee2438d0f22')

build() {
    cd ${srcdir}/${pkgname}-${pkgver}
    python -m build --wheel --no-isolation
}

package() {
    cd ${srcdir}/${pkgname}-${pkgver}
    python -m installer --destdir="$pkgdir" dist/*.whl
}
