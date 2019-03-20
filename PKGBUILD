pkgname=python-cachingutil
pkgver=1.0.18
pkgrel=1
pkgdesc="A collection of caching utilities"
url="https://bitbucket.org/daycoder/cachingutil"
arch=(any)
license=('MIT')
makedepends=('python-setuptools')
depends=(python-requests python-timingsutil python-fdutil)
source=("https://pypi.io/packages/source/c/cachingutil/cachingutil-${pkgver}.tar.gz")
md5sums=('e425cec6949cd9426ea08a4e40261769')

prepare() {
  cd "${srcdir}"/cachingutil-$pkgver
}

build() {
  cd "${srcdir}"/cachingutil-$pkgver
  python setup.py build
}

package() {
  cd "${srcdir}/cachingutil-$pkgver"
  python setup.py install --root=${pkgdir} --optimize=1
}

